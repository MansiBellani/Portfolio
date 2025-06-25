import "./common.css";
type TitleHeadProp = {
  number?: number;
  title?: string;
};

export const TitleHead = ({ number, title }: TitleHeadProp) => {
  return (
    <div className="text-[25px] text-left mb-10 flex">
      <span className="title-nam font-medium text-3xl flex">
        <span className="glowText cursor-pointer hover:text-[#00e5e8] text-[#c3cdec] title-font">
          &nbsp;{title}
        </span>
      </span>
    </div>
  );
};
