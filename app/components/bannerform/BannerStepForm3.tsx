"use client";
import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import InputField from '../inputs/InputField';
import RadioInput from '../inputs/RadioInput';
import ReusableTextarea from '../inputs/ReusableTextarea';
import Button from '../inputs/Button';
import WhoToWhoHeading from '../inputs/WhoToWhoHeading';
import WhoToWhoHeading2 from '../inputs/WhoToWhoHeading2';
import LocationCard from '../locationcard/LocationCard';

const BannerStepForm3: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isInnerModalOpen, setIsInnerModalOpen] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        address: '',
        name: '',
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCVC: '',
        cardOTP: '',
        country: '',
        city: '',
        packagename: '',
        weight: '',
    });

    const workingHours = [
        { day: "Monday", hours: "8am - 5pm" },
        { day: "Tuesday", hours: "8am - 5pm" },
        { day: "Wednesday", hours: "8am - 5pm" },
        { day: "Thursday", hours: "8am - 5pm" },
        { day: "Friday", hours: "8am - 5pm" },
        { day: "Saturday", hours: "8am - 5pm" },
    ];

    const phoneNumbers = ["+234 807 8789 675", "+234 807 8789 675", "+234 807 8789 675"];

   

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handlePaymentClick = () => {
        // Handle payment click
    };



    return (
        <>
            <div className="py-2 px-1 md:px-4">
                <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[340px] mx-auto bg-black md:bg-white rounded-md">
                    <div className="lg:max-w-[1124px] lg:w-[1124px] lg:max-h-[80vh] 
                    md:max-w-[596px] md:w-[596px] 
                    w-[335px] max-w-[335px] max-h-[82vh] h-[82vh] 
                    mx-auto px-2 md:px-6 py-2 md:py-4 rounded shadow overflow-y-scroll md:overflow-y-hidden bg-appWhite">

                        <div className="">

                            <WhoToWhoHeading
                                text="Drop Off"
                                bgColor="bg-appWhite"
                                textColor="text-appBlack"
                                additionalClasses="rounded-lg"
                            />


                            <WhoToWhoHeading2
                                text="Book a Drop Off"
                                bgColor="bg-appTitleBgColor"
                                textColor="text-appWhite"
                                additionalClasses=" py-3 px-4"
                            />

                            {/* Step Indicators */}
                            <div className="flex items-center justify-center gap-2 pt-5">
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 1 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        1
                                    </p>
                                    <p className={` text-xs md:text-sm  ${currentStep === 1 ? ' flex bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'flex text-gray-500'}`} >My Details</p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 2 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        2
                                    </p>
                                    <p className={` text-xs md:text-sm  ${currentStep === 2 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} >Delivery Hulb </p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 3 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        3
                                    </p>
                                    <p className={` text-xs md:text-sm ${currentStep === 3 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} >Package Details</p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 4 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        4
                                    </p>
                                    <p className={` text-xs md:text-sm  ${currentStep === 4 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} > Payment </p>
                                </div>
                            </div>
                        </div>

                        {/* Step Content */}
                        <div className="pt-5">
                            {currentStep === 1 && (
                                <div>
                                    <div className="my-2 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="FirstName" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    First Name
                                                </label>

                                                <InputField
                                                    id="FirstName"
                                                    name="firstName"
                                                    value={formData.firstName}  // Your state value
                                                    placeholder="Enter your firstname"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                />

                                            </div>


                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="LastName" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Last Name
                                                </label>


                                                <InputField
                                                    id="LastName"
                                                    name="lastName"
                                                    value={formData.lastName}  // Your state value
                                                    placeholder="Enter your lastname"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                />


                                            </div>
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="email2" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Email
                                                </label>
                                                <div className="relative">

                                                    <InputField
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}  // Your state value
                                                        placeholder="Enter your email"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="Phonenumber" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Phone Number
                                                </label>

                                                <InputField
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}  // Your state value
                                                    placeholder="Enter your phone"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="StreetAddress" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Street Address
                                                </label>


                                                <InputField
                                                    id="address"
                                                    name="address"
                                                    value={formData.address}  // Your state value
                                                    placeholder="Enter your address"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                />

                                            </div>
                                            
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="City" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Country
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <InputField
                                                        id="country"
                                                        name="country"
                                                        value={formData.country}
                                                        placeholder="Select your country"
                                                        dropdownOptions={['USA', 'Canada', 'UK']}
                                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="Country" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    City
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <InputField
                                                        id="city"
                                                        name="city"
                                                        value={formData.city}
                                                        placeholder="Select your city"
                                                        dropdownOptions={['OTTAWA', 'LAGOS', 'MOSCOW']}
                                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div className="">
                                    <div className="w-6/12">
                                        <div className="w-80 bg-white border rounded border-gray-700 flex items-center lg:mr-60">
                                            <input className="mx-2 focus:outline-none w-full py-2 text-sm leading-none placeholder-gray-600 text-gray-600" placeholder="Search here" />
                                            <svg className="mr-2" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14 14L10 10" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="my-0 mt-4 mx-auto w-full xl:mx-0 flex flex-col md:h-64 overflow-y-scroll">
                                        <div className="grid  sm:grid-cols-2 mb-0 w-full gap-4 ">
                                            <div className="flex mb-2 w-full">
                                                <LocationCard
                                                    title="Bulq Lagos"
                                                    location="Ikeja"
                                                    address="123 Ikeja Road, Lagos Island"
                                                    workingHours={workingHours}
                                                    phoneNumbers={phoneNumbers}
                                                />

                                            </div>

                                            <div className="flex mb-2 w-full ">
                                                <LocationCard
                                                    title="Bulq Lagos"
                                                    location="Ikeja"
                                                    address="123 Ikeja Road, Lagos Island"
                                                    workingHours={workingHours}
                                                    phoneNumbers={phoneNumbers}
                                                />
                                            </div>

                                            <div className="flex mb-2 w-full ">
                                                <LocationCard
                                                    title="Bulq Lagos"
                                                    location="Ikeja"
                                                    address="123 Ikeja Road, Lagos Island"
                                                    workingHours={workingHours}
                                                    phoneNumbers={phoneNumbers}
                                                />
                                            </div>

                                            <div className="flex mb-2 w-full ">
                                                <LocationCard
                                                    title="Bulq Lagos"
                                                    location="Ikeja"
                                                    address="123 Ikeja Road, Lagos Island"
                                                    workingHours={workingHours}
                                                    phoneNumbers={phoneNumbers}
                                                />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div>
                                    <div className="my-2 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="FirstName" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Package Name
                                                </label>

                                                <InputField
                                                    id="packagename"
                                                    name="packagename"
                                                    value={formData.packagename}  // Your state value
                                                    placeholder="Enter your package name"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, packagename: e.target.value })}
                                                />

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="StreetAddress" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Weight (kg)
                                                </label>
                                                <InputField
                                                    id="weight"
                                                    name="weight"
                                                    value={formData.weight}  // Your state value
                                                    placeholder="Enter your package name"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                                />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="StreetAddress" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Shipment Type
                                                </label>

                                                <div className="flex flex-col gap-2">

                                                    {/* Radio button "On" */}
                                                    <div className="flex items-center">
                                                        <label className="flex items-center cursor-pointer">
                                                            <RadioInput
                                                                name="exampleRadio"
                                                                ariaLabel="Example Radio"
                                                                defaultChecked={true}
                                                                className="extra-styles-if-any"
                                                            />
                                                            <span className="ml-2 text-xs md:text-sm leading-4 text-gray-800 dark:text-gray-100 font-semibold">
                                                                Standard Delivery (4-5 Business Days)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    {/* Radio button "Off" */}
                                                    <div className="flex items-center">
                                                        <label className="flex items-center cursor-pointer">
                                                            <RadioInput
                                                                name="exampleRadio"
                                                                ariaLabel="Example Radio"
                                                                defaultChecked={true}
                                                                className="extra-styles-if-any"
                                                            />
                                                            <span className="ml-2 text-xs md:text-sm leading-4 font-semibold text-gray-800 dark:text-gray-100">
                                                                Express Delivery (1-2 Business Days)
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>

                                            </div>



                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="Message" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Package Description
                                                </label>
                                                <ReusableTextarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Let the world know who you are"
                                                    rows={5}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 4 && (
                                <div>
                                    <div className="my-2 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="CardName" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Name
                                                </label>

                                                <InputField
                                                    id="cardName"
                                                    name="cardName"
                                                    value={formData.cardName}  // Your state value
                                                    placeholder="Enter your card name"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                                                />

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="CardNumber" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Number
                                                </label>

                                                <InputField
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}  // Your state value
                                                    placeholder="1234 1234 1234 1234"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                                />

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="CardExpire" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Expiry Date
                                                </label>

                                                <InputField
                                                    id="cardDate"
                                                    name="cardDate"
                                                    value={formData.cardDate}  // Your state value
                                                    placeholder="MM/YY"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                                />

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="CardExpire" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    CVC
                                                </label>

                                                <InputField
                                                    id="cardCVC"
                                                    name="cardCVC"
                                                    value={formData.cardCVC}  // Your state value
                                                    placeholder="CVC Number"
                                                    required={true}
                                                    onChange={(e) => setFormData({ ...formData, cardCVC: e.target.value })}
                                                />

                                            </div>



                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="OTP" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    OTP
                                                </label>
                                                <div className="flex">
                                                    <InputField
                                                        id="cardOTP"
                                                        name="cardOTP"
                                                        value={formData.cardOTP}  // Your state value
                                                        placeholder="OTP"
                                                        required={true}
                                                        onChange={(e) => setFormData({ ...formData, cardOTP: e.target.value })}
                                                    />
                                                    <button type="submit" className="relative right-2 z-10 rounded-md bg-appTitleBgColor px-3.5 py-2.5 text-xs md:text-sm font-bold text-appWhite shadow-sm hover:bg-black">Resend OTP</button>
                                                </div>

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-2">
                                                <label htmlFor="OTP" className="pb-2 text-xs md:text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    PAYMENT
                                                </label>
                                                <div className="flex">
                                                    <Button type="submit" onClick={handlePaymentClick}>
                                                        MAKE PAYMENT
                                                    </Button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center pt-0 lg:mt-3">
                            {currentStep > 1 && (

                                <Button type="submit" onClick={handlePrevious}>
                                    PREVIOUS STEP
                                </Button>
                            )}
                            {currentStep < 4 && (

                                <Button type="submit" onClick={handleNext}>
                                    NEXT STEP
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerStepForm3;
