import React, { useState } from 'react';
import axios from 'axios';

function AppTest() {
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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>Image Classification</h1>
      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }} />
      <button onClick={handleSubmit} style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '15px 30px', borderRadius: '4px', cursor: 'pointer' }}>
        Predict
      </button>
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
      {prediction && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '10px' }}>Prediction:</h2>
          <p style={{ fontSize: '70px'}}>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default AppTest;
