"use client";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "@/src/amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

const AuthProvider = () => {
  return null;
};

export default AuthProvider;

// export default withAuthenticator(AuthProvider, {
//   socialProviders: ["google"],
//   hideSignUp: true,
// });
