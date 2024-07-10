import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const selectLastHalfYear = (contributions) => {
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= today;
    });
  };

  return (
    <section className="flex flex-col mt-3 p-6">
      <div className="title flex gap-3 items-center mb-8">
        <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
        <h1 className="font-bold text-3xl md:text-4xl">Days Code :</h1>
      </div>
      <GitHubCalendar
        username="rendy278"
        blockSize={18}
        blockMargin={6}
        fontSize={16}
        transformData={selectLastHalfYear}
        theme={{
          light: ["#F8FAFA", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
          dark: ["#eaeaea", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
        }}
        showWeekdayLabels={true}
      />
    </section>
  );
};

export default Github;
