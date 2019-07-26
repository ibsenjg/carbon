import React from 'react';
import PropTypes from 'prop-types';
import extractProps from './extract-props';

const allProps = {
  boolProp: true,
  stringProp: 'string',
  anotherBoolProp: false,
  objectProp: { a: true }
};

const MockComponent = (props) => {
  return <div { ...props } />;
};

MockComponent.propTypes = {
  anotherBoolProp: PropTypes.bool,
  stringProp: PropTypes.string,
  objectProp: PropTypes.object,
  optionalProp: PropTypes.bool
};

describe('extractProps', () => {
  const expectedProps = {
    anotherBoolProp: false,
    stringProp: 'string',
    objectProp: { a: true }
  };

  it('returns props defined in a component propTypes', () => {
    const componentProps = extractProps(allProps, MockComponent);
    expect(componentProps).toEqual(expectedProps);
  });
});