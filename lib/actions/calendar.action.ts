"use server";
import { cookies } from "next/headers";
import { get } from "aws-amplify/api/server";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "../amplify/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";

// const { tokens } = await fetchAuthSession(context);
// const accessToken = tokens?.idToken?.payload["custom:access_token"] as string;
// const refreshToken = tokens?.idToken?.payload["custom:refresh_token"] as string;

export const platFormApi = async (apiName: string) => {
  try {
    const api = {
      get: async (contextSpec: AmplifyServer.ContextSpec, path: any) => {
        get;
      },
    };
  } catch (error) {
    console.error(error);
  }
};
