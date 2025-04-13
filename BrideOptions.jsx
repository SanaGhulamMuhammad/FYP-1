import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrideOptions = () => {
  const navigate = useNavigate();

  const handlePreDesignedClick = () => {
    navigate('/bride/pre-designed');  
  };

  const handleCustomizeYourOwnClick = () => {
    navigate('/bride/customize'); 
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-[#F8F1EF] min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-10">Bride Options</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div
          onClick={handlePreDesignedClick}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-10 hover:scale-105 transition-transform duration-300 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Select from Pre-designed</h2>
          <p>Choose from a variety of pre-designed bridal dresses</p>
        </div>

        <div
          onClick={handleCustomizeYourOwnClick}
          className="cursor-pointer bg-white rounded-2xl shadow-lg p-10 hover:scale-105 transition-transform duration-300 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Customize Your Own</h2>
          <p>Create a bridal dress that fits your unique style</p>
        </div>
      </div>
    </div>
  );
};

export default BrideOptions;
