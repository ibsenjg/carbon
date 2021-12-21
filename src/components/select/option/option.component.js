import React from "react";
import PropTypes from "prop-types";
import StyledOption from "./option.style";

const Option = React.forwardRef(
  (
    { text, children, onSelect, value, id, isHighlighted, hidden, onClick },
    ref
  ) => {
    function handleClick() {
      if (!onClick) {
        onSelect({ text, value, id });
      } else {
        onSelect();
        onClick({ target: { text, value, id } });
      }
    }

    return (
      <StyledOption
        id={id}
        ref={ref}
        aria-selected={isHighlighted}
        data-component="option"
        onClick={handleClick}
        isHighlighted={isHighlighted}
        role="option"
        hidden={hidden}
      >
        {children || text}
      </StyledOption>
    );
  }
);

Option.propTypes = {
  /** The option's visible text, displayed within Textbox of Select, and used for filtering */
  text: PropTypes.string.isRequired,
  /** Optional: alternative rendered content, displayed within SelectList of Select (eg: an icon, an image, etc) */
  children: PropTypes.node,
  /** The option's invisible internal value */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  /**
   * @private
   * @ignore
   * Component id (prop added by the SelectList component)
   */
  id: PropTypes.string.isRequired,
  /**
   * @private
   * @ignore
   * Callback to return value when the element is clicked (prop added by the SelectList component) */
  onClick: PropTypes.func,
  /**
   * @private
   * @ignore
   * Callback to return value when the element is selected (prop added by the SelectList component) */
  onSelect: PropTypes.func,
  /**
   * @private
   * @ignore
   * True if the option is highlighted (prop added by the SelectList component) */
  isHighlighted: PropTypes.bool,
  /**
   * @private
   * @ignore
   * True when option should be hidden from the view (prop added by the SelectList component) */
  hidden: PropTypes.bool,
  /** MultiSelect only - custom Pill border color - provide any color from palette or any valid css color value. */
  // eslint-disable-next-line react/no-unused-prop-types
  borderColor: PropTypes.string,
  /** MultiSelect only - fill Pill background with color */
  // eslint-disable-next-line react/no-unused-prop-types
  fill: PropTypes.bool,
};

export default Option;
