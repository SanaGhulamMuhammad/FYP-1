import React from "react";
import lehengaImg from '../../assets/lehengaImg.jpg';
import maxiImg from '../../assets/maxiImg.png';
import ghagraImg from '../../assets/ghagraImg.jpg';
import sareeImg from '../../assets/sareeImg.jpg';
import frockImg from '../../assets/frockImg.jpg';
import { useNavigate } from "react-router-dom";

const PreDesigned = () => {
  const navigate = useNavigate();

  const dresses = [
    { name: "Lehenga Choli", image: lehengaImg },
    { name: "Maxi", image: maxiImg },
    { name: "Ghagra", image: ghagraImg },
    { name: "Saree", image: sareeImg },
    { name: "Frock", image: frockImg },
  ];

  const handleEnhance = (dressName) => {
    // You can pass selected dress if needed
    navigate('/bride/customize');
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Select a Pre-Designed Dress
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dresses.map((dress, index) => (
          <div key={index} className="border rounded-xl shadow-lg p-4 text-center">
            <img src={dress.image} alt={dress.name} className="h-48 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{dress.name}</h3>
            <button
              onClick={() => handleEnhance(dress.name)}
              className="bg-[#B17F6B] text-white px-4 py-2 rounded hover:bg-[#9c6a57]"
            >
              Enhance with Customization
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreDesigned;
