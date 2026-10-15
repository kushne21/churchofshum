import {ButtonBox, InputBox} from "../Components/boxes";

export default function Login() {
  return (
    <div className="flex flex-col bg-box p-5 justify-center items-center">
        <h1 className="font-semibold mb-2">Log in with your Email address and password!</h1>
        <InputBox str="Email" labelstr="Email"></InputBox>
        <InputBox str="Password" labelstr="Password"></InputBox>
        <ButtonBox>Login</ButtonBox>
        <h2>Don't have an account? Sign up <a href="../Signup" className="font-bold">here.</a></h2>
    </div>
  );
}
