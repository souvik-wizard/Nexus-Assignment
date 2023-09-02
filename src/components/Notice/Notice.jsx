import React from 'react'

const Notice = (isHide) => {
    return (
        <div className={`${isHide}`}>
            <p className='text-xs leading-5 text-black bg-[#C2C2AF] p-3 lg:text-center lg:text-sm'>
                Trained Aesop consultations are available to provide bespoke skin care advise. <span className='font-semibold hover:underline hover:underline-offset-4 hover:cursor-pointer'> Book a video consultation</span>
            </p>
            <p className='text-xs leading-5  p-3 lg:text-sm lg:text-center bg-[#252525] hover:underline hover:underline-offset-4 hover:cursor-pointer'>
                Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 +
            </p>
        </div>
    )
}

export default Notice