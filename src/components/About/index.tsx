import { TitleHead } from "../../Utils";
import "./about.css";
import mansi from "../../assets/profilepic.jpeg";

export const About = () => {
  return (
    <div
      id="about"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <TitleHead number={1} title="About" />
      <div className="flex justify-between  flex-col lg:flex-row ">
        <div className="lg:w-[60%] text-left secondary">
          
          
          <p className="mb-5 text-[#8892b0]">Hello, I'm Mansi.</p>
          <p className="mb-5 text-[#8892b0]">I recently graduated with a Master in Engineering Management from Dartmouth, building on a foundation in computer engineering. My interests and experience sit at the intersection of technology, analytics, and strategy, with a strong focus on applying data-driven approaches to real-world business problems.</p>
          <p className="mb-5 text-[#8892b0]">Through my academic and professional work, I have explored analytics-driven problem solving across marketing optimization, product strategy, and operational analysis. I enjoy working with tools such as Power BI, Python, and analytics frameworks to turn complex data into insights that teams can use to make better decisions.</p>
          <p className="mb-5 text-[#8892b0]">What motivates me most is improving how organizations operate by reducing uncertainty and enabling smarter, faster decision-making. I am drawn to roles that blend analytical rigor with practical execution, whether that involves growth strategy, automation, or performance measurement. I also value purpose-driven work and remain committed to contributing to initiatives that create positive social impact.</p>
          <p className="mb-5 text-[#8892b0]">I am highly intentional about learning, asking thoughtful questions, and continuing to grow as both a technical and strategic contributor. I am excited by environments that value curiosity, collaboration, and continuous improvement.</p>
          
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

        <div className="w-full mt-16 lg:mt-0 lg:w-[28rem]">
          <div className="flex justify-center">
            <div className="profile-img h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]">
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
