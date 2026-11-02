import React from 'react'
import thumbsUpImg from '../../assets/images/auth-success-thumbs.png'

export const AccountSuccessPage = ({ onGoToHome }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FD] flex items-center justify-center p-4 antialiased">
      <div className="bg-white rounded-3xl border border-gray-100 p-10 sm:p-14 w-full max-w-md shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-center">
          <div className="w-36 h-36 flex items-center justify-center">
            <img
              src={thumbsUpImg}
              alt="Account Created Successfully"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

                <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A1D2F]">
          Your account successfully created.
        </h2>

                <div className="pt-2">
          <button
            onClick={onGoToHome}
            className="w-full py-3 px-6 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}
