import GitHubCalendar from "react-github-calendar";
import Title from "./Title";

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
    <div className="flex flex-col mt-3 gap-5 p-6 ">
      <Title title="Days Code" />
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
    </div>
  );
};

export default Github;
