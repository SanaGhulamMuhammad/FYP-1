import React, { useState } from "react";
import html2canvas from "html2canvas"; // 👈 Import added

const silhouettes = ["Lehenga Choli", "Maxi", "Ghagra", "Saree", "Frock"];

const colorCategories = {
  Red: ["Maroon", "Crimson", "Scarlet", "Cherry", "Burgundy"],
  Pink: ["Baby Pink", "Hot Pink", "Rose", "Blush", "Fuchsia"],
  Yellow: ["Lemon", "Goldenrod", "Amber", "Mustard", "Flaxen"],
  Green: ["Mint", "Olive", "Emerald", "Lime", "Sage"],
  Beige: ["Ivory", "Cream", "Tan", "Sand", "Latte"],
};

const fabrics = ["Pure", "Organza", "Satin", "Chiffon"];
const embellishments = ["Zari", "Katdana", "Sequins", "Applique", "Lace Edging"];

const CustomizeYourOwn = () => {
  const [step, setStep] = useState(1);
  const [selectedSilhouette, setSelectedSilhouette] = useState("");
  const [selectedColorCategory, setSelectedColorCategory] = useState("");
  const [selectedColorShade, setSelectedColorShade] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedEmbellishment, setSelectedEmbellishment] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // 👇 Save Design Function
  const saveDesign = async () => {
    const preview = document.getElementById("design-preview");
    if (!preview) return;

    const canvas = await html2canvas(preview);
    const link = document.createElement("a");
    link.download = "my_custom_dress.png";
    link.href = canvas.toDataURL();
    link.click();

    alert("✅ Your design has been saved!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Customize Your Own Dress
      </h2>

      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold mb-16">Select Silhouette</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {silhouettes.map((item) => (
              <button
                key={item}
                className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-center transition duration-300 text-sm font-medium hover:bg-primary hover:[white] ${
                  selectedSilhouette === item
                    ? "bg-primary text-white"
                    : "bg-[white] text-black"
                }`}
                onClick={() => setSelectedSilhouette(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Select Color</h3>
          <div className="flex gap-6 flex-wrap mb-4 justify-center">
            {Object.keys(colorCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedColorCategory(category)}
                className={`px-4 py-2 rounded-full border hover:bg-primary hover:text-[#B17F6B] font-medium ${
                  selectedColorCategory === category
                    ? "bg-primary text-white"
                    : "bg-[white] text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <br />
          {selectedColorCategory && (
            <div className="flex gap-8 flex-wrap justify-center">
              {colorCategories[selectedColorCategory].map((shade) => (
                <button
                  key={shade}
                  onClick={() => setSelectedColorShade(shade)}
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-[white] ${
                    selectedColorShade === shade
                      ? "bg-primary text-white"
                      : "bg-[#fddcd3] text-black"
                  }`}
                >
                  {shade}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold mb-16">Select Fabric</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {fabrics.map((fabric) => (
              <button
                key={fabric}
                className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-[white] ${
                  selectedFabric === fabric
                    ? "bg-primary text-white"
                    : "bg-[#fddcd3] text-black"
                }`}
                onClick={() => setSelectedFabric(fabric)}
              >
                {fabric}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-xl font-semibold mb-16">Select Embellishment</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {embellishments.map((emb) => (
              <button
                key={emb}
                className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-[white] ${
                  selectedEmbellishment === emb
                    ? "bg-primary text-white"
                    : "bg-[#fddcd3] text-black"
                }`}
                onClick={() => setSelectedEmbellishment(emb)}
              >
                {emb}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-16">
        {step > 1 && (
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={nextStep}
          >
            Next
          </button>
        )}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-primary mb-12">Live Preview</h3>
        <div
          className="w-64 h-96 mx-auto relative bg-gray-100 border rounded-xl shadow-inner flex flex-col items-center justify-center"
          id="design-preview" // 👈 Added ID here
        >
          <div className="text-lg font-bold text-primary">
            {selectedSilhouette}
          </div>
          <div className="text-sm text-primary-600">
            {selectedColorShade && `Color: ${selectedColorShade}`}
          </div>
          <div className="text-sm text-primary-600">
            {selectedFabric && `Fabric: ${selectedFabric}`}
          </div>
          <div className="text-sm text-primary-600">
            {selectedEmbellishment && `Embellishment: ${selectedEmbellishment}`}
          </div>
        </div>

        {/* 👇 Save Button */}
        <div className="mt-6">
          <button
            onClick={saveDesign}
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700"
          >
            Save & Share Your Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeYourOwn;
