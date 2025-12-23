import { TitleHead } from "../../Utils";
import "./beyondwork.css";
import skiingImage from "../../assets/skiing.jpeg";

export const BeyondWork = () => {
  return (
    <div
      id="beyond-work"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <TitleHead number={6} title="Beyond Work" />
      
      <div className="text-left secondary">
        <p className="mb-5 text-[#8892b0]">
          Outside of work, I love to ski and spend time outdoors. I enjoy activities that challenge me physically and mentally and help me stay grounded and balanced.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-80 md:h-96 bg-[#112240] rounded-lg overflow-hidden border border-[#00e5e8] border-opacity-20">
            <img src={skiingImage} alt="Skiing" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

