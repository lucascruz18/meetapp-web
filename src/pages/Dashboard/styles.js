import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 850px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 32px;
      margin: 0 20px;
    }

    button {
      width: 172px;
      height: 42px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      font-size: 16px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: ${darken(0.1, '#f94d6a')};
      }
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const MeetupList = styled.li`
  width: 100%;
  height: 62px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  strong {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-right: 15px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
