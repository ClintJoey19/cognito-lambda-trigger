"use client";
import { getCalendar } from "@/lib/amplify/amplify.rest";
import { useEffect } from "react";

const page = async () => {
  useEffect(() => {
    const response = getCalendar().then((res) => console.log(res));
  });

  return <div>Calendar</div>;
};

export default page;
