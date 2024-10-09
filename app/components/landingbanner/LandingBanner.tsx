"use client"
import React, { useEffect, useState } from 'react'
import LandingBannerCard from './LandingBannerCard';
import LandingBannerSearch from './LandingBannerSearch';
import { IoMdCloseCircle } from "react-icons/io";
import LandingBannerCard2 from './LandingBannerCard2';
import BannerStepForm from '../bannerform/BannerStepForm';
import BannerStepForm2 from '../bannerform/BannerStepForm2';
import BannerStepForm3 from '../bannerform/BannerStepForm3';

const LandingBanner: React.FC = () => {

  // State for tracking modal open status
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState<boolean>(false); // New state for inner modal
  const [isInnerModalOpen2, setIsInnerModalOpen2] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard2, setSelectedCard2] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard3, setSelectedCard3] = useState<{ title: string; description: string } | null>(null);

  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const firstString = 'Ship To Any Part Of The World';
  const secondString = 'With Peace Of Mind';
  const typingSpeed = 100; // Adjust typing speed as needed

  useEffect(() => {
    let isMounted = true;
    let firstTimeout: NodeJS.Timeout, secondTimeout: NodeJS.Timeout;

    // Function to handle typing for the first h2
    const typeFirstText = (i = 0) => {
      if (isMounted && i < firstString.length) {
        setFirstText(firstText => firstText + firstString.charAt(i));
        firstTimeout = setTimeout(() => typeFirstText(i + 1), typingSpeed);
      } else {
        // After the first text completes, start the second text typing
        typeSecondText();
      }
    };

    // Function to handle typing for the second h2
    const typeSecondText = (i = 0) => {
      if (isMounted && i < secondString.length) {
        setSecondText(secondText => secondText + secondString.charAt(i));
        secondTimeout = setTimeout(() => typeSecondText(i + 1), typingSpeed);
      } else {
        // Restart the process after a short delay
        setTimeout(() => {
          setFirstText('');
          setSecondText('');
          typeFirstText(); // Start the typing process again
        }, 2000); // Adjust the delay before restarting the process
      }
    };

    typeFirstText(); // Start typing the first text

    // Clean up timeouts on unmount
    return () => {
      isMounted = false;
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);
  
  
  const openModal = (title: string, description: string) => {
    setSelectedCard({ title, description });
    setIsModalOpen(true);
  };

  const openInnerModal = () => {
    setIsInnerModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsInnerModalOpen(false); // Close inner modal if open
  };


  const openModal2 = (title: string, description: string) => {
    setSelectedCard2({ title, description });
    setIsModalOpen2(true);
  };

  const openInnerModal2 = () => {
    setIsInnerModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
    setIsInnerModalOpen2(false)
  };



  const openModal3 = (title: string, description: string) => {
    setSelectedCard3({ title, description });
    setIsModalOpen3(true);
  };

  const closeModal3 = () => setIsModalOpen3(false);


  return (
    <div className='flex flex-col md:h-[90vh] md:max-h-[90vh] items-center justify-center '
      // style={{
      //   backgroundImage: `url(${logo.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className='flex flex-col md:w-10/12 mx-auto itmes-center justify-evenly'>
        {/* <h2 className='h2Banner'> Ship To Any Part Of The World  </h2>
        <h2 className='h2Banner mt-4'> <span className="text-appBanner">With Peace Of Mind </span> </h2> */}
        <h2 className="h2Banner fir">{firstText}</h2>
        <h2 className="h2Banner md:mt-4 sec">
          <span className="text-appBanner">{secondText}</span>
        </h2>
      </div>

      <div className='flex w-10/12 md:w-7/12 mx-auto itmes-center justify-evenly'>
        <LandingBannerSearch />
      </div>

      <div className='flex md:flex-row flex-col md:w-7/12 mx-auto items-center justify-evenly gap-4'>
        <LandingBannerCard
          title="Pick up Package"
          description="Request Pick off and Drop off Services"
          onClick={openModal}
        />

        <LandingBannerCard
          title="Delivery Package"
          description="request Pick off and Drop off Services"
          onClick={openModal2}
        />

        <LandingBannerCard
          title="Book a Drop Off"
          description="Request Drop off and Drop off Services"
          onClick={openModal3}
        />
      </div>


      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col items-center justify-center bg-appBlack/90 w-full md:w-11/12 p-8 rounded-lg shadow-xl shadow-appTitleBgColor h-full md:h-auto">
            <div className="flex md:mb-0 mb-3">
              <h3 className="text-center bg-appWhite text-appBlack px-2 md::px-4 lg:py-1  rounded-2xl">Pick Up Package</h3>
            </div>

            <div className=" flex md:p-8 flex-col md:flex-row md:gap-12 gap-3 datty">

              <LandingBannerCard2
                title="From Me to Another"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="From Another to Me"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal2}
              />

              <LandingBannerCard2
                title="Specif Address To Specific Address"
                description="Request Pick off and Drop off Services"
              />

              <LandingBannerCard2
                title="Pick up only"
                description="Request Pick off and Drop off Services"
              />
            </div>

            <div className="flex px-8">
              <button onClick={closeModal} className="modalClose">
                <IoMdCloseCircle className='text-appWhite' /> Close
              </button>
            </div>
          </div>

          {/* Render inner modal on top of the first modal */}
          {isInnerModalOpen && (
            <div className="fixed inset-0 pt-2 md:pt-4 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-black md:bg-white px-4 pt-2 md:pt-4 md:px-4 p-2 md:py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <BannerStepForm /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen(false)} className="lg:mt-2 px-4 py-2 bg-white md:bg-black text-black md:text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}


          {/* Render inner midek on top of the first model for second div */}
          {isInnerModalOpen2 && (
            <div className="fixed inset-0 pt-2 md:pt-4 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-black md:bg-white px-4 pt-2 md:pt-4 md:px-4 p-2 md:py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <BannerStepForm2 /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen2(false)} className="lg:mt-2 px-4 py-2 bg-white md:bg-black text-black md:text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}

        </div>
      )}
      {/* first modal section ends here */}

      {isModalOpen2 && selectedCard2 && (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col items-center justify-center bg-appBlack/90 w-full md:w-11/12 p-8 rounded-lg shadow-xl shadow-appTitleBgColor h-full md:h-auto">
            <div className="flex md:mb-0 mb-3">
              <h3 className="text-center bg-appWhite text-appBlack px-2 md::px-4 lg:py-1  rounded-2xl"> Deliver Package</h3>
            </div>

            <div className=" flex md:p-8 flex-col md:flex-row md:gap-12 gap-3">

              <LandingBannerCard2
                title="From Me to Another"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="From Another to Me"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="Specif Address To Specific Address"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />

              <LandingBannerCard2
                title="Pick up only"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />
            </div>

            <div className="flex px-8">
              <button onClick={closeModal2} className="modalClose">
                <IoMdCloseCircle className='text-appRed' /> Close
              </button>
            </div>

          </div>


          {/* Render inner modal on top of the first modal */}
          {isInnerModalOpen && (
            <div className="fixed inset-0 pt-2 md:pt-4 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white px-4 pt-2 md:pt-4 md:px-4 p-2 md:py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <BannerStepForm /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}


          {/* Render inner midek on top of the first model for second div */}
          {isInnerModalOpen2 && (
            <div className="fixed inset-0 pt-2 md:pt-4 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white px-4 pt-2 md:pt-4 md:px-4 p-2 md:py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <BannerStepForm2 /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen2(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
              
            </div>
          )}

        </div>
      )}
      {/* second modal section ends here */}


      {isModalOpen3 && selectedCard3 && (
        <div className="fixed inset-0 pt-2 md:pt-4 flex items-start justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black md:bg-white px-4 pt-2 md:pt-4 md:px-4 p-2 md:py-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            {/* <h3 className="text-xl font-bold">{selectedCard3.title}</h3>
            <p>{selectedCard3.description}</p> */}
            <BannerStepForm3 />
            <button onClick={closeModal3} className="lg:mt-2 px-4 py-2 bg-white md:bg-black text-black md:text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
              <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default LandingBanner;
