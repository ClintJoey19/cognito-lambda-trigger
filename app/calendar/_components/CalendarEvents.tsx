"use client";
import { CalendarData, getCalendar } from "@/lib/amplify/amplify.rest";
import React, { useEffect, useState } from "react";

const CalendarEvents = () => {
  const [events, setEvents] = useState<CalendarData | undefined>();
  const [nextPageToken, setNextPageToken] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = (await getCalendar()) as CalendarData | undefined;

        if (!res) return console.log("No events");

        setEvents(res);
        setNextPageToken(res.nextPageToken);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  if (!events) return null;

  return (
    <ul>
      {events?.items.map((item) => (
        <li key={item.id}>
          <p>Summary: {item?.summary}</p>
          <p>Hangout Link: {item?.hangoutLink}</p>
          <p>HTML Link: {item?.htmlLink}</p>
          <p>Creator: {item.creator?.email}</p>
          <p>Entry Points</p>
          <ul>
            {item?.conferenceData?.entryPoints.map((entryPoint, i) => (
              <React.Fragment key={i}>
                <li>Type {entryPoint.entryPointType}</li>
                <li>Type {entryPoint.label}</li>
                <li>Uri {entryPoint.uri}</li>
              </React.Fragment>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CalendarEvents;
