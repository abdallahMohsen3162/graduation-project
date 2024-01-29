"use client"
import React, { useState } from 'react';
const videoExtensions = ['.mp4', '.webm', '.avi'];
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

function detectType(name){
  console.log(name);
  let lstDot = name.lastIndexOf('.');
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
  const [fileType, setFileType] = useState(null);
  const [filename, setfilename] = useState("");

  function handleFileUpload(event) {
    const file = event.target.files[0];
    setfilename(file.name);
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
    setfilename(file.name);
    if (file) {
      console.log(detectType(file.name))
    }
  }

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
    </div>
  );
}

export default UploadPage;
