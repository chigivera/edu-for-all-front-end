import React from 'react';
import Lottie from 'lottie-react';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import student1 from '../animations/Animation - 1716027210658.json'
import student2 from '../animations/Animation - 1716031858562.json'
import student3 from '../animations/Animation - 1716032375075.json'
import student4 from '../animations/Animation - 1716033150754.json'
import startButton from '../animations/Animation - 1716032652640.json'


import { left } from '@popperjs/core';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
      
    <div className="App">
    
<ScrollAnimation animateIn="fadeIn" animateOut="fadeout" className="d-flex justify-content-between align-items-center mb-10" style={{height: '650px',"margin-left":'80px'}}>
      <div style={{width:"600px"}}>
      <h1 style={{"font-size":"60px"}}>
                  EduForAll is the leading learning platform in Morocco
            </h1>
      </div>
      <Lottie animationData={student1} style={{ width: 600, height: 600 }} />
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeout"  className="d-flex flex-row-reverse justify-content-between align-items-center mb-10" style={{height: '650px',"margin-right":'80px'}}>
      <div style={{width:"600px"}}>
      <h1>
      EduForAll offers innovative solutions for students lacking financial resources, ensuring access to quality education. Additionally, it provides educational establishments with tools to enhance teaching methods and foster inclusivity.            </h1>
      </div>
      <Lottie animationData={student2} style={{ width: 600, height: 600 }} />
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeout" className="d-flex justify-content-between align-items-center mb-10" style={{height: '650px',"margin-left":'80px'}}>
      <div style={{width:"600px"}}>
      <h1 >
      EduForAll aims to democratize education by partnering with renowned schools, offering free courses on a user-friendly platform. Through curated content and community engagement, it strives to empower learners globally.
            </h1>
      </div>
      <Lottie animationData={student3} style={{ width: 600, height: 600 }} />
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeout" className="d-flex flex-column justify-content-center align-items-center" style={{height: '650px'}}>
      <div style={{width:"600px",margin:"auto"}}>
      <Lottie  animationData={student4} style={{ width: 500, height: 300 ,margin:"auto"}} />

      <h1>
            Join Us Today for free
            </h1>

            <Link to={"/register"} className="justify-content-center">
            <Lottie animationData={startButton} style={{ width: 300, height: 100,margin:"auto" }} />
            </Link>
      </div>
 </ScrollAnimation>
        </div>
    );
}

export default LandingPage;
