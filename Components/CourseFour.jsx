
import React from 'react'
import homeicon  from '../assets/Group 48095909.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import nonitoneimg from '../assets/nonitone.png';
import nonitotwoimg from '../assets/nonittwo.png'
import nonitthreeimg from '../assets/nonitthree.png'
import nonitfourimg from '../assets/nonitfour.png'
import nonitfiveimg from '../assets/nonitfive.png'
import nonitsiximg from '../assets/nonitsix.png'








export default function CourseFour() {
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
    <h1 className="text-[40px] font-black font-Lato font-sans text-center mb-[25px] text-[#022956]">Explore Courses</h1>
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
            <li className='mb-4   py-4     text-[20px] font-semibold  text-[#F27329]'>Non-IT Career</li>
            <li className='mb-4   py-4    text-[#1D2228] text-[20px] font-semibold'>Lifestyle Career</li>
            <li className='mb-4   py-4   text-[#1D2228] text-[20px] font-semibold'>Nature Career</li>
            <li className='mb-4   py-4   text-[#1D2228] text-[20px] font-semibold'>Competitive Exams</li>
            <li className='mb-4   py-4  text-[#1D2228] text-[20px] font-semibold'>Other</li>
          </ul>
        </div>
        <div className=" grid grid-rows-3 grid-flow-col gap-4">
        {/* Other Course Cards */}

        {/* row one cards */}
        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='mb-[44px] text-start align-middle text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px]' > <h2 className="text-xl font-bold text-gray-800  mb-2">Mechanical Engineering </h2>
            <p className="text-[12px]  text-[#1D2228] font-medium">Explore the fundamentals of mechanics,<br></br> thermodynamics, and materials science..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitoneimg} alt="Development" className="w-[60px] h-[59px] " />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='mb-[44px] text-start align-middle  text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px]'>
                 <h2 className="text-xl   mb-2 font-bold text-gray-800    ">Civil Engineering</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium"> Learn about construction, infrastructure,<br></br> and environmental engineering principles.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitotwoimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start  align-middle mb-[44px]   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '> 
              <h2 className="text-xl font-bold text-gray-800  mb-4  ">ECE</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium">Study electronic circuits, communication<br></br> systems, and signal processing techniques.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitthreeimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        

 {/* row two cards */}




        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[80px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start mb-[44px] align-middle  ml-[15px]'>
               <h2 className="text-xl font-bold text-gray-800  text-start mb-2">EEE</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium">Understand electrical systems, <br></br>power generation, and electronic device applications</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitfourimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>



        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[138px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start mb-[44px] align-middle  ml-[20px]'> 
              <h2 className="text-xl font-bold text-gray-800  text-start mb-2">Health Care</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium"> Gain skills in medical coding, health <br></br>information management,and nursing.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitfiveimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[130px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='text-start mb-[44px] align-middle ml-[20px]'>
               <h2 className="text-xl font-bold text-gray-800  text-start mb-2">General Life Saving</h2>
            <p className="text-[13px]  text-[#1D2228] font-medium">Learn essential life-saving techniques<br></br> and emergency response skills.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={nonitsiximg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


       




    
</div>
       
      </div>

      {/* Button */}
     
    </div>





































</div>
  )
}
