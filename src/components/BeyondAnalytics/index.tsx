import { TitleHead } from "../../Utils";
import "./beyondanalytics.css";

export const BeyondAnalytics = () => {
  return (
    <div
      id="beyond-analytics"
      className="pt-24 sm:pt-40 md:pt-40 md:mt-20 lg:pt-48 lg:mt-48"
    >
      <TitleHead number={3} title="Beyond Analytics" />
      
      <div className="text-left secondary">
        <p className="mb-5 text-[#8892b0]">
          While analytics and technology shape how I work, the experiences that shape who I am extend well beyond them.
        </p>
      </div>
    </div>
  );
};

