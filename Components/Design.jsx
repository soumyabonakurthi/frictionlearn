



import React from 'react';
import homeicon from "../assets/Group 48095909.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import development from "../assets/development.png"


function Design() {
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
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans border-b-2 w-[220px] border-black ">UI/UX Design & Research</li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans">Game Design</li>
              <li className="  mb-2 text-[16px] font-medium font-Lato font-sans">VFX/Animation/Video Editing</li>
              <li className=" mb-2 text-[16px] font-medium font-Lato font-sans">Adobe Creative Suite</li>
       
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
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Business Career</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Non-IT Career</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Lifestyle Career</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Nature Career</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Competitive Exams</li>
            <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Other</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-3/4 pl-2 mt-[76px]">
          <h2 className="text-[28px] font-semibold text-[#022956]">Start Your Skill-Building Path with <span className="text-[#F27329]">Design Courses</span></h2>
          <div className="bg-white p-2">
            <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[24px]">UI/UX Design & Research</h3>
            <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">Master user interface and user experience design through comprehensive research and techniques..</p>
            <div className="grid grid-cols-3 gap-[32px]">
              {/* Example video thumbnails */}

              
              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'> 
                  <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Introduction to UI/UX Design </p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Basics of UI/UX design, key principles,<br></br> and industry insights.</p></div>
               
              </div>

              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">User Research and Personas</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Conducting user research and creating<br></br> personas to guide design decisions..</p></div>
               
              </div>
              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Information Architecture and Wireframing</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Structuring content and creating<br></br> wireframes to organize and visualize<br></br> layouts..</p></div>
               
              </div>

              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Visual Design Principles</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Applying color theory, typography,<br></br> and layout to enhance visual appeal..</p></div>
               
              </div>
  
              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Prototyping and User Testing</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Developing prototypes and conducting<br></br> user tests to refine designs..</p></div>
               
              </div>
              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Interaction Design</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Designing interactive elements to<br></br> improve user engagement and<br></br> experience.</p></div>
               
              </div>
              

              <div className="w-full ">
                <div>  <img src={development} alt="Mobile Development" className="w-[284px] h-[181px] rounded-sm mb-2"/>
                </div>
               <div  className='ml-[10px]'>   <p className="text-[#1D2228]  font-bold text-[16px] font-Lato font-sans mb-2">Interaction Design</p>
               <p  className='text-[14px] font-Regular font-Lato font-sans mb-2'>Employing various research methods to<br></br> gather insights and improve usability..</p></div>
               
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
