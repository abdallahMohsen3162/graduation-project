"use client";
import Image from 'next/image'
import UploadImage from './components/Sender'
import ImagePage from './components/Reciever';
import ImageGallery from './components/TRY';

import UploadPage from './components/Reciever';
import Loading from './components/Loading';
export default function Home() {
  return (
    <div>
      {/* <UploadImage /> */}
      <UploadPage />
     

    </div>
  )
}
