import { TitleHead } from "../../Utils";
import "./about.css";
import mansi from "../../assets/profilepic.jpeg";

export const About = () => {
  return (
    <div
      id="about"
      className="pt-24 sm:pt-40 md:pt-40 md:mt-20 lg:pt-48 lg:mt-48 "
    >
      <TitleHead number={1} title="About" />
      <div className="flex justify-between  flex-col lg:flex-row ">
        <div className="lg:w-[60%] text-left secondary">
          <p className="mb-5 text-[#8892b0]">Hello! I'm Mansi — a Master in Engineering Management (MEM) student at Dartmouth with a background in computer engineering. I'm passionate about building at the intersection of technology, strategy, and impact.</p>
          <p className="mb-5 text-[#8892b0]">My interests span across data-driven decision-making, product development, blockchain, and cybersecurity. I'm currently exploring how tools like Power BI, Python, and LLMs can drive smarter operations, automate insight generation, and support real-world business needs.</p>
          <p className="mb-5 text-[#8892b0]">I'm passionate about creating tools and systems that make decision-making smarter, faster, and more inclusive. I care deeply about leveraging technology to address critical issues — from sustainability to cybersecurity — and I remain committed to philanthropy and community involvement.</p>
          <p className="mb-5 text-[#8892b0]">While I have a long way to go, I'm excited to keep learning, growing, and contributing meaningfully to the tech and business ecosystem.</p>
          
          <div>
            <h4 className="text-lg text-[#ccf6f0] mt-6 mb-2 font-semibold">Technical Skills & Tools</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-base ">
                <p><span className="text-[aqua]"> ➤ </span> Power BI</p>
                <p><span className="text-[aqua]"> ➤ </span> MS Office Suite</p>
                <p><span className="text-[aqua]"> ➤ </span> Tableau</p>
                <p><span className="text-[aqua]"> ➤ </span> Google Analytics</p>
                <p><span className="text-[aqua]"> ➤ </span> Jira</p>
                <p><span className="text-[aqua]"> ➤ </span> ERP Systems</p>
                <p><span className="text-[aqua]"> ➤ </span> Salesforce</p>
                <p><span className="text-[aqua]"> ➤ </span> Agile</p>
                <p><span className="text-[aqua]"> ➤ </span> Git</p>
            </div>

            <h4 className="text-lg text-[#ccf6f0] mt-4 mb-2 font-semibold">Technical Languages</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-base ">
                <p><span className="text-[aqua]"> ➤ </span> Python</p>
                <p><span className="text-[aqua]"> ➤ </span> SQL</p>
                <p><span className="text-[aqua]"> ➤ </span> HTML/CSS</p>
                <p><span className="text-[aqua]"> ➤ </span> R</p>
                <p><span className="text-[aqua]"> ➤ </span> C</p>
                <p><span className="text-[aqua]"> ➤ </span> Java</p>
                <p><span className="text-[aqua]"> ➤ </span> C++</p>
            </div>

            <h4 className="text-lg text-[#ccf6f0] mt-4 mb-2 font-semibold">Databases & Big Data Technologies</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-base ">
                <p><span className="text-[aqua]"> ➤ </span> MySQL</p>
                <p><span className="text-[aqua]"> ➤ </span> MongoDB</p>
                <p><span className="text-[aqua]"> ➤ </span> Oracle</p>
                <p><span className="text-[aqua]"> ➤ </span> PostgreSQL</p>
                <p><span className="text-[aqua]"> ➤ </span> NoSQL</p>
                <p><span className="text-[aqua]"> ➤ </span> Hadoop</p>
            </div>
          </div>
        </div>

        <div className=" w-full  mt-16 lg:mt-0 lg:w-[28rem]">
          <div className="flex justify-center">
            <div className="profile-img  h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] ">
              <div className="flex justify-center items-center">
                <img
                  className="inner-img h-[250px] sm:h-[300px]"
                  src={mansi}
                  alt="mansi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
