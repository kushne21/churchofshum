'use client'
import {ButtonBox, InputBox} from "../Components/boxes";
import {signup} from '../Utils/auth';


export default function Signup() {
  return (
    <div >
        <form action={signup} className="flex flex-col bg-box p-5 justify-center items-center">
          <h1 className="font-semibold mb-2">Sign up with your Email address and password!</h1>
          <InputBox str="Email" labelstr="Email"></InputBox>
          <InputBox atype="Password" str="Password" labelstr="Password"></InputBox>
          <InputBox atype="Password" str="Password" labelstr="Confirm Password"></InputBox>
          <ButtonBox>Create your Shum account</ButtonBox>
        </form>
        
        {/*
        useActionState() -> form validation
        useFormStatus() -> Data Request
        */}
    </div>
  );
}