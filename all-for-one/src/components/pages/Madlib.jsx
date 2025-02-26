import NavBar from "../layout/NavBar";
import { madlibAPICall } from "../services/services";
import { useState } from "react";

const Madlib = () => {
  const [madlibMonster, getMadlibMonster] = useState("");
  const [madlibMonsterAdjective, getMadlibMonsterAdjective] = useState("");
  const [madlibNoun1, getMadlibNoun1] = useState("");
  const [madlibNoun2, getMadlibNoun2] = useState("");
  const [madlibObject1, getMadlibObject1] = useState("");
  const [madlibObject2, getMadlibObject2] = useState("");
  const [madlibLocation1, getmadlibLocation1] = useState("");
  const [madlibLocation2, getmadlibLocation2] = useState("");
  const [madlibUserName, getmadlibUserName] = useState("");
  const [madlibAdjective, getmadlibAdjective] = useState("");

  const [fetchData, setFetchData] = useState("");

  const fetchAPI = async () => {
    setFetchData(
      await madlibAPICall(
        madlibMonster,
        madlibMonsterAdjective,
        madlibNoun1,
        madlibNoun2,
        madlibObject1,
        madlibObject2,
        madlibLocation1,
        madlibLocation2,
        madlibUserName,
        madlibAdjective
      )
    );

    console.log(fetchData);
  };

  return (
    <div className="h-screen bg-[url(/public/assets/background.jpeg)] bg-[length:100vw_100vh] bg-no-repeat bg-center grid grid-cols-12 grid-rows-12">
      <NavBar />

      <button
        className="md:row-start-2 md:row-end-3 md:col-start-6 md:col-end-8 max-md:col-start-5 max-md:col-end-9"
        onClick={fetchAPI}
      >
        {/*how do I target the castle for hover?*/}
        <div className="bg-[#FAF9F600]  w-full h-full ">
          <svg
            className="w-full h-full rounded-[2rem] bg-[#FAF9f6] shadow-[.5rem_.5rem_0rem_.5rem_#FF4500]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M80 80l0 112c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352l-48.3 0 9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192L32 72c0-22.1 17.9-40 40-40l304 0c22.1 0 40 17.9 40 40l0 120c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85-48.3 0-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4l0-112-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24L80 80zm4.7 384l278.7 0-16.6-32-245.6 0L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L72.8 512C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384l265 0zM208 288c-8.8 0-16-7.2-16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0z" />
          </svg>
        </div>
        <div>
          <p className=" rounded-[2rem] text-fluid bg-[#FAF9F6] p-[1rem_0rem] shadow-[.5rem_.5rem_0rem_.5rem_#FF4500] z-2 text-black">
            {/* How do I change font size to 2rem on tailwind*/}
            Press Me
          </p>
        </div>
      </button>

      <div className="bg-[#85735D] ps-[1rem] place-content-center rounded-[2rem] shadow-[.5rem_.5rem_0rem_.5rem_#000] md:row-start-4 md:row-end-12 md:col-start-2 md:col-end-12 max-md:col-start-2 max-md:col-end-12 max-md:row-start-4 max-md:row-end-12 max-md:overflow-y-scroll">
        <div className="h-auto grid md:grid-rows-3 md:gap-y-16 md:gap-x-4 md:grid-cols-4 max-md:grid-rows-10 max-md:gap-y-2 p-[0rem_.75rem]">
          <input
            className="bg-[#FAF9F6] max-md:row-start-1 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Monster"
            onChange={(event) => getMadlibMonster(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] text-black h-full max-md:row-start-2 rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Monster Adjective"
            onChange={(event) => getMadlibMonsterAdjective(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-3 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Noun"
            onChange={(event) => getMadlibNoun1(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-4 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Second Noun"
            onChange={(event) => getMadlibNoun2(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-5 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="First Object"
            onChange={(event) => getMadlibObject1(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-6 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Second Object"
            onChange={(event) => getMadlibObject2(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-7 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="First Location"
            onChange={(event) => getmadlibLocation1(event.target.value)}
          />
          <input
            className="bg-[#FAF9F6] max-md:row-start-8 text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Second Location"
            onChange={(event) => getmadlibLocation2(event.target.value)}
          />
          <input
            className="md:col-start-2 max-md:row-start-9 text-black bg-[#FAF9F6] h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Name"
            onChange={(event) => getmadlibUserName(event.target.value)}
          />
          <input
            className="md:col-start-3 max-md:row-start-10 text-black bg-[#FAF9F6] h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]"
            type="text"
            placeholder="Username Adjective"
            onChange={(event) => getmadlibAdjective(event.target.value)}
          />
        </div>
        <div className="text-fluid md:mt-4 max-md:mt-6">{fetchData}</div>
      </div>
    </div>
  );
};

export default Madlib;
