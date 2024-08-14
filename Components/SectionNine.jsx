import React, { useEffect } from 'react';
import './Style.css'; // Make sure this file exists

import img1 from '../assets/numbers.png';
import img2 from '../assets/numbertwo.png';
import img3 from '../assets/numberthrees.png';
import img4 from '../assets/numberfours.png';
import img5 from '../assets/Group 48095819.png';
import img6 from '../assets/Group 48095819.png';
import img7 from '../assets/Group 48095820.png';
import img8 from '../assets/Group 48095822.png';
import img9 from '../assets/Group 48095832.png';
import img10 from '../assets/numbersfive.png';

import contentImg1 from '../assets/nineone.png';
import contentImg2 from '../assets/ninetwo.png';
import contentImg3 from '../assets/ninethree.png';
import contentImg4 from '../assets/ninefour.png';
import contentImg5 from '../assets/ninefive.png';

const images = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    contentImg1,
    contentImg2,
    contentImg3,
    contentImg4,
    contentImg5,
};

export default function SectionNine() {
    useEffect(() => {
        const handleAnimationEnd = () => {
            const button = document.getElementById('apply-button');
            if (button) {
                button.style.backgroundColor = '#FFFFFF'; // White background
                button.style.color = '#022956'; // Blue text
            }
        };

        const animationEndTrigger = document.getElementById('animation-end-trigger');
        if (animationEndTrigger) {
            animationEndTrigger.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if (animationEndTrigger) {
                animationEndTrigger.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);

    return (
        <div className='w-full'>
            <div className="timeline section">

             



                <div className="container left-container">
                    <div className="img"><img src={images.img2} alt="Advantages of Incubation" /></div>
                    <div className="text-box">
                        <div className="content">
                            <h3>Advantages of Incubation</h3>
                            <img src={images.contentImg2} className="content-imag" alt="Content" />
                            <p style={{ textAlign: 'center' }}>It sharpens your business ideas, offers expert guidance, and provides resources to accelerate startup growth.</p>
                        </div>
                    </div>
                </div>



                <div className="container right-0">
                    <div className="img"><img src={images.img3} alt="Operational Mechanism" /></div>
                    <div className="text-box">
                        <div className="content">
                            <h3>Operational Mechanism</h3>
                            <img src={images.contentImg3} className="content-imag" alt="Content" />
                            <p style={{ textAlign: 'center' }}>Validate ideas, build prototypes, and prepare for market entry through structured mentorship.</p>
                        </div>
                    </div>
                </div>







<div className="container float-right mr-[0%]  left-[50%]">
  <div className="img">
    <img src={images.img3} alt="Operational Mechanism" />
  </div>
  <div className="text-box">
    <div className="content">
      <h3>Operational Mechanism</h3>
      <img src={images.contentImg3} className="content-imag" alt="Content" />
      <p style={{ textAlign: 'center' }}>Validate ideas, build prototypes, and prepare for market entry through structured mentorship.</p>
    </div>
  </div>
</div>











                               <div className="container left-container">
                    <div className="img"><img src={images.img4} alt="How Will You Benefit?" /></div>
                    <div className="text-box">
                        <div className="content">
                            <h3>How Will You Benefit?</h3>
                            <img src={images.contentImg4} className="content-imag" alt="Content" />
                            <p style={{ textAlign: 'center' }}>Navigate the incubation process with these steps.</p>
                        </div>
                    </div>
                </div>




                <div className="container left-container ">
                    <div className="img ">
                        <img src={images.img5} alt="Join" />
                        </div>
                    <div className="text-box mr-[900px] ">
                        <h3>Join</h3>
                        <p>Join the incubation program to start your entrepreneurial journey.</p>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="img"><img src={images.img6} alt="Interview by Mentors" /></div>
                    <div className="text-box   mr-[900px]">
                        <h3>Interview by Mentors</h3>
                        <p>Engage in one-on-one sessions with industry mentors to refine your business model.</p>
                    </div>
                </div>
                <div className="container left-container">
                    <div className="img"><img src={images.img7} alt="Evaluation Process" /></div>
                    <div className="text-box   mr-[900px]">
                        <h3>Evaluation Process</h3>
                        <p>Receive feedback and guidance during the evaluation of your business idea.</p>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="img"><img src={images.img8} alt="Finalizing" /></div>
                    <div className="text-box   mr-[900px]">
                        <h3>Finalizing</h3>
                        <p>Finalize your business plan and prepare for presentation.</p>
                    </div>
                </div>
                <div className="container left-container">
                    <div className="img"><img src={images.img9} alt="Selection" /></div>
                    <div className="text-box   mr-[900px]">
                        <h3>Selection</h3>
                        <p>Selected startups receive incubation support based on potential and feasibility.</p>
                    </div>
                </div>
                <div className="container right-container">
                    <div className="img"><img src={images.img10} alt="Incubation Insights" /></div>
                    <div className="text-box">
                        <div className="content">
                            <h3>Incubation Insights</h3>
                            <img src={images.contentImg5} className="content-imag" alt="Content" />
                            <p style={{ textAlign: 'center' }}>Validate ideas, build prototypes, and prepare for market entry through structured mentorship.</p>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button id="apply-button">Apply Now</button>
                </div>
                <div id="animation-end-trigger"></div>
            </div>
        </div>
    );
}
