import './stats_styles.css'
import { Fragment } from 'react';

const Stats=()=>{
    return(
    <Fragment>
        <div className="stats-parent">
            <p className="stats-heading1">Below is Our Mission</p>
            <p className="stats-heading2">"Our Mission is to Enhance Health and Well-Being By<br></br>Providing The Best HealthCare."</p>
            <p className="stats-heading3">DISCOVER THE KEY FACT AND FIGURES BEHIND PROSTATE NINJA</p>
            <div className="stats-elements-parent">
                <div className='stats-elements'>
                    <p className='stats-elements-description1'>4.837</p>
                    <p className='stats-elements-description2'>Patients Served <br></br> since 2008</p>
                </div>
                <div className='stats-elements'>
                    <p className='stats-elements-description1'>134</p>
                    <p className='stats-elements-description2'>Volunteer <br></br> Doctors Support</p>
                </div>
                <div className='stats-elements'>
                    <p className='stats-elements-description1'>$ 1.6 </p>
                    <p className='stats-elements-description2'>Million Given in<br></br> kind of Service</p>
                </div>
            </div>

            <div className="stats-elements-parent">
                <div className='stats-elements'>
                    <p className='stats-elements-description1'>450+</p>
                    <p className='stats-elements-description2'>Free Patient Visits <br></br> Each Month </p>
                </div>
                <div className='stats-elements'>
                    <p className='stats-elements-description1'>99%</p>
                    <p className='stats-elements-description2'>Our CLient<br></br> Satisfaction Rate </p>
                </div>
                <div className='stats-elements'>
                    <p className='stats-elements-description1'> </p>
                    <p className='stats-elements-description2'></p>
                </div>
            </div>
        </div>
    </Fragment>
    );
}
export default Stats;