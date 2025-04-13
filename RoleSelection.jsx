import React from "react";
import { useNavigate } from "react-router-dom";
import brideImg from "../../assets/brideImg.png";
import groomImg from "../../assets/groomImg.jpg";
import othersImg from "../../assets/othersImg.png";

const CustomizationRoleSelection = () => {
  const navigate = useNavigate();

  const handleBrideClick = () => {
    navigate('/bride'); // 🔁 Navigate to BrideOptions page
  };

  const handleGroomClick = () => {
    navigate('/groom'); // (For future)
  };

  const handleOthersClick = () => {
    navigate('/others'); // (For future)
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-4xl font-bold text-primary mb-8">Who Are You?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Bride Card */}
        <div
           onClick={handleBrideClick}
          className="bg-white rounded-2xl shadow-lg cursor-pointer transition hover:scale-105 p-6 text-center border border-[#B17F6B]"
        >
          <img src={brideImg} alt="" className="w-28 mx-auto mb-3" />
          <h3 className="text-2xl font-semibold text-primary">Bride</h3>
        </div>

        {/* Groom Card */}
        <div
          onClick={handleGroomClick}
          className="bg-white rounded-2xl shadow-lg cursor-pointer transition hover:scale-105 p-6 text-center border border-[#B17F6B]"
        >
          <img src={groomImg} alt="" className="w-28 mx-auto mb-12" />
          <h3 className="text-2xl font-semibold text-primary">Groom</h3>
        </div>

        {/* Others Card */}
        <div
          onClick={handleOthersClick}
          className="bg-white rounded-2xl shadow-lg cursor-pointer transition hover:scale-105 p-6 text-center border border-[#B17F6B]"
        >
          <img src={othersImg} alt="" className="w-28 mx-auto mb-12" />
          <h3 className="text-2xl font-semibold text-primary">Other</h3>
        </div>
      </div>
    </div>
  );
};

export default CustomizationRoleSelection;
