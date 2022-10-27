import styled, {keyframes} from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeComponent = styled.div`
  animation: ${fade} ${props => props.defaultValue || '0.2'}s ease-in-out;
`;
