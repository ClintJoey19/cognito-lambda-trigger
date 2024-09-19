import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "@/src/amplifyconfiguration.json";
import { cookies } from "next/headers";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth/server";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const getUser = async () => {
  try {
    const user = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => await getCurrentUser(contextSpec),
    });

    if (!user) return null;

    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getUserAttributes = async () => {
  try {
    const user = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => await fetchUserAttributes(contextSpec),
    });

    if (!user) return null;

    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getServerSession = async () => {
  try {
    const session = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => await fetchAuthSession(contextSpec),
    });

    if (!session) return null;

    return session;
  } catch (error) {
    console.error(error);
  }
};
