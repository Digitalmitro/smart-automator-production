import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [imageURL, setImageURL] = useState('');
  const [formData, setFormData] = useState({
    phone: '',
    userName: '',
    description: '',
    vehicle: '',
    serviceCategory: '',
    location: '',
    pricePerHour: '',
    totaltask: '',
    review: '',
    image:""
  });
  const [taskers, setTaskers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SOME_KEY}/service`);
      setTaskers(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    handleServiceDetails();
  }, []);

  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'image') {
      setImage(files[0]);
    } else if (name === 'cover') {
      setCover(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);

    try {
      const response = await axios.post(`${import.meta.env.VITE_SOME_KEY}/service`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
 
      setImage(null);
      setCover(null);
    } catch (error) {
      console.error(error);
    }
    handleServiceDetails()
  };


  return (
    <div className='' style={{ margin: '10px' }}>
     
      {imageURL && <img src={`${import.meta.env.VITE_SOME_KEY}/${imageURL}`} alt="Uploaded preview" style={{ width: '400px', height: '300px' }} />}
      <form onSubmit={handleSubmit}>
        <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} />
        <input type="text" name="userName" placeholder="User Name" onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
        <input type="text" name="vehicle" placeholder="Vehicle" onChange={handleInputChange} />
        <input type="text" name="serviceCategory" placeholder="Service Category" onChange={handleInputChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleInputChange} />
        <input type="text" name="pricePerHour" placeholder="Price Per Hour" onChange={handleInputChange} />
        <input type="text" name="totaltask" placeholder="Total Task" onChange={handleInputChange} />
        <input type="text" name="review" placeholder="Review" onChange={handleInputChange} />
        <input type="text" name="user_id" placeholder="User ID" onChange={handleInputChange} />
        <input type="file" onChange={handleFileChange} placeholder="Upload image" />
        <button  type="submit" style={{ marginTop: '20px' }}>
                Submit
              </button>
      </form>
      <div>
        <h2>Taskers</h2>
        <ul>
          {taskers.map(tasker => (
            <li key={tasker._id}>
              <img src={`${import.meta.env.VITE_SOME_KEY}/${tasker.image}`} alt={tasker.userName} style={{ width: '100px', height: '100px' }} />
              <p>{tasker.userName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageUpload;
