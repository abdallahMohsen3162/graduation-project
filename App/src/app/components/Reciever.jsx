"use client"
import React, { useState } from 'react';
import axios from 'axios';
const videoExtensions = ['.mp4', '.webm', '.avi'];
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
let arr = [''];
function detectType(name){
  console.log(name);
  let lstDot = name.lastIndexOf('.');
  if(lstDot < 0){
    return "Can't determine"
  }
  console.log(lstDot);
  let ex = name.substring(lstDot)
  console.log(ex);
  if(videoExtensions.indexOf(ex) >= 0){
    return "video";
  }
  if(imageExtensions.indexOf(ex) >= 0){
    return "image";
  }
  return ex;
}

function UploadPage() {
  const [image, setImage] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [filename, setfilename] = useState("");

  function handleFileUpload(event) {
    const file = event.target.files[0];
    setfilename(file.name);
    setImage(file);
    if (file) {
      console.log(detectType(file.name))
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);
    setfilename(file.name);
    if (file) {
      console.log(detectType(file.name))
    }
  }


  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://127.0.0.1:80/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      arr = response.data.message;
      setc(c + 1);
      console.log(arr);
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
        {fileType && <p>File type: {filename}</p>}
      </div>
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default UploadPage;
