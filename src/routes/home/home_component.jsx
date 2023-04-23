import Services from "../../assets/service.png"
import { Outlet } from "react-router";
import Review from "../../components/review/review_component";
import './home_styles.css'
import HomeWallpaper from "../../assets/photo1.png"
import Features from "../../components/features/features_component";
import Appointment from "../../components/appointment/appointment_component";
import Partners from "../../components/partners/partners_component";
import Stats from "../../components/stats/stats_component";
import Mission from "../../components/mission/mission_component";
import Blog from "../../components/blog/blog_component";

import AskQuestions from "../../components/question/questions_component";
const Home=()=>{
    console.log("render")
    return (
        <div>
        <Outlet/>
        <img className="home-wallpaper" src={HomeWallpaper} alt='home-wallpaper'></img>

        <Features></Features>
        <div className="banner-parent">
            <div className="banner">
                <p className="banner-text">Skip The Waiting Room Register <br></br> Online Before You Arrive.</p>
                <input placeholder="Find the Screening" className="banner-input"></input>
            </div>
        </div>    

        <Blog></Blog>


        <div className="services-parent">
        <img className="service-image" src={Services} alt='service'></img>
            <div className="service-description-container">
                <p className="service-description-container-heading1">WHY CHOOSE US</p>
                <p className="service-description-container-heading2">What Makes Prostate Ninja Health<br></br> Service Unique </p>
                <div className="service-description">
                    
                    <p  className="service-description-heading">01. Our Experience</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum similique non nihil blanditiis nam iusto, quasi, alias reiciendis esse nobis? Earum et unde aliquid iste laudantium odit repellendus expedita!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rem eaque molestiae uVelit, amet qui!
                    </p>
                    
                </div>
                <div className="service-description">
                    
                    <p className="service-description-heading">02. Caring Commitment</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.As it Was Gravuty is holdine me back  A eum similique non nihil blanditiis nam iusto, quasi, alias reiciendis esse nobis? Earum et unde aliquid iste laudantium odit repellendus expedita!
                       </p>
                    
                </div>
                <div className="service-description">
                    <p className="service-description-heading">03. Great Facilities</p>
                    <p>Lorem ipsum dolor sit amet consdaoawhdiuahwdajwbdubawuidswbwadkawgdyagwuidghiawbdabdihidha cumque aspernatur labore sequi necessitatibus magni eos alias ducimus error sit deleniti ad eum, saepe facilis quia commodi?
                    </p>
                </div>
            </div>
        </div>



        <Stats></Stats>
        <Review></Review>
        <Mission></Mission>
        <Appointment></Appointment>
        <Partners></Partners>

        <AskQuestions></AskQuestions>
        </div>
    
    );
}

export default Home;
