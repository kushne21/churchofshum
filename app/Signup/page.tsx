import {ButtonBox, InputBox} from "../Components/boxes";

export default function Signup() {
  return (
    <div className="flex flex-col bg-box p-5 justify-center items-center">
        <h1 className="font-semibold mb-2">Sign up with your Email address and password!</h1>
        <InputBox str="Email" labelstr="Email"></InputBox>
        <InputBox str="Password" labelstr="Password"></InputBox>
        <InputBox str="Password" labelstr="Confirm Password"></InputBox>
        <ButtonBox>Create your Shum account</ButtonBox>
    </div>
  );
}