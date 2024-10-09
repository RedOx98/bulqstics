import React from 'react'

const LandingBannerSearch = () => {
  return (
      <div className=" flex justify-start items-center py-7 md:px-[23px] relative w-full">
          <input
              className="text-base font-semibold leading-none text-left text-gray-600 px-4 py-3 md:py-6 w-full border rounded border-gray-300  outline-none"
              type="text"
              placeholder="Search"
          />
          <button type="submit" className="absolute right-1 md:right-7 rounded-md bg-appTitleBgColor px-3.5 py-2 md:py-5 text-sm md:text-base font-bold text-appWhite shadow-sm hover:bg-black z-0">Track Orders</button>

      </div>

  )
}

export default LandingBannerSearch
