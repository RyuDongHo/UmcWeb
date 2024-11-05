import STYLE from "./style";
import React from "react";
import { idRegex, idRegexMsg } from "../const/regex";

const LoginPage = () => {
  const [validate, setValidate] = React.useState(0); // 0 = no input, -1 = validation false, 1 = validation pass
  
  let input = React.useRef();

  const handleInputChange = () => {
    const inputValue = input.current.value;
    if (inputValue.length === 0) {
      setValidate(0);
    } else if (!idRegex.test(inputValue)) {
      setValidate(-1);
    } else {
      setValidate(1);
    }
  };

  let validationMessage;
  if (validate === -1) {
    validationMessage = <STYLE.ErrMsg>{idRegexMsg}</STYLE.ErrMsg>;
  } else {
    validationMessage = null;
  }

  return (
    <STYLE.Container>
      <STYLE.Input
        placeholder="ID를 입력하세요"
        ref={input}
        onChange={handleInputChange}
      />
      {validationMessage}
    </STYLE.Container>
  );
};

export default LoginPage;
