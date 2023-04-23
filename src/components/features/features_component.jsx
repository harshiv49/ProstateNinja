import { Fragment } from "react"; 
import './features_styles.css'
import PhysicalTherapy from '../../assets/physical-therapy 2.png'
import Pediatrics from '../../assets/pediatrics 1.png'
import Pharmacy from '../../assets/pharmacy 1.png'
import Vaccine from '../../assets/vaccine 1.png'
import Womb from '../../assets/womb 1.png'
import DentalServices from '../../assets/dental 1.png'
const Features=()=>{
    return(
        <Fragment>
        <div className="features-parent">
            <p className="features-heading1">Save Time Feel Better</p>
            <p className="features-heading2">Skip The Waiting Room! Register Online Before<br></br>You Arrive.</p>
            <p className="features-heading3">Save Time and Energy by Easily Booking an Online Appointment Within Minutes</p>
            <div className="features-illustrations">
                <div className="features-illustrations-elements">
                    <img src={Pediatrics} alt="childcare"  className="features-illustrations-images"></img>
                    <p>Child Care <br></br> Assistance</p>
                </div>
                
                <div className="features-illustrations-elements">
                    <img src={DentalServices} alt='dental-services' className="features-illustrations-images"></img>
                    <p>Dental<br></br> Service</p>
                </div>

                <div className="features-illustrations-elements">
                    <img src={Vaccine} alt='vaccine' className="features-illustrations-images"></img>
                    <p>Flu/vaccine<br></br> Slot</p>
                </div>
            </div>
   
            <br></br>
            <div className="features-illustrations">
                <div className="features-illustrations-elements"> 
                    <img src={Pharmacy} alt='pharmacy' className="features-illustrations-images"></img>
                    <p >Pharmacy</p>
                </div>
                
                <div className="features-illustrations-elements">
                    <img src={PhysicalTherapy} alt='physical-therapy'className="features-illustrations-images"></img>
                    <p>Physical<br></br> Theapy</p>
                </div>
                
                <div className="features-illustrations-elements">
                    <img src={Womb} alt='reproductive-health' className="features-illustrations-images"></img>
                    <p>Reproductive <br></br> Health</p>
                </div>
            </div>
        </div>
        </Fragment>
    );
}
export default Features;