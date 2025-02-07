import { useState } from "react";
import { addingTwoNumbersAPICall } from "../services/services";
import NavBar from "../layout/NavBar";

const AddingTwoNumbers = () => {
  
  
  //The zero will default the useState to an integer
  const [firstNumber, getFirstNumber] = useState(0);
  const [secondNumber, getSecondNumber] = useState(0);
  const [fetchData, setFetchData] = useState([]);
  
  const fetchAPI = async () => {
    setFetchData(await addingTwoNumbersAPICall(firstNumber, secondNumber));
  };
  
  return (
      <div className="h-screen max-h-screen bg-[url(/public/assets/background.jpeg)] bg-[length:100vw_100vh] bg-no-repeat grid grid-cols-12 grid-rows-12">
      
      <NavBar/>
      <button className="lg:row-start-3 lg:row-end-10 lg:col-start-2 lg:col-end-7" 
      onClick=
      {
        fetchAPI
      }>
        <div className="bg-[#FAF9F600] w-full h-full ">
          <svg
            className="w-full h-full rounded-[2rem] bg-[#FAF9f6] shadow-[.5rem_.5rem_0rem_.5rem_#FF4500]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M80 80l0 112c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352l-48.3 0 9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192L32 72c0-22.1 17.9-40 40-40l304 0c22.1 0 40 17.9 40 40l0 120c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85-48.3 0-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4l0-112-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-64 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24L80 80zm4.7 384l278.7 0-16.6-32-245.6 0L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L72.8 512C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384l265 0zM208 288c-8.8 0-16-7.2-16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0z" />
          </svg>
        </div>
        <div>
          <p className="m-0 rounded-[2rem] bg-[#FAF9F6] p-[1rem_0rem] shadow-[.5rem_.5rem_0rem_.5rem_#FF4500] z-2 text-black ">
            {/* How do I change font size to 2rem on tailwind*/}
            Press Me
          </p>
        </div>
      </button>

      <div className="bg-[#85735D] place-content-center ps-[1rem] rounded-[2rem] shadow-[.5rem_.5rem_0rem_.5rem_#000] lg:row-start-7 lg:row-end-9 lg:col-start-8 lg:col-end-12">
        <div className="flex justify-between align-baseline p-[0rem_.75rem]">
          <h2>Enter First Number</h2>
          <input className="bg-[#FAF9F6] text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]" type="number" placeholder="First Number" onChange={(event) => getFirstNumber(event.target.value)}/>
        </div>
        <div className="flex justify-between align-baseline p-[0rem_.75rem] mt-4">
          <h2>Enter Second Number</h2>
          <input className="bg-[#FAF9F6] text-black h-full rounded-[.5rem] border-[#D9D9D9] shadow-[0_.25rem_0rem_0rem_#000]" type="number" placeholder="Second Number" onChange={(event) => getSecondNumber(event.target.value)}/>
        </div>
        <div>
          <h2>
            {
            fetchData
            }</h2>
        </div>
      </div>
    </div>
  );
};

export default AddingTwoNumbers;
