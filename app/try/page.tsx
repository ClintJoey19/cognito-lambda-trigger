import { platFormApi } from "@/lib/actions/calendar.action";
import React from "react";

const page = async () => {
  await platFormApi("/calendar");
  return <div>page</div>;
};

export default page;
