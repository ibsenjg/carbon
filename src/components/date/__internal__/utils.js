import { format, formatISO, isMatch, parse, parseISO } from "date-fns/fp";
import { SEPARATORS } from "./locale-map/locale-map";

export function parseDate(formatString, valueString) {
  return parse(new Date(), formatString, valueString);
}

export function formatToISO(formatString, valueString) {
  const dateValue = parseDate(formatString, valueString);

  if (!isDateValid(dateValue)) {
    return null;
  }

  return formatISO(dateValue).split("T")[0];
}

export function formattedValue(formatString, value) {
  return format(formatString, value);
}

export function isDateValid(date) {
  return date && date.toString() !== "Invalid Date";
}

function hasMatchedFormat(formatString, valueString) {
  return (
    formatString.length === valueString.length &&
    isMatch(formatString, valueString)
  );
}

export function additionalYears(formatString, value) {
  if (formatString.split("y").length - 1 !== 2) {
    return [formatString, value];
  }

  let year = value.substring(value.length - 2);
  const dayAndMonth = value.substring(0, value.length - 2);
  const yearAsNumber = Number(year);

  if (yearAsNumber < 69) {
    year = String(2000 + yearAsNumber);
  } else {
    year = String(1900 + yearAsNumber);
  }

  return [
    `${formatString.substring(0, formatString.length - 2)}yyyy`,
    `${dayAndMonth}${year}`,
  ];
}

function makeSeparatedValues(arr, str) {
  return arr.map((_, i) => str.substring(arr[i], arr[i + 1]));
}

function checkForCompleteMatch(formatArray, valueArray) {
  return formatArray.every((formatString, i) =>
    hasMatchedFormat(formatString, valueArray[i])
  );
}

function findMatchWithNoSeparators(valueString, formatString) {
  const indexArray = formatString.split("").reduce((arr, char, index) => {
    if (index === 0 || char !== formatString[index - 1]) {
      return [...arr, index];
    }
    return arr;
  }, []);

  const formatArray = makeSeparatedValues(indexArray, formatString);
  const valueArray = makeSeparatedValues(indexArray, valueString);

  if (checkForCompleteMatch(formatArray, valueArray)) {
    return [formatArray.join("."), valueArray.join(".")];
  }

  return null;
}

function findMatchWithSeparators(valueString, formatString, separator) {
  const formatArray = formatString.split(separator);
  const valueArray = valueString.split(separator);

  if (checkForCompleteMatch(formatArray, valueArray)) {
    return [formatString, valueString];
  }

  return null;
}

const getSeparator = (value) => {
  if (!value) {
    return false;
  }

  const separator = SEPARATORS.slice(1).find((char) => value.includes(char));

  return separator || "";
};

export function findMatchedFormatAndValue(valueString, formats) {
  const valueSeparator = getSeparator(valueString);
  const filteredFormats = formats.filter(
    (formatString) =>
      formatString.length === valueString.length &&
      getSeparator(formatString) === valueSeparator
  );

  const matchedFormatAndValue = filteredFormats.reduce((acc, formatString) => {
    const formatSeparator = getSeparator(formatString);
    if (valueSeparator === "" && formatSeparator === "") {
      // This check is added as there is a bug in date-fns https://github.com/date-fns/date-fns/issues/2785
      // it incorrectly matches or fails to parse valid dates with no separators
      const match = findMatchWithNoSeparators(valueString, formatString);

      if (match) {
        return match;
      }
    }

    if (
      valueSeparator &&
      formatSeparator &&
      valueSeparator === formatSeparator
    ) {
      const match = findMatchWithSeparators(
        valueString,
        formatString,
        valueSeparator
      );

      if (match) {
        return match;
      }
    }
    return acc;
  }, []);

  return matchedFormatAndValue;
}

export function parseISODate(value) {
  return parseISO(value);
}
