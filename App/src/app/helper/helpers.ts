const setCookie = (name:string, value:any, daysToLive:number) => {
   const cookieValue = encodeURIComponent(value);
   const maxAge = daysToLive * 24 * 60 * 60;
   document.cookie = `${name}=${cookieValue}; max-age=${maxAge}; path=/`;
 };
 
 const deleteCookie = (name:string) => {
   document.cookie = `${name}=; Max-Age=0; path=/`;
 };