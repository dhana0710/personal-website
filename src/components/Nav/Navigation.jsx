import React from 'react';
import content from '../../content/index';


const Navigation = () => {
    return (
        <>
            <div style={{
                background: '#151515',
                borderBottom: "1px solid white",
            }}>
                <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-sans">
                    <h1 className="text-3xl font-bold text-white">{content.nav.logo}{' '}<span className="w-2 h-2 bg-red-400 rounded-full inline-block"></span></h1>

                    <div>
                        {content.nav.links.map(({ text, to }, index) => {
                            return <span key={index} className="text-lg mr-4 md:mr-8 font-sans">{text}</span>
                        })}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navigation;