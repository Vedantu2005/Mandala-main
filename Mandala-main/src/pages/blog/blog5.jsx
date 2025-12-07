import React from "react";
import BlogCard from "../../component/BlogCard";

const Article = () => {
  // Related blog posts
  const blogPosts = [
    {
      image: "/book/1.png",
      width: 321,
      height: 200,
      date: "Aug 2025",
      title: "Finding Purpose Through The Mandala Within: An Eastern Path of Awakening",
      author: "Clay Boykin",
      category: "The_Mandala_Way",
      isLarge: false,
      link: "/blog/blog6",
    },
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
      image: "/book/5.png",
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
            Archetypes and the Inner Mandala: Clay Boykin’s Psychological Insights
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
                Archetypes and the <br className="hidden md:block" /> Inner Mandala
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
            Clay Boykin’s Psychological Insights on how archetypes and inner
            structures illuminate our patterns of flourishing.
          </p>

          <div
            className="w-[80%] mx-auto mb-3"
            style={{ borderTop: "2px dashed #6640008C", height: "0px" }}
          ></div>

          <div className="font-medium ml-0 md:ml-24 text-start md:text-start text-[16px] md:text-[18px] leading-[100%] tracking-[0] text-[#4D30008C] font-[Lato]">
            By Clay Boykin • The MandalaMethod™
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 w-full flex justify-center">
          <img
            src="/book/2.png"
            alt="Archetypes and the Inner Mandala"
            className="rounded-[24px] object-cover w-full h-auto md:w-[750px] md:h-[501px] mx-auto"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg md:prose-xl max-w-3xl text-black justify-center ml-0 md:ml-28 text-[20px] leading-[100%] font-normal italic tracking-normal font-[Lato] text-justify space-y-8">
          <p>
            Archetypes reveal themselves through lived experience—they whisper
            through dreams, emotional triggers, inner conflict, longing, and
            moments of sudden clarity. Through his MandalaMethod™, Clay Boykin
            shows that these archetypal movements are not abstract theories but
            living energies forming recognizable patterns within our inner lives.
          </p>
          <p>
            Across cultures and spiritual traditions, humanity has long sought
            to understand the psyche’s landscape. Yet among the symbolic systems
            informing depth psychology and contemporary inner work, the mandala
            provides an especially coherent synthesis.
          </p>
          <p>
            In <strong>The Mandala Within: A Guide for Intuitive and Logical Minds</strong>,
            Boykin—mentor in leadership and spirituality—explores how archetypes,
            inner structures, and personal mythology illuminate our patterns of
            flourishing.
          </p>

          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            The Mandala as a Psychological Map
          </h3>
          <p>
            Appearing in Tibetan sand paintings, Navajo healing art, Hindu
            yantras, and Gothic rose windows, mandalas serve a universal
            function: unmasking inner harmony amidst external chaos. Long before
            knowing the term, Boykin was sketching circular patterns—an
            archetypal impulse toward wholeness that later became foundational to
            the MandalaMethod™.
          </p>
          <p>
            Through a Jungian lens, the mandala symbolizes psychological
            order—balancing shadow and light, chaos and structure, intuition and
            logic. Mandalas express not just beauty but lived psychological
            realities: unresolved stories, innate wisdom, blind spots, and
            emerging purpose.
          </p>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Archetypes and the Inner Mandala
          </h3>
          <p>
            The inner mandala reflects the dynamic interplay of archetypes—universal
            patterns that show up in myth, dreams, culture, and personal
            experience. Examples include the Warrior, Sage, Caregiver, Trickster,
            Lover, and Explorer.
          </p>
          <p>
            Boykin emphasizes that archetypes are not conceptual; they are
            embodied. Through the MandalaMethod™, individuals learn to track the
            emotional currents, conflicts, narratives, and longings that reveal
            which archetypes are active, seeking expression, or in need of
            balance.
          </p>
          <p>This helps answer essential questions:</p>
          <ul className="space-y-2 pl-4 list-disc">
            <li>Why do I repeat certain patterns?</li>
            <li>Which archetype is influencing my choices?</li>
            <li>What inner energy is asking to be acknowledged?</li>
          </ul>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Mythos and Logos: The Inner Mandala’s Core Tension
          </h3>
          <p>
            Boykin’s MandalaMethod™ highlights the crucial convergence of mythos
            and logos:
          </p>
          <ul className="space-y-4 pl-0">
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Mythos:</strong> intuition, story, emotion, imagination
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <strong>Logos:</strong> logic, clarity, structure, discernment
              </div>
            </li>
          </ul>
          <p>
            Clients often express this tension as: <em>“My heart says one thing;
            my head says another.”</em> Transformation occurs not through choosing
            one path but through allowing both to co-inform one’s actions.
          </p>
          <p>
            Boykin observes: <em>“True change is possible only when the
            transcendent unites with the world.”</em> This is the work of the
            inner mandala.
          </p>

          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Drawing the Mandala Within: A Practical Guide
          </h3>
          <p>
            The MandalaMethod™ turns reflection into a structured, accessible
            practice.
          </p>
          <ul className="space-y-2 pl-4 list-disc">
            <li>
              <strong>Start with a circle</strong>—a symbol of wholeness.
            </li>
            <li>
              <strong>Define the Four Directions:</strong>
              <ul className="pl-6 pt-2 space-y-1 list-none">
                <li><strong>North:</strong> Mythos (My Story)</li>
                <li><strong>East:</strong> Purpose (My Passion)</li>
                <li><strong>West:</strong> Meaning (What Matters)</li>
                <li><strong>South:</strong> Logos (My Choices)</li>
              </ul>
            </li>
            <li>
              <strong>Observe emotional patterns</strong>—repetition, tension,
              desire, fear.
            </li>
            <li>
              <strong>Listen to the core</strong>—the Self, the calm center of
              awareness.
            </li>
          </ul>
          <p>This creates a visual language for inner coherence.</p>

          <h3 className="text-[#4D3000] font-bold text-2xl mt-8 mb-4 not-italic">
            Why This Work Matters Now
          </h3>
          <p>
            In a distracted and anxious world, people are hungry not for more
            information but for meaning. The MandalaMethod™ offers grounding
            imagery, organizing structure, and reflective depth.
          </p>
          <p>
            The practice aligns ancient wisdom with modern psychology, somatic
            awareness, and mindfulness—revealing pathways to emotional coherence
            and inner calm.
          </p>

          <div className="space-y-3 mt-8">
            <h3 className="text-[#4D3000] font-bold text-2xl mb-4 not-italic">
              Conclusion: A Lifelong Journey
            </h3>
            <p>
              Archetypes and mandalas are not static symbols but evolving
              companions in human development. Through the MandalaMethod™,
              individuals learn to witness, integrate, and transform their
              patterns.
            </p>
            <p>
              Boykin writes: <em>“You are not a problem to solve. You are a
              pattern unfolding.”</em>
            </p>
            <p>
              For seekers, leaders, and contemplative practitioners, the mandala
              becomes both mirror and map—revealing deeper layers of inner
              harmony with each return.
            </p>
          </div>
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