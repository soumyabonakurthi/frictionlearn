



import React from 'react';
import homeicon from "../assets/Group 48095909.png";
import searchicon from '../assets/searchicon.png';
import arr from '../assets/arr.png';
import development from "../assets/development.png"


function CloudComputing () {
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
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans list-none">Cybersecurity</li>
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans list-none">DevOps</li>
      <ul className="list-none text-[#1D2228] pl-4">
        <li className="mb-2 text-[22px] font-semibold font-Lato font-sans text-[#F27329] ml-[-20px]"> Cloud Computing</li>
        <div className='list-disc pl-4'>

          <li className="mb-2 text-[16px] font-medium font-Lato font-sans   border-b-2 w-[220px] border-black"> AWS</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans ">Google Cloud</li>
          <li className="mb-2 text-[16px] font-medium font-Lato font-sans  ">Microsoft Azure</li>
        </div>
      </ul>
    </div>
    <ul className="list-none text-[#1D2228] mt-2 border-r border-orange-500">
      <li className="mb-2 text-[22px] font-semibold font-Lato font-sans">AI & ML</li>
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
      <span className="text-[#F27329]">  Cloud Computing Courses</span>
    </h2>
    <div className="bg-white p-2">
      <h3 className="text-[20px] font-semibold font-Lato font-sans text-[#1D2228] mt-[24px]">
      AWS
      </h3>
      <p className="text-[#1D2228] mt-[19px] font-Lato font-sans text-[16px] font-semibold mb-[44px]">
      Learn Amazon Web Services for scalable, reliable, and cost-effective cloud solutions.
      </p>
      <div className="grid grid-cols-3 gap-[32px]">
        {/* Example video thumbnails */}
        <div className="w-full">
          <div>
            <img src={development} alt="Introduction to Docker" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">Introduction to AWS</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Overview of AWS services, cloud computing benefits, and core concepts.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img src={development} alt="Docker Installation and Setup" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">AWS Management Console</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Navigating and using the AWS Management Console for service management
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img src={development} alt="Creating and Managing Docker Containers" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">EC2 and Virtual Servers</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Setting up and managing virtual servers with Amazon EC2.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img src={development} alt="Docker Networking and Storage" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">S3 and Cloud Storage</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Storing and managing data using Amazon S3 cloud storage.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <img src={development} alt="Docker Networking and Storage" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">AWS Networking (VPC)</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Configuring and managing virtual private clouds (VPCs) for secure networking.
            </p>
          </div>
        </div>


        <div className="w-full">
          <div>
            <img src={development} alt="Introduction to Kubernetes" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">AWS Security and IAM</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Implementing security practices and managing identities with IAM.
            </p>
          </div>
        </div>


        <div className="w-full">
          <div>
            <img src={development} alt="Kubernetes Architecture" className="w-[284px] h-[181px] rounded-sm mb-2"/>
          </div>
          <div className='ml-[10px]'>
            <p className="text-[#1D2228] font-bold text-[16px] font-Lato font-sans mb-2">AWS Lambda and Serverless</p>
            <p className='text-[14px] font-Regular font-Lato font-sans mb-2'>
            Building and deploying serverless applications using AWS Lambda.
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

export default CloudComputing;
