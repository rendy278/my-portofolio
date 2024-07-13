const Title = ({ title }) => {
  return (
    <div className="title font-crete-round flex gap-3 items-center dark:text-slate-200">
      <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
      <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
    </div>
  );
};

export default Title;
