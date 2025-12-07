import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "../component/BlogCard";
import { Helmet } from 'react-helmet-async';

const BlogLayout = () => {
  const blogPosts = [
    {
      image: "/book/1.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "Finding the Still Point in a Noisy World",
      author: "Clay Boykin",
      category: "Quiet_Mind",
      isLarge: false,
      link: "/blog/blog1"
    },
    {
      image: "/book/4.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "The Mandala Within cover revealed!",
      author: "Clay Boykin",
      category: "Soulful_Leadership",
      isLarge: false,
      link: "/blog/blog2"
    },
    {
      image: "/book/5.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "The Mandala Within: Why Author Clay Boykin Says Inner Peace Begins with Awareness",
      author: "Clay Boykin",
      category: "Soulful_Leadership",
      isLarge: false,
      link: "/blog/blog3"
    },
    {
      image: "/book/2.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "The Mandala Within and the MandalaMethod™ for Modern Seekers",
      author: "Clay Boykin",
      category: "The_Mandala_Way",
      isLarge: false,
      link: "/blog/blog4"
    },
    {
      image: "/book/6.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "Archetypes and the Inner Mandala: Clay Boykin’s Psychological Insights",
      author: "Clay Boykin",
      category: "The_MandalaMethod™",
      isLarge: false,
      link: "/blog/blog5"
    },
    {
      image: "/book/1.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "Finding Purpose Through The Mandala Within: An Eastern Path of Awakening",
      author: "Clay Boykin",
      category: "The_Mandala_Way",
      isLarge: false,
      link: "/blog/blog6"
    },
    {
      image: "/book/4.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "Beyond the Four Directions: The Fifth Path of Fulfilment",
      author: "Clay Boykin",
      category: "The_Mandala_Way",
      isLarge: false,
      link: "/blog/blog7"
    },
  ];

  const postsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const [activePage, setActivePage] = useState(1);

  // Determine which posts to show for the current page
  const indexOfLastPost = activePage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Generate pagination buttons (1 ... totalPages)
  const paginationButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/ic.png" />

        <title>The Mandala Within Blog | Articles by Author Clay Boykin</title>
        <meta
          name="description"
          content="Read articles from Clay Boykin, author of The Mandala Within book. Explore insights on soulful leadership, inner peace, and finding purpose beyond success."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <div className="relative py-12 md:py-20 px-4 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[600] font-[Playfair_Display] text-[52px] md:text-[72px] leading-[64px] tracking-[-0.03em] text-center text-[#4D3000]">
              Insights <span className="text-[#6640004D]">from<br className="block md:hidden" /> </span>the Still{" "}
              <span className="relative inline-block">
                Point.
                <svg
                  className="absolute top-0 md:-top-8 -right-8 w-8 h-8 sm:w-10 sm:h-10"
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
            <p className="font-[600] mt-4 font-[Lato] text-base md:text-[22px] leading-[100%] tracking-[0] text-center text-[#66400080] max-w-4xl mx-auto px-5">
              Words born of silence. Reflections from Clay's journey into the heart of compassion,
              soulful leadership, and the search for purpose.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto -mt-8 px-4 py-8 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto md:max-w-none">
            {currentPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                date={post.date}
                title={post.title}
                author={post.author}
                category={post.category}
                isLarge={post.isLarge}
                link={post.link}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-12 md:mt-16 space-x-2">
            {/* Left arrow */}
            <button
              className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
              style={{ backgroundColor: "#A3660014", color: "#0000003D" }}
              onClick={() => {
                setActivePage(prev => Math.max(prev - 1, 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#A3660073";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#A3660014";
                e.currentTarget.style.color = "#0000003D";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page buttons */}
            <div className="flex items-center justify-center space-x-2 mx-4 bg-[#A3660014] rounded-full px-3 py-1">
              {paginationButtons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActivePage(btn);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-8 h-8 font-semibold text-[20px] leading-[100%] text-center  cursor-pointer transition-colors duration-200 ${activePage === btn ? "text-black" : "text-[#0000003D]"
                    }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Right arrow */}
            <button
              className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
              style={{ backgroundColor: "#A3660014", color: "#0000003D" }}
              onClick={() => {
                setActivePage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#A3660073";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#A3660014";
                e.currentTarget.style.color = "#0000003D";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

    </>

  );
};

export default BlogLayout;