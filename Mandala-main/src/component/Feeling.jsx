import React from 'react';

const FeelingLostSection = ({id,... props}) => {
    return (
        <div className="py-16 px-4 ">
            <div id={id} className="max-w-4xl mx-auto text-center">

                {/* Main Heading */}
                <div className="flex items-center justify-center gap-3 mb-3">
                    {/* Inline SVG */}
                    <svg
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative -top-14 left-6 sm:-top-6 sm:left-2"
                    >
                        <path
                            d="M7.06628 1.52582C9.36228 0.321818 9.78228 0.573931 15.5503 6.39793C20.9543 11.8299 21.2622 12.2778 20.1422 13.0058C18.1262 14.3498 17.2583 13.8458 11.0703 7.71385C6.03028 2.70185 5.72228 2.22582 7.06628 1.52582Z"
                            fill="#CC7A00"
                        />
                        <path
                            d="M0.962409 20.7619C2.50241 18.3819 2.53041 18.4659 10.8744 19.0259C17.0344 19.4459 18.5464 19.9499 17.8744 21.2659C17.1184 22.6939 16.8384 22.7499 8.97044 22.5259C1.52241 22.3299 0.0104095 22.2179 0.962409 20.7619Z"
                            fill="#CC7A00"
                        />
                    </svg>


                    {/* h2 Heading */}
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            fontStyle: 'normal',
                            fontSize: '52px',
                            lineHeight: '64px',
                            letterSpacing: '-0.03em',
                            color: '#664000',
                        }}
                    >
                        Feeling Lost in the Noise?
                    </h2>
                </div>



                {/* Subheading with emphasis */}
                <div>
                    <p
                        className="text-center"
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: 800,
                            fontStyle: 'italic',
                            fontSize: '22px',
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            color: '#664000',
                        }}
                    >
                        In{' '}
                        <span
                            style={{
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted',
                                textDecorationThickness: '10%',
                                textDecorationColor: '#664000',
                                textDecorationOffset: '13%',
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 800,
                                fontStyle: 'italic',
                                fontSize: '22px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                            }}
                        >
                            Transition?
                        </span>{' '}
                        <span
                            style={{
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted',
                                textDecorationThickness: '10%',
                                textDecorationColor: '#664000',
                                textDecorationOffset: '13%',
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 800,
                                fontStyle: 'italic',
                                fontSize: '22px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                            }}
                        >
                            Stuck?
                        </span>{' '}
                        <span
                            style={{
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted',
                                textDecorationThickness: '10%',
                                textDecorationColor: '#664000',
                                textDecorationOffset: '13%',
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 800,
                                fontStyle: 'italic',
                                fontSize: '22px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                            }}
                        >
                            Burned Out?
                        </span>
                    </p>

                    <p
                        className="text-center"
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '22px',
                            lineHeight: '30px',
                            letterSpacing: '0%',
                            color: '#66400080',
                        }}
                    >
                        You're not alone—and there is another way forward.
                    </p>

                </div>

                {/* CTA Button */}
                <div className="mt-6 mb-3">
                    <a href="https://calendly.com/clayboykin" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#CC7A00] hover:bg-[#664000] cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform  shadow-lg hover:shadow-xl">
                            Book Complimentary 1:1 Session
                        </button>
                    </a>
                </div>

                {/* Bottom text */}
                <div
                    className="mx-auto text-center leading-[24px] max-w-2xl"
                    style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '16px',
                        letterSpacing: '0%',
                        color: '#66400080', // This is equivalent to Tailwind's amber-600
                    }}
                >
                    <p>
                        A simple, confidential space to explore whether this journey is right for you.
                        <br className='hidden lg:block' />
                        Discover clarity, purpose, and alignment—at your pace.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FeelingLostSection;