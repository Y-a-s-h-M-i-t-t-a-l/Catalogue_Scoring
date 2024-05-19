import React, { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {

  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPdf(file);
      // You can perform further processing here, such as reading the file content or uploading it to a server
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPrediction(response.data.prediction); // Correctly access 'prediction' from the response data
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.'); // Set error message
      setPrediction(null); // Clear prediction
    }
  };
  return (
    <div className="w-full relative bg-gray h-[982px] overflow-hidden text-left text-lg text-white font-inter">
      <div className="absolute top-[229px] left-[calc(50%_-_446px)] text-23xl tracking-[-0.28px] font-semibold text-center">
        Add Product
      </div>
      <div className="absolute h-[5.6%] top-[31.57%] bottom-[62.83%] left-[calc(50%_-_596px)] rounded-md box-border w-[550px] font-poppins border-[1px] border-solid border-white">
        <div className="absolute top-[16px] left-[18px] leading-[130%]">
          Product name
        </div>
      </div>
      <div className="absolute h-[5.6%] top-[38.19%] bottom-[56.21%] left-[calc(50%_-_596px)] rounded-md box-border w-[550px] font-poppins border-[1px] border-solid border-white">
        <div className="absolute top-[16px] left-[18px] leading-[130%]">
          Product name
        </div>
      </div>
      <div className="absolute h-[5.6%] top-[58.04%] bottom-[36.35%] left-[calc(50%_-_595px)] rounded-md box-border w-[550px] font-poppins">
        {/* <div className="absolute top-[16px] left-[18px] leading-[130%]"></div> */}
        <span> <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }} />

        
        </span>
        
      </div>
      <div className="absolute h-[5.6%] top-[44.81%] bottom-[49.59%] left-[calc(50%_-_595px)] rounded-md box-border w-[550px] font-poppins border-[1px] border-solid border-white">
        <div className="absolute top-[16px] left-[18px] leading-[130%]">
          Product name
        </div>
      </div>
      <div className="absolute h-[5.6%] top-[51.43%] bottom-[42.97%] left-[calc(50%_-_596px)] rounded-md box-border w-[550px] font-poppins border-[1px] border-solid border-white">
        <div className="absolute top-[16px] left-[18px] leading-[130%]">
          Product name
        </div>
      </div>
      <div className="absolute h-[6.96%] w-[18.09%] top-[66.7%] right-[62.2%] bottom-[26.34%] left-[19.71%] text-center text-[28px]">
        <button onClick={handleSubmit}>
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[13.67px] bg-skyblue" />
        <div className="absolute h-[46%] w-[50.5%] top-[26.33%] left-[22.67%] inline-block">
        {/* <button onClick={handleSubmit}> */}
        Predict
        </div>
      </button>
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
      {prediction && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '10px' }}>Prediction:</h2>
          <p style={{ fontSize: '70px'}}>{prediction}</p>
        </div>
      )}
      </div>
      <div className="absolute top-[40px] left-[80px] w-[232px] h-20 text-center text-[33.6px]">
        <div className="absolute top-[0px] left-[0px] w-20 h-20">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate w-20 h-20" />
          <img
            className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
            alt=""
            src="/neutrino-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[20px] left-[92px] tracking-[-0.22px] font-semibold">
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
      <div className="absolute top-[390px] left-[calc(50%_+_259px)] w-[353px] h-[101px] text-center text-23xl">
      <div>

<h2>Select a PDF file:</h2>
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handlePdfInputChange}
                />
                {selectedPdf && (
                    <div>
                        <p>Selected PDF: {selectedPdf.name}</p>
                        {/* You can render additional information or perform actions here */}
                    </div>
                )}

</div> 
      </div>
      <div className="absolute top-[413px] left-[812px] text-[72px]">OR</div>
    </div>
    
  );
};

export default AddProduct;
