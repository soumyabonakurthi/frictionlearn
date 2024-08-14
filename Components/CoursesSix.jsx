
import React from 'react'
import homeicon  from '../assets/Group 48095909.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import naturecareersoneimg from '../assets/naturecareerone.png'
import naturecareerstwoimg from '../assets/naturecareerstwo.png'
import naturecareersthreeimg from '../assets/naturecareersthree.png'
import naturecareersfourimg from '../assets/naturecareersfour.png'




export default function CoursesSix() {
  return (

    // header section
    <div className="w-full h-[921px] bg-white p-8">
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2 ml-[152px]">
        <div className="bg-gray-200 p-2 rounded-full">
          <img src={homeicon} alt="Home" className="w-6 h-6"/>
        </div>
        <span className="text-[24px]  font-bold">Home</span>
      </div>
      <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px]">Get Started</button>
    </header>


    <div className=''>
    <h1 className="text-[40px]  fontFamily-sans-serif[lato], font-bold text-center mb-[25px] text-[#022956]">Explore Courses</h1>
    <p className="text-center text-[#F27329] text-[30px] font-semibold mb-8">
      Discover a variety of courses to advance your skills and knowledge.
    </p>
    </div>
    <div className='flex justify-between w-full h-[42px] mt-[58px]'>
  <div className="mb-8 max-w-lg inline-flex items-center w-[452px] h-[42px] border border-gray-600 rounded-full  ml-[80px]">
    <img src={searchicon} alt="Search Icon" className="w-[20px] h-[20px] ml-[10px]" />
    <input
      type="text"
      placeholder="Search here"
      className="border-none outline-none w-[300px] h-[19px] rounded-lg shadow-2xl mr-[20px] ml-[20px]"
    />
  </div>
  <div className='mr-[104px]  '>
    <button className="flex items-center bg-white border border-gray-600 px-4 py-2 rounded-full w-[159px]">
      <span>Sort by</span>
      <img src={arr} alt="Arrow Icon" className="w-[11.13px] h-[7.13px] ml-[50px]" />
    </button>
  </div>
</div>




{/* middle content */}


<div className='mt-[50px] mx-[70px]'>
     <div className='flex'>
        {/* First Course Card (Full Width on Larger Screens) */}
        <div className="lg:col-span-1 bg-white p-4 mr-[91px] w-[283px] h-[48px]  text-start">
          <h2 className="text-[23px] font-semibold mb-6 text-[#F27329]">Code Career</h2>
          <ul className="text-[20px] font-semibold font-Lato font-sans text-gray-600 gap-8">
            <li className='mb-4 py-4  text-[#1D2228] text-[20px] font-semibold'>Business Career</li>
            <li className='mb-4   py-4     text-[#1D2228] text-[20px] font-semibold  '>Non-IT Career</li>
            <li className='mb-4   py-4    text-[#1D2228] text-[20px] font-semibold'>Lifestyle Career</li>
            <li className='mb-4   py-4     text-[20px] font-semibold  text-[#F27329]'>Nature Career</li>
            <li className='mb-4   py-4   text-[#1D2228] text-[20px] font-semibold'>Competitive Exams</li>
            <li className='mb-4   py-4  text-[#1D2228] text-[20px] font-semibold'>Other</li>
          </ul>
        </div>
        <div className=" grid grid-rows-2 grid-flow-col gap-4">
        {/* Other Course Cards */}

        {/* row one cards */}
        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[120px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='mb-[44px] text-start align-middle text-[#1D2228] text-[16px] font-sans font-lato font-normal' > 
              <h2 className="text-xl font-bold text-gray-800  mb-2">Environmental Science</h2>
            <p className="text-[12px]    text-[#1D2228] font-medium">Study environmental processes and develop<br></br> solutions for sustainable living..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={naturecareersoneimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex flex-row gap-[130px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='mb-[44px] text-start align-middle  text-[#1D2228] text-[16px] font-sans font-lato font-normal'>
                 <h2 className="text-xl   mb-2 font-bold text-gray-800    ">Wildlife</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium ">Explore conservation, animal behavior,<br></br>and biodiversity for wildlife protection</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={naturecareerstwoimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>

        


        

 {/* row two cards */}




        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[110px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start mb-[44px] align-middle'> <h2 className="text-xl font-bold text-gray-800  text-start mb-2">Agriculture</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Learn modern farming techniques, crop <br></br>management, and agricultural technology.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={naturecareersthreeimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>



        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[120px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start mb-[44px] align-middle'> <h2 className="text-xl font-bold text-gray-800  text-start mb-2">Botany</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium"> Understand plant biology, herbal medicine, <br></br>and gardening techniques..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={naturecareersfourimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        

       




    
</div>
       
      </div>

      {/* Button */}
     
    </div>


</div>
  )
}
