import './partners_styles.css'
import { Fragment } from 'react'
import OnDeck from '../../assets/ondeck 1.png';
import Foudnership from '../../assets/foudnership 1.png';
import Reflex from '../../assets/reflex.png';
import SOSV from '../../assets/sosv.png';
const Partners=()=>{
    return(
        <Fragment>
            <div className='partners-parent'>
                <p className='partners-heading1'>Backed By</p>
                <p className='partners-heading2'>The World's Best</p>
                <div className='partners-images'>
                    <img src={OnDeck} alt='partners' className='partners-images-1'></img>
                    <img src={Foudnership} alt='partners' className='partners-images-1'></img>
                    <img src={Reflex} alt='partners' className='partners-images-2'></img>
                    <img src={SOSV} alt='partners' className='partners-images-3'></img>
                </div>
            </div> 
        </Fragment>
        );
}
export default Partners;