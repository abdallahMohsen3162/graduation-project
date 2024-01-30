export function detectType(name){
   const videoExtensions = ['.mp4', '.webm', '.avi'];
   const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
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