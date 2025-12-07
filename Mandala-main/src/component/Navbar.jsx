import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const svgIcon = (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-2 -left-3"
  >
    <path
      d="M5.94258 0.86783C7.11378 0.625897 7.26796 0.791092 9.08516 4.10695C10.7908 7.20271 10.8704 7.44047 10.2812 7.62087C9.21636 7.96048 8.89555 7.62665 6.93128 4.12081C5.33366 1.25757 5.25761 1.00733 5.94258 0.86783Z"
      fill="#CC7A00"
    />
    <path
      d="M0.789893 8.62155C1.77538 7.76203 1.77713 7.80282 5.40588 9.1121C8.084 10.0816 8.69038 10.4973 8.22507 10.9954C7.70828 11.5325 7.57702 11.5217 4.1166 10.422C0.838846 9.38803 0.182622 9.14611 0.789893 8.62155Z"
      fill="#CC7A00"
    />
  </svg>
);

const links = [
  { name: "Home", path: "/" },
  { name: "About Mandala", path: "/#mandala-method" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "Guidance", path: "/#feeling-lost" },
  { name: "Articles", path: "/articles" },
  { name: "Youtube", path: "/youtube" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // 1. Add Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 20px, enable glass effect
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      // Add a delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        const sectionId = location.hash.substring(1);
        scrollToElement(sectionId);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);

    if (path.startsWith("/#")) {
      // Handle hash links (like /#mandala-method)
      const sectionId = path.substring(2); // Remove "/#" to get just "mandala-method"

      if (location.pathname !== "/") {
        // If we're not on home page, navigate to home with hash
        navigate(`/#${sectionId}`);
      } else {
        // If we're already on home page, scroll to the section
        scrollToElement(sectionId);
        // Update the URL to include the hash
        window.history.replaceState(null, null, `/#${sectionId}`);
      }
    } else {
      // Handle regular navigation
      navigate(path);
    }
  };

  const scrollToElement = (sectionId) => {
    // Try multiple possible selectors
    const selectors = [
      `#${sectionId}`,
      `[id="${sectionId}"]`,
      `[data-section="${sectionId}"]`,
      `.${sectionId}`,
      `[data-id="${sectionId}"]`,
    ];

    let element = null;
    for (const selector of selectors) {
      element = document.querySelector(selector);
      if (element) break;
    }

    if (element) {
      // Increased offset to -100 to account for the fixed header height so it doesn't cover content
      const yOffset = -100; 
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.log(
        `Element with ID "${sectionId}" not found. Available elements with IDs:`,
        [...document.querySelectorAll("[id]")].map((el) => el.id)
      );
    }
  };

  const isActiveLink = (linkPath) => {
    if (linkPath === "/") {
      return location.pathname === "/" && !location.hash;
    } else if (linkPath === "/#mandala-method") {
      return location.pathname === "/" && location.hash === "#mandala-method";
    } else {
      return location.pathname === linkPath;
    }
  };

  return (
    // 2. Updated Header Classes for Fixed Position & Glass Effect
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-[#FFF6E5]/85 backdrop-blur-md shadow-sm py-2" // Scrolled State: Glassy
          : "bg-transparent py-4" // Top State: Transparent & taller
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center">
            {/* Animated container size for logo */}
            <div className={`relative transition-all duration-300 ${isScrolled ? "w-24 h-24" : "w-24 h-24"}`}>
              <a href="/">
                <img
                  src="/logo.png"
                  alt="Mandala Logo"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-lato font-semibold text-sm leading-[100%] tracking-normal relative">
            {links.map((link) => (
              <div key={link.name} className="relative">
                {isActiveLink(link.path) && svgIcon}
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className={`transition-colors cursor-pointer ${
                    isActiveLink(link.path)
                      ? "text-[#996000]"
                      : "text-[#80500080] hover:text-[#996000] focus:text-[#996000]"
                  }`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </nav>

          {/* Book a Session Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/clayboykin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#664000] hover:bg-[#4d2f00] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
                Book a Session
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#FFF6E5] z-50 flex flex-col items-end justify-between py-4 px-4 md:hidden overflow-y-auto h-screen">
            {/* Top section: Logo and Close button */}
            <div className="flex justify-between items-center w-full max-w-md">
              <div className="w-24 h-24 relative">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Mandala Logo"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Middle section: Navigation Links */}
            <nav className="flex flex-col items-end space-y-6 font-[Playfair_Display] font-semibold text-[40px] leading-[100%] tracking-normal relative flex-grow justify-center px-4">
              {links.map((link) => (
                <div key={link.name} className="relative">
                  {isActiveLink(link.path) && (
                    <span className="absolute -top-0 -left-0">{svgIcon}</span>
                  )}
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`transition-colors cursor-pointer ${
                      isActiveLink(link.path)
                        ? "text-[#CC6600] border-b-2 border-dotted border-[#CC6600]"
                        : "text-[#4D3000] hover:text-[#CC6600] focus:text-[#CC6600]"
                    }`}
                  >
                    {link.name}
                  </button>
                </div>
              ))}
            </nav>

            {/* Bottom section: Contact Info and Social Media */}
            <div className="w-full">
              <div className="space-y-4 text-[#664000] text-left lg:text-left mt-4">
                <div className="flex items-start justify-center space-x-2">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block flex-shrink-0"
                  >
                    <path
                      d="M19 0.5H1C0.801088 0.5 0.610322 0.579018 0.46967 0.71967C0.329018 0.860322 0.25 1.05109 0.25 1.25V14C0.25 14.3978 0.408035 14.7794 0.68934 15.0607C0.970644 15.342 1.35218 15.5 1.75 15.5H18.25C18.6478 15.5 19.0294 15.342 19.3107 15.0607C19.592 14.7794 19.75 14.3978 19.75 14V1.25C19.75 1.05109 19.671 0.860322 19.5303 0.71967C19.3897 0.579018 19.1989 0.5 19 0.5ZM17.0716 2L10 8.48281L2.92844 2H17.0716ZM18.25 14H1.75V2.95531L9.49281 10.0531C9.63118 10.1801 9.81217 10.2506 10 10.2506C10.1878 10.2506 10.3688 10.1801 10.5072 10.0531L18.25 2.95531V14Z"
                      fill="#664000"
                    />
                  </svg>
                  <span className="block font-lato font-semibold text-[16px] sm:text-[19px] leading-none tracking-normal break-all">
                    clayboykin@gmail.com
                  </span>
                </div>
                <div className="flex items-start justify-center space-x-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block align-middle flex-shrink-0"
                  >
                    <path
                      d="M17.8472 12.8554L13.4306 10.8764L13.4184 10.8707C13.1892 10.7727 12.939 10.7333 12.6907 10.7562C12.4424 10.7792 12.2037 10.8636 11.9963 11.002C11.9718 11.0181 11.9484 11.0357 11.9259 11.0545L9.64407 12.9998C8.19845 12.2976 6.70595 10.8164 6.00376 9.3895L7.95188 7.07293C7.97063 7.0495 7.98845 7.02606 8.00532 7.00075C8.14072 6.79384 8.22287 6.55667 8.24446 6.31035C8.26605 6.06402 8.22641 5.81618 8.12907 5.58887V5.57762L6.14438 1.15356C6.0157 0.856621 5.79444 0.609262 5.51362 0.448409C5.2328 0.287556 4.9075 0.221836 4.58626 0.26106C3.31592 0.428223 2.14986 1.05209 1.30588 2.01615C0.461903 2.98021 -0.00228837 4.21852 8.4831e-06 5.49981C8.4831e-06 12.9436 6.05626 18.9998 13.5 18.9998C14.7813 19.0021 16.0196 18.5379 16.9837 17.6939C17.9477 16.85 18.5716 15.6839 18.7388 14.4136C18.7781 14.0924 18.7125 13.7672 18.5518 13.4864C18.3911 13.2056 18.144 12.9843 17.8472 12.8554ZM13.5 17.4998C10.3185 17.4963 7.26825 16.2309 5.01856 13.9813C2.76888 11.7316 1.50348 8.68134 1.50001 5.49981C1.49648 4.58433 1.82631 3.69887 2.42789 3.00879C3.02947 2.3187 3.86167 1.87118 4.76907 1.74981C4.7687 1.75355 4.7687 1.75732 4.76907 1.76106L6.73782 6.16731L4.80001 8.48668C4.78034 8.50932 4.76247 8.53345 4.74657 8.55887C4.60549 8.77536 4.52273 9.02462 4.5063 9.28249C4.48988 9.54037 4.54035 9.79811 4.65282 10.0307C5.5022 11.7679 7.25251 13.5051 9.00845 14.3536C9.24279 14.465 9.50203 14.5137 9.76083 14.495C10.0196 14.4762 10.2692 14.3907 10.485 14.2467C10.5091 14.2305 10.5322 14.2129 10.5544 14.1942L12.8334 12.2498L17.2397 14.2232C17.2397 14.2232 17.2472 14.2232 17.25 14.2232C17.1301 15.1319 16.6833 15.9658 15.9931 16.5689C15.3028 17.1719 14.4166 17.5029 13.5 17.4998Z"
                      fill="#664000"
                    />
                  </svg>
                  <span className="block font-lato font-semibold text-[16px] sm:text-[19px] leading-none tracking-normal">
                    512.971.2895
                  </span>
                </div>
              </div>
              <div className="max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 sm:space-x-4 mb-4 sm:mb-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/clay.boykin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors hover:opacity-75"
                  >
                    {/* Facebook SVG */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-8 sm:h-8"
                    >
                      <path
                        d="M28.9999 16C28.9959 19.1772 27.8301 22.2433 25.7223 24.6208C23.6145 26.9982 20.7101 28.5228 17.5562 28.9075C17.486 28.9154 17.4149 28.9084 17.3475 28.8869C17.2802 28.8653 17.2182 28.8297 17.1657 28.7825C17.1131 28.7353 17.0712 28.6774 17.0426 28.6128C17.014 28.5481 16.9995 28.4781 16.9999 28.4075V19H19.9999C20.137 19.0003 20.2727 18.9724 20.3986 18.918C20.5244 18.8637 20.6378 18.784 20.7315 18.6841C20.8253 18.5841 20.8975 18.4659 20.9437 18.3368C20.9899 18.2077 21.009 18.0705 20.9999 17.9337C20.9779 17.6766 20.8592 17.4373 20.6679 17.2641C20.4766 17.0909 20.2268 16.9965 19.9687 17H16.9999V14C16.9999 13.4695 17.2107 12.9608 17.5857 12.5858C17.9608 12.2107 18.4695 12 18.9999 12H20.9999C21.137 12.0003 21.2727 11.9724 21.3986 11.918C21.5244 11.8637 21.6378 11.784 21.7315 11.6841C21.8253 11.5841 21.8975 11.4659 21.9437 11.3368C21.9899 11.2077 22.009 11.0705 21.9999 10.9337C21.9778 10.6761 21.8588 10.4365 21.667 10.2632C21.4751 10.0899 21.2247 9.99586 20.9662 9.99997H18.9999C17.9391 9.99997 16.9217 10.4214 16.1715 11.1715C15.4214 11.9217 14.9999 12.9391 14.9999 14V17H11.9999C11.8629 16.9997 11.7272 17.0276 11.6013 17.0819C11.4755 17.1362 11.3621 17.2159 11.2683 17.3159C11.1746 17.4159 11.1023 17.5341 11.0562 17.6632C11.01 17.7922 10.9909 17.9294 10.9999 18.0662C11.0221 18.3238 11.141 18.5634 11.3329 18.7367C11.5248 18.91 11.7752 19.0041 12.0337 19H14.9999V28.41C15.0004 28.4805 14.9859 28.5504 14.9574 28.6149C14.9289 28.6795 14.887 28.7373 14.8346 28.7845C14.7822 28.8317 14.7204 28.8673 14.6532 28.8889C14.5861 28.9106 14.5151 28.9177 14.4449 28.91C11.2066 28.5156 8.2344 26.9198 6.11654 24.4386C3.99867 21.9573 2.88955 18.7713 3.00869 15.5112C3.25869 8.76122 8.72619 3.27372 15.4812 3.01122C17.2301 2.94348 18.9746 3.22916 20.6105 3.85117C22.2464 4.47319 23.7401 5.41877 25.0021 6.63134C26.2642 7.84391 27.2687 9.29857 27.9556 10.9083C28.6425 12.5181 28.9977 14.2498 28.9999 16Z"
                        fill="#664000"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/clayboykin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors hover:opacity-75"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[26px] sm:h-[26px]"
                    >
                      <path
                        d="M24 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V24C0 24.5304 0.210714 25.0391 0.585786 25.4142C0.960859 25.7893 1.46957 26 2 26H24C24.5304 26 25.0391 25.7893 25.4142 25.4142C25.7893 25.0391 26 24.5304 26 24V2C26 1.46957 25.7893 0.960859 25.4142 0.585786C25.0391 0.210714 24.5304 0 24 0ZM9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V11C7 10.7348 7.10536 10.4804 7.29289 10.2929C7.48043 10.1054 7.73478 10 8 10C8.26522 10 8.51957 10.1054 8.70711 10.2929C8.89464 10.4804 9 10.7348 9 11V19ZM8 9C7.70333 9 7.41332 8.91203 7.16665 8.7472C6.91997 8.58238 6.72771 8.34811 6.61418 8.07403C6.50065 7.79994 6.47094 7.49834 6.52882 7.20736C6.5867 6.91639 6.72956 6.64912 6.93934 6.43934C7.14912 6.22956 7.41639 6.0867 7.70736 6.02882C7.99834 5.97094 8.29994 6.00065 8.57403 6.11418C8.84811 6.22771 9.08238 6.41997 9.2472 6.66665C9.41203 6.91332 9.5 7.20333 9.5 7.5C9.5 7.89782 9.34196 8.27936 9.06066 8.56066C8.77936 8.84196 8.39782 9 8 9ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V14.5C18 13.837 17.7366 13.2011 17.2678 12.7322C16.7989 12.2634 16.163 12 15.5 12C14.837 12 14.2011 12.2634 13.7322 12.7322C13.2634 13.2011 13 13.837 13 14.5V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V11C11.0012 10.7551 11.0923 10.5191 11.256 10.3369C11.4197 10.1546 11.6446 10.0388 11.888 10.0114C12.1314 9.98392 12.3764 10.0468 12.5765 10.188C12.7767 10.3292 12.918 10.539 12.9738 10.7775C13.6502 10.3186 14.4389 10.0526 15.2552 10.0081C16.0714 9.96368 16.8844 10.1424 17.6067 10.5251C18.329 10.9078 18.9335 11.48 19.3551 12.1803C19.7768 12.8806 19.9997 13.6825 20 14.5V19Z"
                        fill="#664000"
                      />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@ClayBoykin-Author-ThoughtGuide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors hover:opacity-75"
                  >
                    <svg
                      width="26"
                      height="20"
                      viewBox="0 0 28 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[28px] sm:h-[22px]"
                    >
                      <path
                        d="M27.2913 3.69C27.1735 3.22919 26.9478 2.80298 26.6329 2.44654C26.318 2.09011 25.9228 1.81366 25.48 1.64C21.195 -0.0149953 14.375 4.75492e-06 14 4.75492e-06C13.625 4.75492e-06 6.805 -0.0149953 2.52 1.64C2.0772 1.81366 1.68204 2.09011 1.36712 2.44654C1.05219 2.80298 0.826532 3.22919 0.70875 3.69C0.385 4.9375 0 7.21751 0 11C0 14.7825 0.385 17.0625 0.70875 18.31C0.826356 18.7711 1.05194 19.1975 1.36687 19.5542C1.68181 19.9108 2.07706 20.1875 2.52 20.3613C6.625 21.945 13.05 22 13.9175 22H14.0825C14.95 22 21.3787 21.945 25.48 20.3613C25.9229 20.1875 26.3182 19.9108 26.6331 19.5542C26.9481 19.1975 27.1736 18.7711 27.2913 18.31C27.615 17.06 28 14.7825 28 11C28 7.21751 27.615 4.9375 27.2913 3.69ZM18.0737 11.815L13.0737 15.315C12.9242 15.4198 12.7488 15.4816 12.5666 15.4938C12.3844 15.5059 12.2023 15.468 12.0401 15.384C11.878 15.3 11.7419 15.1732 11.6467 15.0174C11.5515 14.8616 11.5007 14.6826 11.5 14.5V7.50001C11.5001 7.31707 11.5503 7.13766 11.6452 6.98129C11.7402 6.82492 11.8762 6.69759 12.0385 6.61316C12.2008 6.52873 12.3831 6.49044 12.5656 6.50244C12.7482 6.51445 12.9239 6.5763 13.0737 6.68126L18.0737 10.1813C18.2053 10.2735 18.3126 10.3961 18.3868 10.5386C18.4609 10.6811 18.4996 10.8394 18.4996 11C18.4996 11.1606 18.4609 11.3189 18.3868 11.4614C18.3126 11.604 18.2053 11.7265 18.0737 11.8188V11.815Z"
                        fill="#664000"
                      />
                    </svg>
                  </a>
                </div>

                {/* Copyright */}
                <div
                  className="text-center text-[rgba(102,64,0,0.5)] text-[14px] sm:text-[16px] font-semibold mb-4 sm:mb-6 px-4"
                  style={{ fontFamily: "Lato", lineHeight: "100%" }}
                >
                  © 2025 Clay Boykin. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;