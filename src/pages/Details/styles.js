import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 850px;
  margin: 50px auto;
  /* position: relative; */

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;

    strong {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
    }

    div > button:first-child {
      background: #4dbaf9;
      margin-right: 10px;

      &:hover {
        background: ${darken(0.1, '#4dbaf9')};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 138px;
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

    button {
      width: 138px;
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

  img {
    width: 100%;
    height: 350px;
    border-radius: 4px;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    flex-direction: row;

    div:first-child {
      margin-right: 10px;
    }

    div {
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;
