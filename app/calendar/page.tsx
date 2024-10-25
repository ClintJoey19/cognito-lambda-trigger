import CalendarEvents from "./_components/CalendarEvents";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Calendar</h1>
      <CalendarEvents />
    </div>
  );
};

export default page;
