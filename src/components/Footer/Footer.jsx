"use client"
import React, { useState } from 'react';



const Footer = () => {

  const [inputValue, setInputValue] = useState('');
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setPlaceholderVisible(!event.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setPlaceholderVisible(true);
    }
  };


  return (
    <section className='bg-[#252525] h-screen lg:h-[80vh] text-white flex justify-between '>
      <div>
        <p>Subscribe to Aesop communications</p>
        <hr />
        <div className="relative">
          <input
            type="text"
            className="border bg-[#252525] border-white p-2 rounded focus:outline-none"
            placeholder={isPlaceholderVisible ? 'Enter text...' : ''}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
            &#8594;
          </div>
        </div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </section>
  )
}

export default Footer