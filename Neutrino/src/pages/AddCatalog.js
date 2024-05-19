import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCatalog = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const navigate = useNavigate();

  const handlePdfInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPdf(file);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    setIsPredicting(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const predictedCategory = response.data.prediction;
      setPrediction(predictedCategory);

      if (predictedCategory === selectedCategory) {
        navigate("/ratings"); // Redirect to RatingsPage
      } else {
        setError("Selected category does not match the prediction.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <>

      <div className="bg-#131314">
        <div className="absolute top-[40px] left-[80px] w-[232px] h-20 text-center text-[33.6px]">
          <div className="absolute top-[0px] left-[0px] w-20 h-20">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate w-20 h-20"></div>
            <img
              className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
              alt=""
              src="/neutrino-logo-1@2x.png"
            />
          </div>
          <div
            className="absolute top-[20px] left-[92px] tracking-[-0.22px] font-semibold"
            style={{ color: "white" ,fontFamily: "Inter, sans-serif" }}
          >
            Neutrino
          </div>
        </div>
        <div className="absolute top-[58px] left-[1324px] w-[100px] h-[43.66px]">
          <img
            className="absolute top-[0px] left-[56.34px] w-[43.66px] h-[43.66px]"
            alt=""
            src="/group-20.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[43.66px] h-[43.66px]"
            alt=""
            src="/group-21.svg"
          />
        </div>
      </div>

      {/* inner layout  */}

      <div className="flex flex-row text-white p-28">
        <div className="basis-1/2">
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-white text-[32px]" style={{ fontFamily: "Inter, sans-serif" }}> Add <span className="text-[#5FB7D3]">Catalog</span> </p>
            <div className="w-full max-w-md pl-1">
              <div className="bg-white shadow-md rounded px-2 pb-2">
                <div className="mb-2">
                  <input
                    className="border-white mt-2 py-2 px-3 w-[300px] text-gray-700 "
                    id="email"
                    type="email"
                    placeholder="Enter the name of product"
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="border-white rounded w-[300px] py-2 px-3 text-gray-700 "
                    id="phoneNumber"
                    type="tel"
                    placeholder="Product Description "
                  />
                </div>
                <div className="mb-2">
                  <select
                    className="border-white rounded w-[300px] py-2 px-2 text-gray-700"
                    id="category"
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                  >
                    <option value="">Select Category</option>
                    <option value="dress">Dress</option>
                    <option value="pants">Pants</option>
                    <option value="shirt">Shirt</option>
                    <option value="shoes">Shoes</option>
                    <option value="shorts">Shorts</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    className="border-white rounded w-[300px] py-2 px-3 text-gray-700 "
                    id="sellerDetails"
                    type="text"
                    placeholder="Seller Details"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white w-[300px] p-2">
              <div>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  style={{
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                />
              </div>
              <div>
                <button
                  className="flex flex-col justify-center items-center h-8 w-32 rounded"
                  onClick={handleSubmit}
                >
                  Predict
                </button>
              </div>
              <div>
                {error && (
                  <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
                )}
                {prediction && (
                  <div style={{ marginTop: "40px" }}>
                    <h2
                      style={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      Prediction:
                    </h2>
                    <p style={{ fontSize: "28px" }}>{prediction}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="basis-1/2">
            <div className="flex flex-col justify-center items-center h-screen">
              <div>
                <h2 style={{ fontFamily: "Inter, sans-serif" }}>Select a PDF file:</h2>

                <div className="flex flex-col justify-center items-center">
                <div>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  style={{
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                />
              </div>


              <div>
                <button
                  className="h-8 w-32 rounded"
                  onClick={handleSubmit}
                >
                  Predict
                </button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inner layout ends here */}
    </>
  );
};

export default AddCatalog;
