import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 64px);
  justify-content: center;
  align-items: center;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
