import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #ffffff;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #999999;
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  button {
    width: 71px;
    height: 42px;
    border: 0;
    background: #d44059;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
