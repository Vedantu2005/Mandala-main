import React from "react";
import BlogCard from "../../component/BlogCard";

const Article = () => {
  // Related blog posts
  const blogPosts = [
    {
      image: "/book/4.png",
      width: 375,
      height: 250,
      date: "Aug 2025",
      title: "Beyond the Four Directions: The Fifth Path of Fulfilment",
      author: "Clay Boykin",
      category: "The_Mandala_Way",
      isLarge: false,
      link: "/blog/blog7",
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
      link: "/blog/blog5",
    },
    {
      image: "/book/1.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "The Mandala Within: Why Author Clay Boykin Says Inner Peace Begins with Awareness",
      author: "Clay Boykin",
      category: "Soulful_Leadership",
      isLarge: false,
      link: "/blog/blog3",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Navigation with fixed top margin (mt-24) */}
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
            Finding Purpose Through The Mandala Within
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
              <h2 className="relative mt-4 md:mt-0 text-[52px] md:text-[64px] font-[Playfair_Display] font-semibold text-[#4D3000] leading-tight md:leading-[80px] tracking-[-0.03em] text-left">
                Finding Purpose Through <br className="hidden md:block"/> The Mandala Within
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
            An Eastern Path of Awakening
          </p>

          <div
            className="w-[80%] mx-auto mb-3"
            style={{ borderTop: "2px dashed #6640008C", height: "0px" }}
          ></div>

          <div className="font-medium ml-0 md:ml-24 text-start md:text-start text-[16px] md:text-[18px] leading-[100%] tracking-[0] text-[#4D30008C] font-[Lato]">
            By Clay Boykin • The Mandala Way
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 w-full flex justify-center">
          <img
            src="/book/1.png"
            alt="The Mandala Within"
            className="rounded-[24px] object-cover w-full h-auto md:w-[750px] md:h-[501px] mx-auto"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg md:prose-xl max-w-3xl text-black justify-center ml-0 md:ml-28 text-[20px] leading-[100%] font-normal italic tracking-normal font-[Lato] text-justify space-y-8">
          <p>
            Over the past several years I have seen a parallel movement among
            individuals seeking deeper existential meaning in their lives. Whether
            working with long-time practitioners or participants in their first
            spiritual retreat, the question that I encounter is remarkably
            consistent: “How do I see my inner world more clearly?”
          </p>
          <p>
            This fear is not theoretical — it’s pragmatic, emotional and
            profoundly human. And yet it’s just the question covered by{" "}
            <strong>The Mandala Within</strong> by Clay Boykin, a model that
            connects Eastern wisdom and contemporary depth psychology.
          </p>
          <p>
            Because purpose, as so many have discovered through contemplative
            practice, is not a one-time revelation. Learn to see it and that red
            carpet self-cherishing will gradually roll up. The mandala serves as
            an orientating point and focuses a means of living through this
            experience.
          </p>

          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Why the Mandala: The Sacred Circle in Eastern Traditions
          </h3>
          <p>
            Long before modern, Western psychology interpreted the self in
            circular designs, mandalas have been used as sacred diagrams of
            awakening in Eastern traditions. Although the mandala is understood
            differently in different traditions such as Tibetan Buddhism, Hindu
            tantra and Zen calligraphy, there is a global understanding of what
            the mandala portrays: that it shows us the architecture of our inner
            world.
          </p>
          <p>
            During the early period of my own training in mindfulness meditation,
            I was always coming back to the symbol of the circular. My teachers
            said the shape stood for not something perfect, but rather
            completeness — that all inner states belong somewhere within this
            larger field of awareness, and nothing should be left out.
          </p>
          <p>
            That realization changed the way I approached my own life
            investigation. Viewing the mind as a mandala instead of a linear
            story made room for compassion, curiosity and the potential of
            another level of awakening.
          </p>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            How ‘The Mandala Within’ Modernizes an Ancient Practice
          </h3>
          <p>
            What makes Boykin’s work especially valuable for today’s seekers is
            that it universalizes the traditional mandala’s symbolism in a way
            anyone can draw upon. Clay Boykin, as a writer, does not impose
            doctrine; he opens pathways for exploration. His approach combines:
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li>Reflective inquiry</li>
            <li>Compassionate awareness</li>
            <li>Archetypal understanding</li>
            <li>Inner listening</li>
          </ul>
          <p>
            And forging what he describes as the fifth direction — a compass of
            one’s own, orienting from within rather than without.
          </p>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Mandala as a Real Tool to Find Your Purpose
          </h3>
          <p>
            While they can hold spiritual meaning, mandalas can also be earthy and
            even pragmatic. The approach is especially potent because it
            externalizes what can register as chaotic or abstract.
          </p>

          <div className="pl-4 border-l-4 border-[#CC7A00] space-y-4">
            <div>
              <strong className="block text-xl text-[#664000]">
                1. Navigating the Inner World
              </strong>
              <p>
                At a retreat I attended years ago, the leaders asked us to
                identify emotions, habits and values in various quadrants of a
                circle. One man discerned that he was placing his obligations at
                the center of life and joy on the edges. The imagery hit him
                harder than any description had.
              </p>
            </div>
            <div>
              <strong className="block text-xl text-[#664000]">
                2. Seeing Recurring Patterns with Honesty
              </strong>
              <p>
                On a personal level, in my own work to cultivate compassion, I
                discovered patterns of behavior that I had excused for years:
                overcommitment and intellectualizing emotions along with an
                unspoken yearning for stillness. The mandala revealed the pattern.
              </p>
            </div>
            <div>
              <strong className="block text-xl text-[#664000]">
                3. Bringing the Outer Life and Inner Life into Harmony
              </strong>
              <p>
                So many people realize they’ve been living by what is expected of
                them, rather than who they really are. The mandala shows us these
                misalignments in a gentle way — not with judgment. I see folks so
                frequently move out of "What shall I do?" to "What feels deeply
                true?"
              </p>
            </div>
          </div>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Purpose Isn't a Goal, It's an Emergent Property
          </h3>
          <p>
            Eastern wisdom traditions have very different words about purpose than
            Western productivity culture. Purpose isn’t a mission statement or
            something you need to check off on your bucket list; it is an
            expression of who you are and the ability to use the elements that
            make up your being so seamlessly that we get into states where
            everything else falls away.
          </p>
          <p>
            The mandala can do this by assisting people to slow down, become aware
            of deeper motivations, distinguish truth from fear, and get the feel
            for their inner beat. Gradually this process becomes what many
            traditions refer to as awakening.
          </p>

          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Awakening Your Connection to Others
          </h3>
          <p>
            The world that Clay Boykin has created is built off of the concept of
            connection—connection to oneself, to others, and to something larger
            than us. Purpose, in Boykin’s mind, is not just an individual matter;
            it is relational. This viewpoint reflects Eastern concepts such as:
          </p>
          <ul className="space-y-4 pl-0">
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Interbeing</strong> — Thich Nhat Hanh’s teaching on the
                deep interconnectedness of all things
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Compassionate Awareness</strong> — as cultivated within
                Tibetan contemplative traditions
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Right Intention</strong> — the ethical foundation within
                the Buddhist Eightfold Path
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Dharma as Valuing</strong> — the Bhagavad Gita’s call to
                align action with one’s highest inner duty
              </div>
            </li>
          </ul>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            The Fifth Direction
          </h3>
          <p>
            One of Boykin’s most interesting concepts is his fifth direction.
            Conventional symbolism uses the four cardinal points for orientation
            in the outer life. The fifth direction is the inside; it represents
            inner guidance that is born through contemplation.
          </p>
          <p>
            It is the basis of authentic decision making, meaningful
            relationships, intuitive clarity, and a lived purpose, not an imposed
            one.
          </p>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Conclusion: Being Awake as a Return Home
          </h3>
          <p>
            Purpose is not a thing we pursue but rather something that returns us.
            And the mandala — whether born on paper or within — furnishes the map
            of that return.
          </p>
          <p>
            The Mandala Within by Clay Boykin contains elegant distillations of
            this timeless wisdom and combines Eastern information with Western
            psychological empowerment. Those who work with the mandala over time
            find more than patterns; they encounter presence. More than direction,
            they discover the inner compass that points quietly and persistently
            to uniting their centers.
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
                  color: "#66400080",
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
                  color: "#66400080",
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