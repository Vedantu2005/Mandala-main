import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  image,
  date,
  title,
  author,
  category,
  isLarge = false,
  link,
}) => {
  return (
    <div
      className={`group cursor-pointer flex-none w-full sm:w-[320px] md:w-auto ${isLarge ? "md:col-span-2" : ""
        }`}
    >
      <div className="overflow-hidden">
        {/* Image */}
        {link ? (
          <Link to={link}>
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300"
          />
        )}

        {/* Content */}
        <div className="pt-3 text-left">
          {/* Date */}
          <p className="font-[700] font-[Lato] text-sm sm:text-base text-[#66400066] mb-2">
            {date}
          </p>

          {/* Title */}
          <Link to={link}>
            <h3 className="font-[700] font-[Playfair_Display] text-lg sm:text-2xl text-[#A36600] mb-3">
              {title}
            </h3>
          </Link>

          {/* Dashed divider */}
          <div
            className="w-full mb-3"
            style={{ borderTop: "2px dashed #6640008C" }}
          ></div>

          {/* Author & category */}
          <div className="flex flex-wrap items-center gap-1 font-[500] font-[Lato] text-sm sm:text-base text-[#6640008C]">
            <span>By {author}</span>
            <span className="mx-1">•</span>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
