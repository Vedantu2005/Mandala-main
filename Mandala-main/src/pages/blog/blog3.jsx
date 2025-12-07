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
    <div className="min-h-screen">
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
            The Mandala Within: Why Author Clay Boykin Says Inner Peace Begins with Awareness
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
              <h2 className="relative mt-4 md:mt-0 text-[52px] md:text-[62px] font-[Playfair_Display] font-semibold text-[#4D3000] leading-tight md:leading-[80px] tracking-[-0.03em] text-left">
                The Mandala Within: <br className="hidden md:block" /> Why Author Clay Boykin Says  <br className="hidden md:block" /> Inner Peace Begins with<br className="hidden md:block" /> Awareness
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
            A reflection on inner silence, compassionate leadership, and the
            quiet revolution of the soul.
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
            In this noisy, hyperconnected world, finding inner peace can feel like finding silence in a storm. We pursue new jobs, new places, new relationships, new distractions, all in the hopes of “finding” a calm that is infuriatingly elusive. We are told to manage our stress, streamline the calendar, optimize our systems, and work harder, all to have the outward sense of ease, but the underlying world is still chaos.
          </p>
          <p>
            What if peace isn't something we find? What if it is something we uncover?
          </p>
          <p>
            This is the central premise in the work of Author Clay Boykin, purposeful guide and soulful leader. The Mandala Within captures his philosophy, the essence of his work the world over, in a simple but profound axiom: “Inward is the Way Forward.” The chaos to calm, the divided self to the integrated, is a journey that doesn’t begin with action, rather with Awareness.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">Who is Clay Boykin? A Voice for the "Still Point"</h3>
          <p>
            To comprehend this philosophy, one has to first comprehend the guide. Clay Boykin is not one of those self-help gurus who has come to offer the world an elaborate solution to a problem. “Soulful leadership”, “compassion”, and “mindful communication” are teachings and works that define him. Analysis and the inner reflective nature of men and women is something that has clearly undergone the hard work in this case.
          </p>
          <p>
            ‘Words Born of Silence’ is the foundation the Author Clay Boykin brand is built on. He feels the ‘purpose’ is often there for a person to know their ‘why’ but can’t seem to untangle the inner self. His life purpose is captured through his coaching and mentoring, writings and podcasts, and is aimed to assist people in distress, that is why the source is always a “Still Point,”.
          </p>
          <p>
            In Finding the Still Point in a Noisy World, the “Still Point” is the unmoving center within the eye of the hurricane. Boykin reminds us that this stillness has never disappeared; we have simply forgotten how to return to it. We silence ourselves to be polite, but the real quiet the one that brings clarity comes from a deeper place we rarely access.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">What is 'The Mandala Within'?</h3>
          <p>
            Many spiritual traditions define a mandala as a complex symmetrical geometric figure that is representative of the universe, the cosmos, and the wholeness of the self. It is a symbol of integration, balance and divine order.
          </p>
          <p className="font-medium">
            The Mandala Within by Clay Boykin is a blueprint of the integrated, whole, and peaceful self that already lives within us—complete with light and shadow, and a unique purpose waiting to be fulfilled.
          </p>
          <p>
            In Boykin's view, every individual possesses the perfect inner mandala, although for most people, it is hidden beneath layers of dust, grime, and debris. The 'masks' we wear, as explored in ‘Circles of Men’ (Boykin’s first book) these restricting beliefs, the traumas we have lived, and the ceaseless activity of the mind that goes unheard are all part of it.
          </p>
          <p>
            The condition of most people is one of internal disunity. Self-identification is rather with the dust than the pattern beneath the dust, the intricate pattern that has been superimposed upon the dust. Feeling “broken” or “lost” stems from the disconnection of one’s own inherent wholeness. So, The Mandala Within is about this sacred excavation. It is about cleaning the lens for us to behold the intricate pattern that has been there for us to see.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">The First Step: Why is Awareness Central to this Work</h3>
          <p>
            The journey starts here is within is most important. If the Mandala Within is covered with debris, then you do not begin with solving it. You begin with seeing the debris. This is called Awareness.
          </p>
          <p className="font-medium">
            He regards “listening” in the context of not simply resting in passiveness, in a “weak” position, but rather in active, strong engagement, which for him in this case is a powerful form of awareness.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">From Chaos to Calm: Awareness as the Filter</h3>
          <p>
            People in the reality of the outside world believe that the mind [in most people] is a chaotic, reactive, automatic machine. A certain automatic reaction occurs due to the occurrence of an external event, [in this case] a stressful email, a traffic jam, a negative comment, and we become the storm.
          </p>
          <p className="font-medium">
            Awareness is the practice of observing the storm without being swept away, the ability to step back and step into the ‘gap’ of stillness in the centre of the storm.
          </p>
          <p>In practicing mindfulness, you might start to say:</p>
          <ul className="space-y-8 pl-0">
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                “Oh, there is the feeling of anger.”
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                “It seems my shoulders are rather tense.”
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                “That inner voice is telling me I’m not good enough again.”
              </div>
            </li>
          </ul>
          <p>
            Mindfulness is transformative. You are not the anger; you are the one who sees it, and the one who sees it is already still. The observer lives at the calm centre untouched by the storm. When you become aware of what is happening within, you awaken the part of you that has never been disturbed. There is always a steady place inside—quiet, clear, and available in every moment.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">The Stillness that Speaks</h3>
          <p>
            Boykin teaches that stillness isn’t the absence of sound but the absence of inner noise. When we step back from our thoughts and notice them instead of becoming them, we begin to see what is real and what is conditioned. The still point was always there—inner peace was never gone, only hidden by distraction.
          </p>
          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">Presenting ‘The Mandala Method’</h3>
          <p>
            Practical application of this philosophy for most people remains within the confines of theory. Using the works of Author Clay Boykin, we define a practical application which we might call The Mandala Method. This inner mandala of the method explains a disciplined mode of the restatement of inner wholeness using awareness to restate connection.
          </p>
          <p>
            The specifics of the work are still to be done. However, The Mandala Method is peripherally derived from the following three underlying principles.
          </p>
          <ul className="space-y-8 pl-0">
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <span className="font-bold">Acknowledge (Awareness):</span> The primary step is to notice, without measures of judgment. This entails self-reflection, which is a multi-faceted. How do you feel? How do you think? Where do you feel it in the body? It’s a question of uncompromising honesty and once it is and once it takes root within, the attention shifts
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <span className="font-bold">Anchor (Stillness):</span> If there is any noise, you connect with the Still Point, which is reached either through breath, by focusing on a sensation, or simply by knowing you are the observer. You identify the That silence under the noise.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-black text-xl -mt-1">•</span>
              <div>
                <span className="font-bold">Integrate (Compassion):</span> From this "Still Point," you can look at the noise—the fear, the anger, the "mask"—with understanding instead of resistance. You see it as part of the human experience, not as you. This is how you begin to clean the mandala, the integration of all parts of yourself, even the shadows, into a unified whole.
              </div>
            </li>
          </ul>
          <p>
            The Mandala Method is a grounded and powerful practice that helps one shift from automatic reactivity to a calm, responsive, and centred way of being. It begins within—activating the inner mandala, where thought, emotion, and action come into alignment through clarity and integrity.
          </p>

          <div
            className="w-full"
            style={{ borderTop: "2px dashed #4D300040", height: "0px" }}
          ></div>
          <h3 className="font-bold">Conclusion:</h3>
          <p>For Clay Boykin, inner peace is not an endpoint but a point of origin—a place from which life is lived, not escaped to. The Mandala Within is not a philosophy to admire from a distance, but a practice to enter. It reminds us that what we long for is not missing; it is simply waiting beneath the noise.</p>
          <p>The invitation is simple, but not easy: stop searching outward for what has always lived within. The real work is not to build peace, but to uncover it. The mandala is already whole. Our task is to clear what prevents us from seeing it.</p>
          <p>Ultimately, The Mandala Within is a challenge—an inward summons to stillness, awareness, and self-honesty. It dares us to pause long enough to recognize the quiet order beneath the chaos, the clarity beneath the confusion, the wholeness beneath the fractured story we tell ourselves.</p>
          <p>The transformation we seek does not begin with doing. It begins with seeing. And once we see, the journey inward is no longer a retreat, but a return—to the self that has been there all along.</p>
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
