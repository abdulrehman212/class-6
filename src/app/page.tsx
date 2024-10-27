import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* Tailwind CSS Class */}
   {/* These are comments */}
   {/* 
   bg -> background , 
   mb-4 -> margin buttom 4px , 
   p -> padding is a space inside box from boundary to its content,
   m -> margin is a space between one box to another box,
   ml -> margin left,
   mt -> margin top ,

   for detail 

   https://www.w3schools.com/css/css_boxmodel.asp

  for custom value use [ ] brackets

  like text-[custom value]  ->  text-[28px]

   */}


   <div className="bg-red-300 mb-5 p-4 text-[28px]">
    1st Box
   </div>
   <div className="bg-green-200 ml-4 mr-4 p-5">
    2nd Box
   </div>
   <div className="bg-blue-200 mt-5 p-4">
    3nd Box
   </div>
   </>
  );
}

   {/* Use state , props */}