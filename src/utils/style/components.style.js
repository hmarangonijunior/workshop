import styled from 'styled-components';
import { flexMixin } from './mixins.style';

const StyledButton = styled.button`
  ${flexMixin('center', 'center')}
  height: 50px;
  box-shadow: 1px 2px 8px rgba(127, 127, 127, 0.25);
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(85%);
  }
`;

export default StyledButton;
