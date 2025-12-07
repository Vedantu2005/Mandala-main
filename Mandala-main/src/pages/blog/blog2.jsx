import React from "react";
import BlogCard from "../../component/BlogCard";

const Article = () => {
  const blogPosts = [
    {
      image: "/book/1.png",
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
      image: "/book/1.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "The Mandala Within cover revealed!",
      author: "Clay Boykin",
      category: "Soulful_Leadership",
      isLarge: false,
      link: "/blog/blog2"
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 text-sm ml-0 md:ml-68 mt-24">
        <div className="flex items-center space-x-2">
          <a href="/articles">
            <span className="text-[#6640004D] font-lato font-semibold text-xs md:text-[12px] leading-[100%] tracking-[0%]">
              Articles
            </span>
          </a>
          <span className="text-amber-600 inline-block">
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none">
              <path
                d="M4.51552 5.26528L0.765521 9.01528C0.73068 9.05012 0.689317 9.07776 0.643795 9.09661C0.598272 9.11547 0.549482 9.12517 0.500208 9.12517C0.450935 9.12517 0.402145 9.11547 0.356622 9.09661C0.3111 9.07776 0.269737 9.05012 0.234896 9.01528C0.200054 8.98044 0.172417 8.93907 0.153561 8.89355C0.134705 8.84803 0.125 8.79924 0.125 8.74996C0.125 8.70069 0.134705 8.6519 0.153561 8.60638C0.172417 8.56086 0.200054 8.51949 0.234896 8.48465L3.72005 4.99996L0.234896 1.51528C0.164531 1.44491 0.125 1.34948 0.125 1.24996C0.125 1.15045 0.164531 1.05502 0.234896 0.984652C0.305261 0.914287 0.400697 0.874756 0.500208 0.874756C0.59972 0.874756 0.695156 0.914287 0.765521 0.984652L4.51552 4.73465C4.55039 4.76948 4.57805 4.81084 4.59692 4.85636C4.61579 4.90189 4.6255 4.95068 4.6255 4.99996C4.6255 5.04925 4.61579 5.09804 4.59692 5.14357C4.57805 5.18909 4.55039 5.23045 4.51552 5.26528Z"
                fill="#664000"
              />
            </svg>
          </span>
          <span className="text-[#664000] font-lato font-semibold text-xs md:text-[12px] leading-[100%] tracking-[0%]">
            The Mandala Within cover revealed!
          </span>
        </div>
      </nav>

      {/* Main Article Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Article Header */}
        <header className="text-center mb-12">
          <div className="relative flex justify-center mb-6">
            {/* SVG positioned relative to the text */}
            <svg
              className="absolute -top-5 left-0 transform -translate-x-1/2 md:left-18 md:-translate-x-0 md:-top-5 w-[27px] h-[29px]"
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
            >
              {/* ...SVG paths... */}
              <path
                d="M14.374 0.201596C17.5174 -0.44778 17.9312 -0.00440025 22.8084 8.89536C27.3861 17.2044 27.5998 17.8425 26.0184 18.3267C23.1604 19.2383 22.2994 18.3423 17.0275 8.9326C12.7397 1.24768 12.5356 0.576029 14.374 0.201596Z"
                fill="#CC7A00"
              />
              <path
                d="M0.544789 21.0121C3.18981 18.7051 3.19448 18.8145 12.9338 22.3286C20.1217 24.9306 21.7492 26.0465 20.5003 27.3834C19.1132 28.8249 18.7609 28.796 9.47342 25.8443C0.67616 23.0693 -1.0851 22.42 0.544789 21.0121Z"
                fill="#CC7A00"
              />
            </svg>

            <div>
              <h2 className="relative mt-4 md:mt-0 text-[52px] md:text-[72px] font-[Playfair_Display] font-semibold text-[#4D3000] leading-tight md:leading-[80px] tracking-[-0.03em] text-left ml-12">
                The Mandala Within cover<br className="hidden md:block" /> revealed!  
              </h2>
              <svg
                className="absolute -top-10 right-0"
                width="151"
                height="100"
                viewBox="0 0 151 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.6415 42.7452L28.323 42.8458C-18.9799 43.6493 -3.21223 113.15 47.4048 94.7707C84.7651 81.2121 77.8353 18.8421 37.8639 8.59773C20.1881 4.07817 0.503716 7.29208 15.1666 12.3138C27.7204 16.5321 37.8639 28.6843 37.1609 38.6273C36.96 40.8369 35.0519 42.7452 32.6415 42.7452Z"
                  fill="#CC6600"
                  fill-opacity="0.1"
                  style={{
                    fill: "color(display-p3 0.8000 0.4000 0.0000)",
                    fillOpacity: "0.1",
                  }}
                />
                <path
                  d="M124.944 97.2784C170.439 79.8027 151.96 3.47213 101.443 0.157784C88.2865 -0.746132 84.8718 2.36735 94.8144 6.08344C104.456 9.69908 116.608 26.773 117.913 38.323C118.215 40.633 116.407 42.5414 114.097 42.5414C100.84 42.5414 95.3166 42.541 87.5834 53.1871C68.602 79.501 93.8101 109.23 124.944 97.2784Z"
                  fill="#CC6600"
                  fill-opacity="0.1"
                  style={{
                    fill: "color(display-p3 0.8000 0.4000 0.0000)",
                    fillOpacity: "0.1",
                  }}
                />
              </svg>
            </div>
          </div>

          <p className="text-[#4D300080] ml-0 md:ml-24 text-start md:text-start text-[18px] md:text-[22px] leading-[100%] font-semibold font-[Lato] mb-4 max-w-2xl mx-auto">
           Take a look at the cover of book The Mandala Within! Can you spot anything that might indicate what’s going to happen in the book?
          </p>

          <div
            className="w-[80%] mx-auto mb-3"
            style={{ borderTop: "2px dashed #6640008C", height: "0px" }}
          ></div>

          <div className="font-medium ml-0 md:ml-24 text-start md:text-start text-[16px] md:text-[18px] leading-[100%] tracking-[0] text-[#4D30008C] font-[Lato]">
            By Clay Boykin • Quiet Mind
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 w-full flex justify-center">
          <img
            src="/book/1.png"
            alt="Person sitting peacefully in nature reading under a tree"
            className="rounded-[24px] object-cover w-full h-auto md:w-[750px] md:h-[501px] mx-auto"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg md:prose-xl max-w-3xl text-black justify-center ml-0 md:ml-28 text-[20px] leading-[100%] font-normal italic tracking-normal font-[Lato] text-justify space-y-8">
          <p>
            <span className="font-bold">The Mandala Within: Activating Your Inner-patterns of Wisdom</span> is a transformative guide for those on a journey of self-discovery and those intrigued by the depth of their own potential. This book weaves together ancient wisdom with contemporary thought, providing readers with innovative ways to find harmony amidst life’s chaos. It is designed for both beginners as well as those who have traversed the path of self-exploration. It offers a fresh perspective on awakening creativity, inner knowledge and wisdom, through the discovery and exploration of one’s inner-mandala.
          </p>
          <p>
            This guide transcends traditional how-to books, encouraging readers to embark on a deeply personal journey of self-discovery and self-awareness. It fosters thoughtful engagement with the material, allowing readers the flexibility to explore and focus on the sections and chapters that resonate most with any given moment.
          </p>
          <p>
            At the heart of every mandala lies a hidden truth drawing us into the intricate web of existence, where the sacred and the Self intertwine. Its patterns invite us to explore the delicate balance between chaos and harmony, the known and the infinite, with each symbol and line pointing in a certain direction—a felt, but unknown path toward deeper mysteries and ultimately toward fulfillment.
          </p>
          <p>
            Throughout my own journey, I've traced the presence of mandalas from ancient Tibetan sand paintings to Hindu cosmological diagrams, and from Gothic cathedral rose windows to Jung's psychological archetypes—each one revealing itself where humans sought to map the territory between mind and mystery. Even in Neolithic times the apparently crude circles made of megalithic columns adorned with symbols had meaning beyond the practical—an attempt to make tangible the unknown?
          </p>
          <p>
            These sacred geometric patterns, whose Sanskrit name I learned simply means 'circle,’ havespoken to me across cultural boundaries as a universal language of wholeness and integration. When I sit with a mandala, losing myself in the interplay between its geometrically precise patterns and radiating symbols, I am reminded of a profound truth:
          </p>
          <p className="font-bold text-center">
            These circular forms mirror the vast architecture of the cosmos and the infinite depths of the unconscious — their four-cornered grid within the circle symbolizing stability, structure, and grounding.
          </p>
          <p>
            I've come to understand that mandalas are more than mere symbols—they are transformative. When I create them—whether through drawing, painting, or arranging patterns in other ways — I engage in an active process of unity and healing that fosters self-discovery, bringing peace and clarity. As I connect with these geometric and symbolic forms, I find myself lifted beyond daily distractions, experiencing a unity that transcends the ordinary and reminds me that I am part of something far more significant.
          </p>
          
        </article>

        {/* Bottom Section */}
        <div className="pt-12 mt-16">
          <div className="text-start mb-8">
            <h2 className="font-[Playfair_Display] font-bold text-[42px] leading-[44px] tracking-[-0.03em] text-[#4D3000] mb-4">
              Keep Exploring Your Inner Mandala,{" "}
              <br className="hidden md:block" />
              Because every insight leads to the next.
            </h2>
            <p className="text-[#4D300080] text-[16px] md:text-[20px] leading-[140%] font-semibold tracking-normal font-[Lato]">
              Your journey doesn’t end here — it evolves. Discover more insights
              to awaken <br />
              compassion, stillness, and purpose within.
            </p>
          </div>

          {/* Related Articles Grid */}
          <div className="flex overflow-x-auto md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 scrollbar-hide">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                width={post.width}
                height={post.height}
                date={post.date}
                title={post.title}
                author={post.author}
                category={post.category}
                isLarge={post.isLarge}
                link={post.link}
              />
            ))}
          </div>

          <div className="py-16 px-4 ">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <div className="flex items-center justify-center gap-3 mb-3">
                {/* h2 Heading */}
                <h2
                  className="text-[42px] md:text-[52px]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    lineHeight: "64px",
                    letterSpacing: "-0.03em",
                    color: "#664000",
                  }}
                >
                  Ready to Dive Deeper? Let’s Talk!
                </h2>
              </div>

              <div
                className="mx-auto text-center leading-[24px] max-w-3xl"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: "0%",
                  color: "#66400080", // This is equivalent to Tailwind's amber-600
                }}
              >
                <p>
                  The Mandala Within isn’t just a path — it’s a conversation
                  waiting to happen. Let’s explore what’s unfolding for you.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6 mb-3">
                <a
                  href="https://calendly.com/clayboykin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "16px",
                  letterSpacing: "0%",
                  color: "#66400080", // This is equivalent to Tailwind's amber-600
                }}
              >
                <p>No cost. Just presence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
