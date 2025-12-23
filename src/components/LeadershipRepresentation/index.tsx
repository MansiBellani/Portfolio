import { TitleHead } from "../../Utils";
import "./leadershiprepresentation.css";
import ghc from "../../assets/ghc.jpeg";
import swe from "../../assets/swe.jpeg";

export const LeadershipRepresentation = () => {
  return (
    <div
      id="leadership-representation"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <TitleHead number={5} title="Leadership and Representation" />
      
      <div className="text-left secondary">
        <p className="mb-5 text-[#8892b0]">
          I was selected to represent Dartmouth College at the Society of Women Engineers National Conference, an opportunity offered to only 2 students based on leadership, academic background, and professional engagement. I also attended Grace Hopper Celebration 2025, where I connected with technologists, researchers, and leaders from across the world and gained perspective on inclusive innovation and career growth.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-80 md:h-96 bg-[#112240] rounded-lg overflow-hidden border border-[#00e5e8] border-opacity-20">
            <img src={swe} alt="Society of Women Engineers Conference" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-80 md:h-96 bg-[#112240] rounded-lg overflow-hidden border border-[#00e5e8] border-opacity-20">
            <img src={ghc} alt="Grace Hopper Celebration 2025" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

