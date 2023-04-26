import React, {useEffect} from 'react';
import '../../../assets/styles/Section1.css'
import AOS from 'aos'
function Section1(props) {

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])
    return (
        <div className={'section1'} >
            <div className='design'> 
                <h1 data-aos={'fade-up'}>Design and develop highly efficient<br/>solar drawings.</h1>
               <button data-aos={'fade-down'} >Schedule a call</button>
            </div>
              
        </div>
    );
}

export default Section1;