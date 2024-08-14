



import React from 'react';
import homeicon from "../assets/Group 48095909.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import development from "../assets/development.png"


function DesignThree() {
  return (
    <div className="w-[full] h-auto p-4 ml-[50px]">
      {/* Header */}
  
      <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2 ml-[102px]">
        <div className="bg-gray-200 p-2 rounded-full">
          <img src={homeicon} alt="Home" className="w-6 h-6"/>
        </div>
        <span className="text-[24px]  font-bold">Home</span>
      </div>
      <button className="text-white px-4 py-2 rounded bg-[#022956] text-[16px] font-bold w-[236px] h-[42px] mr-[102px]">Get Started</button>
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








      {/* Main Content */}
     
      <div className="flex w-[full] mt-[58px] ml-[56px]">
        {/* Left Sidebar */}
        <div className="w-1/4 pr-4 mt-[70px]">
          <div className="bg-white p-4  border-r border-0 border-orange-500">
            <h2 className="text-[30px] font-semibold text-[#F27329] font-Lato font-sans mb-2">Code Career</h2>
            <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans list-none "> Development</li>
            <ul className="list-none text-[#1D2228] pl-4">
              <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans text-[#F27329] ml-[-20px] ">Design</li>
              <div className='list-disc  pl-4 '>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans  ">UI/UX Design & Research</li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans  ">Game Design</li>
              <li className="  mb-2 text-[16px] font-medium font-Lato font-sans  ">VFX/Animation/Video Editing</li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans  border-b-2 w-[220px] border-black">Adobe Creative Suite</li>
       
              </div>
            </ul>
          </div>
          <ul className="list-none text-[#1D2228] mt-2  border-r border-orange-500 ">
       
            <li className=" mb-2 text-[22px] font-semibold font-Lato font-sans">Data Science & Analytics</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">AI & ML</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Cybersecurity</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">DevOps</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Cloud Computing</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Blockchain Development</li>
            <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Business Career</li>
            <li className="mb-2 text-[30px]  font-semibold font-Lato font-sans">Non-IT Career</li>
            <li className="mb-2 text-[30px]  font-semibold font-Lato font-sans">Lifestyle Career</li>
            <li className="mb-2 text-[30px]  font-semibold font-Lato font-sans">Nature Career</li>
            <li className="mb-2 text-[30px]  font-semibold font-Lato font-sans">Competitive Exams</li>
            <li className="mb-2 text-[30px]  font-semibold font-Lato font-sans">Other</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-3/4 pl-2 mt-[76px]">
          <h2 className="text-[28px] font-semibold text-[#022956]">Start Your Skill-Building Path with <span className="text-[#F27329]">Design Courses</span></h2>
          <div className="bg-white p-2">
            <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[24px]">Adobe Creative Suite</h3>
            <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">Master user interface and user experience design through comprehensive research and techniques..</p>
            <div className="grid grid-cols-3 gap-[32px]">
              {/* Example video thumbnails */}


              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[300px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'> 
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Introduction to Adobe Creative <br></br>Suite  </p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Overview of Adobe Creative Suite<br></br>applications and their uses.</p></div>
               
              </div>


              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Photoshop Fundamentals</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Basic photo editing, retouching, and <br></br>compositing techniques in Photoshop..</p></div>
               
              </div>





              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Illustrator Basics</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Creating vector graphics, logos, and<br></br> illustrations using Adobe Illustrator..</p></div>
               
              </div>


              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">InDesign Essentials</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Designing and formatting layouts for print<br></br> and digital media with InDesign..</p></div>
               
              </div>




              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Premiere Pro for Video Editing</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Editing videos, adding effects, and<br></br> creating sequences in Premiere Pro..</p></div>
               
              </div>
  


              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">After Effects for Motion Graphics</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Developing motion graphics and visual<br></br> effects using After Effects..</p></div>
               
              </div>


              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Lightroom for Photo Management</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Organizing, editing, and managing photo<br></br> collections with Adobe Lightroom.</p></div>
               
              </div>
              

              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Audition for Audio Editing</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Recording, editing, and enhancing audio<br></br> tracks with Adobe Audition..</p></div>
               
              </div>
            

              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">XD for UI/UX Design</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Designing user interfaces and user<br></br> experiences with Adobe XD..</p></div>
               
              </div>








            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignThree;
