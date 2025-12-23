import { TitleHead } from "../../Utils";
import "./researchpublication.css";

export const ResearchPublication = () => {
  return (
    <div
      id="research-publication"
      className="pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <TitleHead number={4} title="Research and Publication" />
      
      <div className="text-left secondary">
        <p className="mb-5 text-[#8892b0]">
          I am a published co-author on a research paper titled{" "}
          <span className="text-[#00e5e8] italic">
            "AI powered classification of oral pre cancer a histopathological image approach."
          </span>
        </p>
        <p className="mb-5 text-[#8892b0]">
          The work focused on applying machine learning techniques to medical imaging for early cancer detection. I was involved in investigation, writing, editing, and analysis, and the project reinforced my interest in using technology for meaningful real-world impact.
        </p>
        <p className="mb-5 text-[#8892b0]">
          Publication Link:{" "}
          <a
            href="https://www.sciencepubco.com/index.php/IJBAS/article/view/33435/18144"
            target="_blank"
            rel="noreferrer"
            className="text-[#00e5e8] hover:underline"
          >
            https://www.sciencepubco.com/index.php/IJBAS/article/view/33435/18144
          </a>
        </p>
      </div>
    </div>
  );
};

