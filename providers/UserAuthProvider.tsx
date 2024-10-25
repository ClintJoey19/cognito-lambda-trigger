import React from "react";
import useSWR, { SWRConfig } from "swr";

const fetchUser = async () => {};

const UserAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default UserAuthProvider;
