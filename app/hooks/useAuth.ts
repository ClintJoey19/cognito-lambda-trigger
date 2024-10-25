import { fetchUserAttributes } from "aws-amplify/auth";
import React from "react";
import useSWR from "swr";

const fetchUser = async (key: string) => {
  try {
    const auth = await fetchUserAttributes();
  } catch (error) {
    console.error(error);
  }
};

const useAuth = () => {
  const { data, isLoading, error } = useSWR("/user");
  return {};
};

export default useAuth;
