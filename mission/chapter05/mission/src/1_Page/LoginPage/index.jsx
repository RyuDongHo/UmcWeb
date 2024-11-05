import STYLE from "./style";
import { useForm } from "react-hook-form";
import { IdInput, PwInput } from "../../2_Widget/Input";
const LoginPage = () => {

  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <STYLE.LoginForm onSubmit={handleSubmit(onSubmit)}>
      {/* <IdInput formConnector={register} /> */}
      <input type="email" {...register("email")}/>
      <PwInput {...register("password")} />
      <input type="submit" />
    </STYLE.LoginForm>
  );
};

export default LoginPage;
