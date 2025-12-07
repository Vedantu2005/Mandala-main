import React, { useState, useEffect, useRef } from "react";

const TestimonialsSection = ({ id, ...props }) => {
  const testimonials = [
    {
      text: "Clay has been a coach and mentor to me for close to a year now. His insight and thought process is always impactful.",
      author: "B.K.",
    },
    {
      text: "Clay Boykin coaches from a place of deep wisdom and lived experience. His presence invites reflection, healing, and genuine connection at a time when the world needs it most. Working with Clay has been both gentle and powerful — a true gift. I’ll be recommending his coaching to clients and friends alike.",
      author: "R.B.",
    },
    {
      text:"Clay’s deep listening helped transform my confusion into clarity and awakened my inner purpose.",
      author:"K.W.",
    },
    {
      text: "While many search outside themselves for tools and answers, Clay Boykin guides us inward — to the center of our soul’s sacred work. His coaching helps us uncover our own inner map and awaken the wisdom already within. Thank you, Clay, for handing us the tools and showing us where to dig.",
      author: "S.H.",
    },
    {
      text: "Clay has a unique ability to turn inner complexity into clarity. His coaching helped me see the deeper patterns driving my decisions and lead from a more intentional place.",
      author: "H.T.",
    },
    {
      text: "As someone who has spent a lifetime exploring the world’s wisdom traditions, I was deeply moved by how Clay’s coaching weaves them into practical, personal insight. He helped me see my own path with new clarity and joy.",
      author: "C.R.",
    },
    {
      text: "The Mandala Within is a remarkable guide that turns inner noise into deeper wisdom, revealing the hidden patterns that lead to a more authentic and meaningful life.",
      author: "C.R.",
    },
    {
      text: "The Mandala Within translates what is usually hidden into usable wisdom, revealing the deeper pattern that shapes our becoming and offering a rare bridge between ancient insight and modern life.",
      author: "H.T.",
    },
    {
      text: "Guided by Clay Boykin’s rare ability to make the unseen usable, The Mandala Within reveals the deeper pattern shaping our lives and offers a bridge between ancient wisdom and modern experience.",
      author: "C.R.",
    },
    {
      text: "The Mandala Within returns the tools of inner mapping to the reader, revealing that our truest guidance comes not from linear paths but from the living wisdom of our own unfolding mandala.",
      author: "S.H.",
    },
    {
      text: "The Mandala Within offers a clear inner-life framework that helps people move from confusion to clarity by revealing the patterns already emerging within them—a deeper kind of map for those ready to shift from doing to becoming.",
      author: "R.B.",
    },
    {
      text: "The Mandala Within offers a clear and transformative framework for uncovering the truth buried beneath years of conditioning, helping readers realign with their deeper purpose and live from an authentic inner center.",
      author: "G.L.H.",
    },
    {
      text: "The Mandala Within is a transformational journey that leaves you changed in unexpected ways and energized for what comes next.",
      author: "J.C.",
    },
    {
      text: "The Mandala Within awakens the inner compass we’ve always carried, empowering each of us to live with purpose, clarity, and a mandala of wisdom unfolding from within.",
      author: "C.F.",
    },
  ];

  // Duplicate testimonials multiple times to create a long, seamless track
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const scrollSpeed = 0.5; // Adjust scroll speed as needed

    const animateScroll = () => {
      // If the scroll position has passed the width of one full set of original testimonials, reset to the beginning.
      // We have 5 sets of duplicated testimonials. So, scrollWidth / 5 is the width of one original set.
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 5) {
        scrollContainer.scrollLeft = 0; // Reset to the beginning
      }
      scrollContainer.scrollLeft += scrollSpeed;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const TestimonialCard = ({ testimonial }) => (
    <div
      className="relative flex-shrink-0 mx-2"
      style={{
        width: "334.5px",
        height: "275.25px",
      }}
    >
      {/* Custom SVG Card */}
      <div className="relative">
        <svg
          width="334.5"
          height="275.25"
          viewBox="0 0 335 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <foreignObject x="-50" y="-50.0001" width="434.5" height="375.25">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(25px)",
                clipPath: "url(#bgblur_0_188_44_clip_path)",
                height: "100%",
                width: "100%",
              }}
            />
          </foreignObject>

          <g data-figma-bg-blur-radius="50">
            <path
              d="M0 19.9999C0 8.95418 8.9543 -0.00012207 20 -0.00012207H314.5C325.546 -0.00012207 334.5 8.95418 334.5 19.9999V255.25C334.5 266.296 325.546 275.25 314.5 275.25H187.25C176.204 275.25 167.25 266.296 167.25 255.25V218C167.25 206.954 158.296 198 147.25 198H20C8.9543 198 0 189.046 0 178V19.9999Z"
              fill="#FCEDCF"
              fillOpacity="0.75"
            />
            <path
              d="M20 0.499878H314.5C325.27 0.499878 334 9.23033 334 19.9999V255.25C334 266.019 325.27 274.75 314.5 274.75H187.25C176.48 274.75 167.75 266.019 167.75 255.25V218C167.75 206.678 158.572 197.5 147.25 197.5H20C9.23045 197.5 0.5 188.769 0.5 178V19.9999C0.5 9.23033 9.23045 0.499878 20 0.499878Z"
              stroke="#BF9340"
              strokeOpacity="0.25"
            />
          </g>

          <defs>
            <clipPath
              id="bgblur_0_188_44_clip_path"
              transform="translate(50 50.0001)"
            >
              <path d="M0 19.9999C0 8.95418 8.9543 -0.00012207 20 -0.00012207H314.5C325.546 -0.00012207 334.5 8.95418 334.5 19.9999V255.25C334.5 266.296 325.546 275.25 314.5 275.25H187.25C176.204 275.25 167.25 266.296 167.25 255.25V218C167.25 206.954 158.296 198 147.25 198H20C8.9543 198 0 189.046 0 178V19.9999Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Single Testimonial Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center overflow-hidden">
          {" "}
          {/* Added overflow-hidden */}
          {/* Large Quote Icon */}
          <div className="mb-4 w-[37px] h-[24px]">
            <svg
              width="37"
              height="24"
              viewBox="0 0 37 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3772 13.7411L29.4136 13.717C40.7664 13.5242 36.9821 -3.15607 24.8339 1.25502C15.8674 4.50911 17.5306 19.4779 27.1238 21.9365C31.366 23.0212 36.0903 22.2499 32.5712 21.0447C29.5582 20.0323 27.1238 17.1158 27.2925 14.7294C27.3407 14.1992 27.7987 13.7411 28.3772 13.7411Z"
                fill="#CC7A00"
              />
              <path
                d="M6.22451 0.653068C-4.6944 4.84722 -0.259362 23.1666 11.8647 23.962C15.0223 24.1789 15.8418 23.4317 13.4556 22.5399C11.1416 21.6721 8.2251 17.5744 7.91175 14.8024C7.83944 14.248 8.27326 13.7899 8.82764 13.7899C12.0093 13.7899 13.335 13.79 15.191 11.235C19.7466 4.91963 13.6966 -2.21535 6.22451 0.653068Z"
                fill="#CC7A00"
              />
            </svg>
          </div>
          {/* Testimonial Text */}
          <p
            className="mb-6 flex-grow flex items-center"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "14px" /* Slightly reduced font size */,
              lineHeight:
                "1.2" /* Adjusted line height for better readability and wrapping */,
              letterSpacing: "0%",
              color: "#664000",
              whiteSpace: "normal" /* Allow text to wrap */,
            }}
          >
            {testimonial.text}
          </p>
          {/* Author */}
          <div className="flex items-center mt-auto ">
            <span className="inline-block w-[44.53px] h-[44.53px] pt-4">
              {/* Smiley SVG */}
              <svg
                width="44.53"
                height="44.53"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.0713 8.24196C27.2823 3.68586 18.9304 4.21969 13.3541 7.62408C3.74374 13.4917 2.49706 28.139 9.36157 34.7331C16.9307 42.0036 27.2617 40.2514 32.4101 35.5998C39.0828 29.571 41.9351 19.6447 36.1912 12.2509"
                  fill="#FFF1D6"
                />
                <path
                  d="M33.0713 8.24196C27.2823 3.68586 18.9304 4.21969 13.3541 7.62408C3.74374 13.4917 2.49706 28.139 9.36157 34.7331C16.9307 42.0036 27.2617 40.2514 32.4101 35.5998C39.0828 29.571 41.9351 19.6447 36.1912 12.2509"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7399 17.7494C17.5898 18.6743 17.5278 19.6266 17.5039 20.5636"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.0199 17.4896C26.0265 18.6067 26.0959 19.7727 25.9844 20.8885"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3438 25.5903C13.6209 26.6301 14.2402 27.5401 14.9978 28.2886C18.7132 31.9597 25.6512 30.8126 28.2994 26.3817"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className="pt-6 "
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontStyle: "normal",
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#664000",
                display: "block",
              }}
            >
              → {testimonial.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id={id} className="py-12 px-4 overflow-hidden">
      {/* Removed CSS animation as JavaScript will handle scrolling */}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h2
            className="leading-[64px] mb-6 flex gap-2 flex-wrap"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "52px",
              letterSpacing: "-0.03em",
              color: "#664000",
            }}
          >
            What People
            <span className="inline-block w-[45px] h-[45px] pt-4">
              {/* Smiley SVG */}
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.0713 8.24196C27.2823 3.68586 18.9304 4.21969 13.3541 7.62408C3.74374 13.4917 2.49706 28.139 9.36157 34.7331C16.9307 42.0036 27.2617 40.2514 32.4101 35.5998C39.0828 29.571 41.9351 19.6447 36.1912 12.2509"
                  fill="#FFF1D6"
                />
                <path
                  d="M33.0713 8.24196C27.2823 3.68586 18.9304 4.21969 13.3541 7.62408C3.74374 13.4917 2.49706 28.139 9.36157 34.7331C16.9307 42.0036 27.2617 40.2514 32.4101 35.5998C39.0828 29.571 41.9351 19.6447 36.1912 12.2509"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7399 17.7494C17.5898 18.6743 17.5278 19.6266 17.5039 20.5636"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.0199 17.4896C26.0265 18.6067 26.0959 19.7727 25.9844 20.8885"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3438 25.5903C13.6209 26.6301 14.2402 27.5401 14.9978 28.2886C18.7132 31.9597 25.6512 30.8126 28.2994 26.3817"
                  stroke="#CC7A00"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Are Saying
            <span className="inline-block w-[35px] h-[52px] pt-4">
              {/* Exclamation SVG */}
              <svg
                width="35"
                height="52"
                viewBox="0 0 35 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.79381 0.628807C3.0557 1.39973 3.10993 1.32962 2.81119 3.01162C2.29519 5.81496 3.05564 30.3442 3.78891 35.25C3.97902 36.4414 5.11963 36.7919 7.69964 36.4765C8.97607 36.3363 10.5513 36.3363 11.2031 36.4765C12.8869 36.8619 13.3485 36.6167 13.5386 35.0748C13.783 32.9723 17.0148 15.066 17.6123 8.16278C17.721 6.8312 17.3136 5.49958 16.526 4.62353C16.526 4.62353 10.7414 -2.03437 4.79381 0.628807ZM12.8326 4.41329C13.3486 4.5885 13.4572 4.83382 13.3214 5.53465C13.2399 6.02524 9.79081 29.5382 9.46491 31.9561C9.30196 33.2877 9.27486 33.2877 8.16138 33.1826L7.02069 33.0775C6.64048 22.3897 6.45048 14.7856 5.63574 6.37562C5.5271 5.32437 6.09734 4.37826 6.91208 4.20305C8.86746 3.81759 10.9859 3.7475 12.8326 4.41329ZM22.6637 11.2464C21.9305 11.737 21.8219 12.1225 20.8442 17.8343C18.6987 30.4143 18.2913 34.0936 18.8888 35.0748C19.7307 36.4414 24.1846 38.2286 26.3573 38.0884C27.3078 38.0183 28.1768 37.2825 28.6113 36.1962C31.5716 28.522 33.364 24.0016 34.8577 18.8154C35.1836 17.6941 34.9392 16.4326 34.2331 15.6617C31.1914 12.1925 24.8092 9.77468 22.6637 11.2464ZM28.3941 14.8207C31.1914 16.1873 31.6259 16.5027 31.3543 16.9232C31.1642 17.2386 25.2709 34.5141 24.9722 34.8996C24.6463 35.3552 22.4194 34.4791 22.6095 33.9885C22.9354 33.1475 24.1303 26.5246 25.108 19.8317C25.6511 16.0822 26.0856 13.9447 26.3029 13.9447C26.5202 13.9797 27.4436 14.3652 28.3941 14.8207ZM4.06049 39.7354C-3.21786 43.0644 -0.0675309 52 8.40578 52C13.4572 52 16.2545 49.7223 16.0916 47.0591C15.9015 44.1507 8.51441 37.703 4.06049 39.7354ZM20.5455 42.2584C15.2225 45.6574 17.9654 51.6496 24.8364 51.6496C29.1274 51.6496 32.4678 48.1103 30.9198 45.2369C29.5619 42.784 22.7996 40.8217 20.5455 42.2584ZM10.9858 44.0806C13.2399 46.148 12.8598 47.4095 9.57365 48.7061C6.07026 50.0727 3.27293 48.9163 3.27293 46.6736C3.24578 45.6224 6.39608 39.8756 10.9858 44.0806ZM25.7597 44.5361C29.073 46.989 26.9818 50.5983 23.1797 48.9864C21.2787 48.1805 20.8442 46.5335 22.012 44.6062C22.881 43.0644 23.75 43.0643 25.7597 44.5361Z"
                  fill="#CC7A00"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Testimonials Row */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex"
            style={{ whiteSpace: "nowrap", overflowX: "hidden" }} // Ensure no wrapping and hide scrollbar
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
