"use client";
import { signInWithRedirect } from "aws-amplify/auth";

const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      await signInWithRedirect({ provider: "Google" });
    } catch (error) {
      console.error(error);
    }
  };
  return <button onClick={handleSignIn}>SignInButton</button>;
};

export default SignInButton;
