import styled from "styled-components";
import { margin, MarginProps } from "styled-system";
import baseTheme from "../../style/themes/base";

type StyledHrProps = React.HTMLAttributes<HTMLElement> & MarginProps;

const StyledHr = styled.hr<StyledHrProps>`
  ${margin}
  width: inherit;
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.hr.background};
`;

StyledHr.defaultProps = {
  theme: baseTheme,
};

export default StyledHr;