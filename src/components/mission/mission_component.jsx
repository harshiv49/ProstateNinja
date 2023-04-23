import { Fragment } from 'react';
import './mission_styles.css'
const Mission=()=>{
    return(
        <Fragment>
            <div className='mission-parent'>
                <p className='mission-heading1'>Below Is Our Mission</p>
                <p className='mission-heading2'>Why Choose ProstateNinja Medical Care</p>
                <p className='mission-heading3'>There are many reasons to choose CiLab as your healthcare provider of choice<br></br>
                    Choose from one of the option below to find out more 
                </p>
                <div className='mission-elements-parent'> 
                    <div className='mission-elements'>
                        <p className='mission-elements-description1'></p>
                        <p className='mission-elements-description2'>Integrity and Ethics</p>
                    </div>
                    <div className='mission-elements'>
                        <p className='mission-elements-description1'></p>
                        <p className='mission-elements-description2'>Commitment</p>
                    </div>
                    <div className='mission-elements'>
                        <p className='mission-elements-description1'></p>
                        <p className='mission-elements-description2'>Excellence and<br></br>Awards</p>
                    </div>
                    <div className='mission-elements'>
                        <p className='mission-elements-description1'></p>
                        <p className='mission-elements-description2'>Fiscal Soundness</p>
                    </div>
                    <div className='mission-elements'>
                        <p className='mission-elements-description1'></p>
                        <p className='mission-elements-description2'>Cultural Competence </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Mission;