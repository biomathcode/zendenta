function WorkingDays() {
  const days = ["s", "m", "t", "w", "t", "f", "s"];

  const capDays = days.map((e) => e.toUpperCase());

  return (
    <div className="flex gap-2">
      {capDays.map((e) => (
        <div
          key={e}
          className="rounded-full text-white text-xs  bg-blue-500 w-8 h-8  flex justify-center items-center"
        >
          {e}
        </div>
      ))}
    </div>
  );
}

export default WorkingDays;
