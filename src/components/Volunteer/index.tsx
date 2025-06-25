import { useState } from "react";
import { volundeerCompanydata, volunteerData } from "../../Data";
import { TitleHead } from "../../Utils";
import { WorkCard } from "../../Utils/WorkCard";

export const VolunteerExperience = () => {
  const [active, setActive] = useState(volundeerCompanydata[0]);

  const work = volunteerData.filter((item) => item.company === active);

  return (
    <div
      id="experience"
      className=" min-h-[38rem] pt-24 sm:pt-20 sm:mt-20 md:pt-40 md:mt-40 lg:pt-48 lg:mt-48 "
    >
      <TitleHead number={2} title="Volunteering Experience" />
      <div className="block gap-10 md:flex ">
        <div className=" mb-8 md:mb-0 overflow-auto md:overflow-visible">
          <ul className="flex md:block md:text-left ">
            {volundeerCompanydata.map((item, key) => (
              <li
                key={key}
                onClick={() => setActive(item)}
                className={`compStyle  ${
                  item === active && "activeCompStyle"
                } `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WorkCard
            position={work[0].position}
            company={work[0].company}
            pr1={work[0].pr1 && work[0].pr1}
            pr2={work[0].pr2 && work[0].pr2}
            pr3={work[0].pr3 && work[0].pr3}
            pr4={work[0].pr4 && work[0].pr4}
          />
        </div>
      </div>
    </div>
  );
};
