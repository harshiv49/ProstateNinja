import { Fragment} from "react";
import Blog1 from '../../assets/blog 1.png'
import Blog2 from '../../assets/blog 2.png'
import './blog_styles.css'
const Blog=()=>{
    return(
    <Fragment>
        <div className="blog-parent">
            <p className="blog-heading1">LATEST NEWS</p>
            <p className="blog-heading2">OUR BLOGS </p>
            <div className="blog-images-container">
                <img src={Blog1} alt="blog1" className="blog-image1"></img>
                <div className="blog-image-overlay-element">
                    <p className="blog-image-overlay-heading1">MANISH GOYAL 6 AUG 2002</p>
                    <p className="blog-image-overlay-heading2">LOREM LOREM LOREM</p>
                    <div className="blog-image-overlay-description">
                    remloremloremloremlnnjloremloremloremloremloremloremloremloremloremloremloremlor
                    </div>
                    <p className="blog-image-overlay-read-more">READ MORE</p>
                </div>
               
                <img src={Blog2} alt="blog2" className="blog-image2"></img>
                <div className="blog-image-overlay-element2">
                        <p className="blog-image-overlay-heading1">MANISH GOYAL 6 AUG 2002</p>
                         <p className="blog-image-overlay-heading2">LOREM LOREM LOREM</p>
                        <div className="blog-image-overlay-description">
                        remloremloremloremlnnjloremloremloremloremloremloremloremloremloremloremloremlor
                        </div>
                        <p className="blog-image-overlay-read-more">READ MORE</p>
                    </div>
                </div>
        </div>
        
    </Fragment>
    );
}
export default Blog;