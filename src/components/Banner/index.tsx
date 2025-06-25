export const Banner = () => {
  return (
    <div className="text-left mt-40">
      <h6 className="primary my-4">Hi, my name is</h6>
      <div className="my-4 flex items-baseline">
        <h2 className="glowText roboto text-[#ccf6f0] text-4xl lg:text-7xl cursor-pointer">
          Mansi&nbsp;Bellani
        </h2>
        {/* <h2 className="glowText roboto text-[#ccf6f0] text-4xl   lg:text-7xl cursor-pointer">
          
        </h2> */}
      </div>
      {/* <h2 className="my-4 roboto text-[#ccf6f0] opacity-70 text-3xl  lg:text-7xl">
        I like to build things.
      </h2> */}
      <p className="secondary lg:w-[90%]  xl:w-[80%]">
        Learning to join new breed of leaders blending technical and leadership{" "}
        <br />
        skills. I am convinced the only way forward is harnessing technology to
        <br />
        challenge traditional systems and transform the organisations in solving{" "}
        <br />
        critical problems, quick decision making and minimising risks in
        complex systems.
      </p>
    </div>
  );
};
