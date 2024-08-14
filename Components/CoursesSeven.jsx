
import React from 'react'
import homeicon  from '../assets/Group 48095909.png';
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import competativeoneimg from '../assets/competativeone.png';
import competativetwoimg from '../assets/competativetwo.png';
import competativethreeimg from '../assets/competativethree.png';
import competativefourimg from '../assets/competativefour.png';
import competativefiveimg from '../assets/competativefive.png';
import competativesiximg from '../assets/competativesix.png';
import competativesevenimg from '../assets/competativeseven.png';
import competativeeightimg from '../assets/competativeeight.png';
import competativenineimg from '../assets/competativenine.png';
import competativetenimg from '../assets/competativeten.png';
import competativeelevenimg from '../assets/competativeeleven.png';
import competativetwelveimg from '../assets/competativetwelve.png';
import competativethirteenimg from '../assets/competativethirteen.png';
import competativefourteenimg from '../assets/competativefourteen.png';



export default function CoursesThree() {
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
    <h1 className="text-[40px] fontFamily-sans-serif[lato], font-bold text-center mb-[25px] text-[#022956]">Explore Courses</h1>
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
          <h2 className="text-[23px] font-semibold mb-6  text-[#1D2228]">Code Career</h2>
          <ul className="text-[20px] font-semibold font-Lato font-sans text-gray-600 gap-8">
            <li className='mb-4 py-4  text-[#1D2228] text-[20px] font-semibold'>Business Career</li>
            <li className='mb-4   py-4    text-[#1D2228] text-[20px] font-semibold'>Non-IT Career</li>
            <li className='mb-4   py-4    text-[#1D2228] text-[20px] font-semibold'>Lifestyle Career</li>
            <li className='mb-4   py-4   text-[#1D2228] text-[20px] font-semibold'>Nature Career</li>
            <li className='mb-4   py-4   text-[20px] font-semibold   text-[#F27329]'>Competitive Exams</li>
            <li className='mb-4   py-4  text-[#1D2228] text-[20px] font-semibold'>Other</li>
          </ul>
        </div>
        <div className=" grid grid-rows-7 grid-flow-col gap-4">
        {/* Other Course Cards */}

        {/* row one cards */}
        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='mb-[44px] text-start align-middle text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px]' > <h2 className="text-xl font-bold text-gray-800  mb-2">Bank Exam</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium">Prepare for banking exams with <br></br> comprehensive materials and practice tests.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativeoneimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex flex-row gap-[110px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='mb-[44px] text-start align-middle  text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px]'>
                 <h2 className="text-xl   mb-2 font-bold text-gray-800 ">SSC CGL</h2>
            <p className="text-[12px]  text-[#1D2228] font-medium ">Master key topics for Staff Selection Commission Combined Graduate Level exams.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativetwoimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div    className='text-start  align-middle mb-[44px]   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px]'> 
              <h2 className="text-xl font-bold text-gray-800  mb-4  ">GATE</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Ace the Graduate Aptitude Test <br></br>in Engineering with detailed subject resources.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativethreeimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[110px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px] '  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">CLAT</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Study for the Common Law Admission <br></br>Test with expert guidance and mock tests.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativefourimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px]  '  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">IELTS</h2>
            <p className="text-[12px]    text-[#1D2228] font-medium">Ace the Graduate Aptitude Test in Engineering <br></br>with detailed subject resources..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativefiveimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">GMAT</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Study for the Common Law Admission Test<br></br> with expert guidance and mock tests.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativesiximg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[130px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">State PCS J</h2>
            <p className="text-[12px]    text-[#1D2228] font-medium">State-specific exams for various<br></br> government job recruitments.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativesevenimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>
 {/* row two cards */}




        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[10px]  w-[456px] h-[112px] mb-[24px]">
            <div className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '   >
               <h2 className="text-xl font-bold text-gray-800  text-start mb-2">CAT</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Excel in the Common Admission Test with top-tier study guides and practice.</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativeeightimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>



        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[120px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '>
              <h2 className="text-xl font-bold text-gray-800  text-start mb-2">Railway Exams</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium"> Get ready for railway recruitment exams<br></br>with focused study plans and materials..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativenineimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div   className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '> 
              <h2 className="text-xl font-bold text-gray-800  text-start mb-2">CUET</h2>
            <p className="text-[13px]    text-[#1D2228] font-medium">Common University Entrance Test for <br></br>undergraduate programs in central universities..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativetenimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal  ml-[20px] '> <h2 className="text-xl font-bold text-gray-800  text-start mb-2">Judiciary</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Exams for recruitment in the judicial system..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativeelevenimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>


        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[150px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px] '  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">State Level</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">State-specific exams for various<br></br>government job recruitments..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativetwelveimg} alt="Development" className="w-16 h-16" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[90px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px]'  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">CA Exams</h2>
            <p className="text-[12px]   text-[#1D2228] font-medium">Chartered Accountancy exams for professional<br></br> certification in accounting..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativethirteenimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div> 

        <div className="bg-white shadow-md rounded-md p-4  flex flex-row gap-[100px]  w-[456px] h-[112px] mb-[24px]">
            <div  className='text-start mb-[44px] align-middle   text-[#1D2228] text-[16px] font-sans font-lato font-normal ml-[20px]'  >
               <h2 className="text-xl  text-start mb-2  font-bold text-gray-800 ">TEFL</h2>
            <p className="text-[12px]    text-[#1D2228] font-medium">Test of English as a Foreign Language for<br></br>non-native speakers..</p> 
            </div>
         
          <div className="flex justify-center mt-4">
            <img src={competativefourteenimg} alt="Development" className="w-16 h-16 " />
          </div>
        </div>
</div>
       
      </div>

      {/* Button */}
     
    </div>





































</div>
  )
}
