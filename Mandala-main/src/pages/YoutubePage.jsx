import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Play } from "lucide-react";

const BlogLayout = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Testimonials",
      thumbnail: "/video/1.png",
      videoUrl: "https://youtu.be/znuCQ2jwfv0?si=vdIJgO30tdUxDKcJ",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    {
      id: 4,
      title: "Eastern Turkey",
      thumbnail: "/video/6.png",
      videoUrl: "https://www.youtube.com/embed/ocgKn98Xt-Q?autoplay=1",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    {
      id: 5,
      title: "Karahan Tepe - Eastern Turkey",
      thumbnail: "/book/user.jpg",
      videoUrl: "https://www.youtube.com/embed/frZv5p-YyJQ?autoplay=1",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    {
      id: 2,
      title: "The Mandala Within: A Guide for Intuitive and Logical Minds",
      thumbnail: "/video/2.png",
      videoUrl: "https://youtu.be/V8CNQ1_mxaI?si=V90IZSB1EnWtEAe2",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    {
      id: 3,
      title: "The Mandala Method",
      thumbnail: "/video/3.png",
      videoUrl: "https://www.youtube.com/embed/HsD86xZaOUw?autoplay=1",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    {
      id: 6,
      title: "The Mandala Within cover revealed!",
      thumbnail: "/video/1.png",
      videoUrl: "https://www.youtube.com/embed/L6hGkRiQf6w?autoplay=1",
      // description: "The Mandala Within invites you to explore the depths of your being through the art...",
    },
    
  ]);

  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlayVideo = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  // Helper to convert standard YouTube links to embed links if you don't want to change the data above manually
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;
    // Simple regex to grab the ID from various YouTube URL formats
    const videoId = url.split('v=')[1] || url.split('/').pop().split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/ic.png" />
        <title>Clay Boykin Author Videos | The Mandala Within Book Collection</title>
        <meta
          name="description"
          content="Explore videos from Clay Boykin, author of the 'Mandala Within book.' Discover conversations and reflections on compassion, purpose, and authentic leadership."
        />
      </Helmet>
      <div className="min-h-screen">
        {/* Header */}
        <div className="relative py-6 sm:py-8 md:py-12 lg:py-20 px-4 sm:px-6 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[600] font-[Playfair_Display] text-[52px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-center text-[#664000] px-2">
              Wisdom in{" "}
              <span className="relative inline-block">
                Motion
                <svg
                  className="absolute -top-0 sm:-top-2 -right-5 sm:-right-8 w-6 xs:w-8 sm:w-10 h-6 xs:h-8 sm:h-10"
                  viewBox="0 0 32 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0349 3.77048C13.8915 3.1211 13.4777 3.56448 8.60051 12.4642C4.02278 20.7732 3.8091 21.4114 5.39049 21.8956C8.24846 22.8071 9.10948 21.9111 14.3814 12.5015C18.6692 4.81656 18.8733 4.14491 17.0349 3.77048Z"
                    fill="#CC7A00"
                  />
                  <path
                    d="M30.8644 24.5809C28.2194 22.2739 28.2147 22.3833 18.4754 25.8974C11.2875 28.4994 9.66 29.6153 10.9089 30.9522C12.2959 32.3937 12.6482 32.3648 21.9358 29.4131C30.733 26.6381 32.4943 25.9888 30.8644 24.5809Z"
                    fill="#CC7A00"
                  />
                </svg>
              </span>
            </h2>

            <p className="font-[600] mt-3 sm:mt-4 font-[Lato] text-[16px] md:text-[20px] leading-[1.3] sm:leading-[1.2] tracking-[0] text-center text-[#66400080] max-w-4xl mx-auto px-3 sm:px-5">
              Conversations, reflections, and moments from my journey — shared to
              spark compassion, curiosity, and a deeper sense of purpose.
            </p>
          </div>
        </div>

        <div className="min-h-screen p-2 md:p-6 px-8 md:px-0 md:-mt-8">
          <div className="max-w-6xl mx-auto">
            {/* Video Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 mb-6 sm:mb-8">
              {videos.map((video) => (
                <div key={video.id} className="transition-shadow w-full">
                  <div className="relative group cursor-pointer w-full">
                    {playingVideo === video.id ? (
                      
                      // --- CHANGED SECTION START ---
                      <div className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-48 rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={getEmbedUrl(video.videoUrl)}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                      // --- CHANGED SECTION END ---

                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-48 object-cover rounded-lg"
                        />
                        <div
                          className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg cursor-pointer"
                          onClick={() => handlePlayVideo(video.id)}
                        >
                          <div className="bg-[#FFEDCC4D] bg-opacity-80 rounded-full p-2 xs:p-3 sm:p-3 group-hover:bg-opacity-100 transition-all">
                            <Play className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white fill-current" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-2 xs:mt-3 sm:mt-4 px-1 space-y-2">
                    <h3
                      className="text-[16px] leading-[1.2] sm:leading-[100%] font-[700] font-[Playfair_Display] text-[#A36600] text-left"
                      style={{ letterSpacing: "0%" }}
                    >
                      {video.title}
                    </h3>
                    {/* <div
                      className="mx-auto"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "16px",
                        letterSpacing: "0%",
                        color: "#66400080",
                      }}
                    >
                      <p>{video.description}</p>
                    </div> */}

                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                      <button className="py-3 w-full cursor-pointer bg-[#FFF6E5] hover:bg-[#CC7A003D] border border-[#4D300029] rounded-md font-[lato] font-extrabold text-sm">
                        Play Video →
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;