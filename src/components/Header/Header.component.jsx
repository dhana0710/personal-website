import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical';
import { Link as ScrollLink } from 'react-scroll';

//components
import content from '../../content/index';

const Header = () => {
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        setAnimated(true);
    }, [])
    return (
        <>
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#151515', }}>
                <div className="w-10/12 mx-auto flex flex-col  md:flex-row-reverse items-center justify-between">
                    <div className="w-full  md:w-2/5 " >
                        <LazyLoadImage src={content.header.img} effect="blur" />
                    </div>
                    <div className="text-white font-sans text-center md:text-left">
                        <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'
                            } tranform transition duration-1000 ease-in-out text-xl md:text-3xl font-bold`}>
                            {content.header.text[0]}
                            <br />
                            {content.header.text[1]}
                        </h2>
                        <h1 className={`${animated ? '' : ' translate-y-10 opacity-0 '
                            } tranform transition duration-1000 ease-in-out font-bold text-xl text-gray-500 `}>
                            {content.header.text[2]}{' '}
                            <Typical
                                steps={content.header.typical}
                                loop={Infinity}
                                className="inline-block"
                            />
                        </h1>
                        <ScrollLink to="Stack" smooth={true}>
                            <button className="bg-indigo-500 px-10 py-3 text-md uppercase mt-10 rounded-lg animate-bounce">{content.header.btnText}</button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Header;
