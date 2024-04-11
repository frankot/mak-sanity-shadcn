interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Title(props: TitleProps) {
  const { title, subtitle, className } = props;
  return (
    <div
      className={
        className +
        "my-16 mb-20 lg:mb-24 flex flex-col items-center justify-center pb-4"
      }
    >
      {" "}
      <hr className="h-2 w-screen bg-orange-500  mb-16" />
      <span className="text-2xl font lg:text-6xl font-bold capitalize tracking-tight text-stone-800">
        {title}
      </span>
      {subtitle && (
        <span className="pt-5   font-semibold capitalize text-stone-600 tracking-wide">
          {subtitle}
        </span>
      )}
    </div>
  );
}
