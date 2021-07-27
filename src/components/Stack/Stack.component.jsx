import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

//components
import content from '../../content';

const Stack = () => {


    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center  mt-10" id="Stack">

                <h1 className="text-4xl font-bold mb-12">Stack I use</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack.tech.map((tech, index) => {
                        return (
                            <span className=" w-40 h-40 bg-white shadow-2xl rounded-full m-2 flex items-center p-5 animate-bounce">
                                <LazyLoadImage src={tech.img} alt={tech.alt} />
                            </span>
                        );
                    })}
                </div>
                <p className="w-11/12 md:max-w-xl text-lg md:text-xl text-center mt-10">{content.stack.desc}</p>

            </div>
        </>
    )
};


export default Stack;
