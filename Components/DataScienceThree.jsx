



import React from 'react';
import homeicon from "../assets/Group 48095909.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import development from "../assets/development.png"


function DataScienceThree() {
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
      <ul className="list-none text-[#1D2228] pl-4">
        <li className="mb-2 text-[22px] font-semibold font-Lato font-sans text-[#F27329] ml-[-20px]">Data Science & Analytics</li>
        <div className='list-disc pl-4'>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans">Data Science Structure</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans ">Data Science Framework</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans">Data Visualization</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans  border-b-2 w-[120px] border-black">Big Data</li>
        </div>
      </ul>
    </div>
    <ul className="list-none text-[#1D2228] mt-2 border-r border-orange-500">
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">AI & ML</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">Cybersecurity</li>
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
      <span className="text-[#F27329]"> Data Science & Analytics Courses</span>
    </h2>
    <div className="bg-white p-2">
      <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[24px]">
        Big Data
      </h3>
      <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
        Harness the power of massive data sets for valuable insights.
      </p>
      <div className="grid grid-cols-3 gap-[32px]">
        {/* Example video thumbnails */}

        <div className="w-full">
          <div>
            <img src={development} alt="Introduction to Big Data" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Introduction to Big Data</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Overview of big data concepts, significance, and industry applications.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Big Data Technologies" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Big Data Technologies</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Exploring technologies like Hadoop, Spark, and NoSQL databases.
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div>
            <img src={development} alt="Data Storage Solutions" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Data Storage Solutions</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Understanding data storage options, including HDFS, cloud storage, and databases.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Data Processing with Hadoop" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Data Processing with Hadoop</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Using Hadoop for distributed data storage and processing.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Real-time Data Processing with Spark" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Real-time Data Processing with Spark</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Implementing real-time data processing and analytics with Apache Spark.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Big Data Analytics" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Big Data Analytics</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Techniques for analyzing large data sets to uncover insights.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Data Governance and Security" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Data Governance and Security</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Ensuring data quality, compliance, and security in big data environments.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div>
            <img src={development} alt="Case Studies and Applications" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Case Studies and Applications</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
              Real-world examples of big data applications across various industries.
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

export default DataScienceThree;
