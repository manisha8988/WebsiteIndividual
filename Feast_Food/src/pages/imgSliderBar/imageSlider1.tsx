import React from 'react';
import "../../css/imageSlider1.css"


interface NewComponentProps {}

const ImageSlider: React.FC<NewComponentProps> = () => {
    return (
        <div>
            <div className="img-container">
                <span className="slider" id="slider1" />
                <span className="slider" id="slider2" />
                <span className="slider" id="slider3" />
                <span className="slider" id="slider4" />
                <span className="slider" id="slider5" />
                <span className="slider" id="slider6" />
                <span className="slider" id="slider7" />
                <div className="imgContainer">
                    <div className="slide_div" id="slide_1">
                        <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="img" id="img1" />
                        <a href="#slider1" className="slide-button" id="button1" />
                        {/*<button>f</button>*/}
                    </div>
                    <div className="slide_div" id="slide_2">
                        <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800"  alt="" className="img" id="img2" />
                        <a href="#slider2" className="slide-button" id="button2" />
                    </div>
                    <div className="slide_div" id="slide_3">
                        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"  alt="" className="img" id="img3" />
                        <a href="#slider3" className="slide-button" id="button3" />
                    </div>
                    <div className="slide_div" id="slide_4">
                        <img src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800"  alt="" className="img" id="img4" />
                        <a href="#slider4" className="slide-button" id="button4" />
                    </div>
                    <div className="slide_div" id="slide_5">
                        <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800"  alt="" className="img" id="img5" />
                        <a href="#slider5" className="slide-button" id="button5" />
                    </div>
                    <div className="slide_div" id="slide_6">
                        <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800"  alt="" className="img" id="img6" />
                        <a href="#slider6" className="slide-button" id="button6" />
                    </div>
                    <div className="slide_div" id="slide_7">
                        <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="img" id="img7" />
                        <a href="#slider7" className="slide-button" id="button7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
