import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 650px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    button {
      margin: 20px 0 0;
      width: 162px;
      height: 40px;
      background: #f94d6a;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#F94D6A')};
      }
    }
  }
`;
