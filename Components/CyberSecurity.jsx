



import React from 'react';
import homeicon from "../assets/Group 48095909.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import development from "../assets/development.png"


function Cybersecurity() {
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
    <div className="bg-white p-4 border-r border-0 border-orange-500">
      <h2 className="text-[30px] font-semibold text-[#F27329] font-Lato font-sans mb-2">Code Career</h2>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans list-none">Development</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans list-none">Design</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans list-none">Data Science & Analytics</li>
      <ul className="list-none text-[#1D2228] pl-4">
        <li className="mb-2 text-[22px] font-semibold font-Lato font-sans text-[#F27329] ml-[-20px]"> Cybersecurity</li>
        <div className='list-disc pl-4'>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans border-b-2 w-[220px] border-black">Ethical Hacking</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans ">Network Security</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans">Cyber Threat</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans">Incident Response</li>
        </div>
      </ul>
    </div>
    <ul className="list-none text-[#1D2228] mt-2 border-r border-orange-500">
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">AI & ML</li>

      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">DevOps</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Cloud Computing</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Blockchain Development</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Business Career</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Non-IT Career</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Lifestyle Career</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Nature Career</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Competitive Exams</li>
      <li className="mb-2 text-[30px] font-semibold font-Lato font-sans">Other</li>
    </ul>
  </div>

  {/* Right Content */}
  <div className="w-3/4 pl-2 mt-[76px]">
    <h2 className="text-[28px] font-semibold text-[#022956]">
      Start Your Skill-Building Path with 
      <span className="text-[#F27329]"> Cybersecurity Courses</span>
    </h2>
    <div className="bg-white p-2">
      <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[24px]">
        Ethical Hacking
      </h3>
      <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
        Gain the skills to protect systems by identifying and fixing vulnerabilities.
      </p>
      <div className="grid grid-cols-3 gap-[32px]">
        {/* Example video thumbnails */}

        <div className="w-full">
          <div>
            <img src={development} alt="Introduction to Ethical Hacking" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Introduction to Ethical Hacking</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Overview of ethical hacking principles, practices, and its significance.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Reconnaissance Techniques" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Reconnaissance Techniques</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Methods for gathering information about targets to identify vulnerabilities.
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div>
            <img src={development} alt="Scanning and Enumeration" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Scanning and Enumeration</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Techniques for discovering and mapping network resources and services.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Exploitation and Vulnerability Testing" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Exploitation and Vulnerability Testing</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Identifying and exploiting vulnerabilities to assess security weaknesses.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Network Security and Defense" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Network Security and Defense</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Strategies to secure networks and prevent unauthorized access.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Web Application Security" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Web Application Security</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Techniques to test and secure web applications against threats.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Wireless Network Security" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Wireless Network Security</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Protecting and testing wireless networks against hacking attempts.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Social Engineering Attacks" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Social Engineering Attacks</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Understanding and preventing manipulation techniques used to breach security.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Reporting and Mitigation" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Reporting and Mitigation</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Documenting findings and implementing measures to fix security vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
  );
}

export default Cybersecurity;
