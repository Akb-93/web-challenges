import styled from 'styled-components';

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.$isBlack ? 'black' : 'green')};
  &:hover{
    background-color: red;
  };
`;

export default BoxWithStyledComponents;