import styled from "styled-components";

const STYLE = {
  LoginForm: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    border: 1px red solid;
  `,
  Input: styled.input`
    width: 360px;
    height: 60px;
    border-radius: 8px;
    outline: none;
    color: black;
    &:focus{
      background-color: cyan;
    }
  `,
};

export default STYLE;
