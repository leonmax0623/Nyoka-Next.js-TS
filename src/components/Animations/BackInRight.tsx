import styled, {keyframes} from 'styled-components';

const backInRight = keyframes`
  0% {
    transform: translateX(2000px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const BackInRightComponent = styled.div`
  animation: ${backInRight} 0.4s ease-in-out;
`;
