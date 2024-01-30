"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { detectType } from '../../../helpers/fileHelper';
import Loading from './Loading';
let images = [''];
let classes = [''];


function UploadPage() {
  const [image, setImage] = useState(null);
  const [c, setc] = useState(0)
  const [fileType, setFileType] = useState(null);
  const [filename, setfilename] = useState("");
  const [loading, setloading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setfilename(file.name);
    setImage(file);
    if (file) {
      console.log(detectType(file.name))
      setFileType(detectType(file.name).toLocaleUpperCase())

    }
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);
    setfilename(file.name);

    if (file) {
      console.log(detectType(file.name))
      setFileType(detectType(file.name).toLocaleUpperCase())

    }
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }


  const handleUpload = async () => {
    if(!image){
      return;
    }
    setloading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://127.0.0.1:80/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setloading(false);
      images = response.data.message;
      classes = response.data.classes;
      console.log(classes);
      setc(c + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
      >
        <p>Drag and drop a file here or click to browse</p>
        <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
        <button onClick={() => document.querySelector('input[type="file"]').click()}>Browse</button>
        {
          (fileType)?(
            <p>{fileType} File Detected</p>
          ):(
            ""
          )
        }
      </div>
      <button onClick={handleUpload}>Upload Image</button>

      <div className='images'>
      {
        (c)?(
          images.map((el, idx) => {
            return(
              <div className='box' key={el}>
                <h2>{classes[idx]}</h2>
                <img src={el} alt="" />
              </div>
            )
          })
        ):(
          ""
        )
      }
      </div>

      {
        (loading)?(
          < Loading />
        ):(
          ""
        )
      }
    </div>
  );
}

export default UploadPage;
