import React from 'react'
import { Helmet } from 'react-helmet-async'
import MandalaHeroSection from '../component/Hero'
import InnerCallingSection from '../component/InnerCalling'
import MandalaMethod from '../component/Intro'
import MeetClayBoykin from '../component/MeetClay'
import FeelingLostSection from '../component/Feeling'
import TestimonialsSection from '../component/Testimonial'
import MandalaWithinBook from '../component/Book'
import GoDeeperSection from '../component/GoDeeper'
import MomentsOfConnection from '../component/Gallery'
import MandalaCycle from '../component/MandalaCycle'
import DogTestimonial from '../component/DogTestimonial'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/ic.png" />

        <title>The Mandala Method by Author Clay Boykin | The Mandala Within</title>
        <meta
          name="description"
          content="Discover The Mandala Method by Author Clay Boykin. This is the core practice of The Mandala Within, helping you find clarity, purpose, and inner peace beyond success."
        />
      </Helmet>

      {/* Your existing page content is below */}
      <div>
        <MandalaHeroSection />
        <InnerCallingSection />
        <MandalaMethod id="mandala-method" />
        <MandalaCycle />
        <MeetClayBoykin />
        <FeelingLostSection id="feeling-lost" />
        <TestimonialsSection id="testimonials" />
        <DogTestimonial />
        <MandalaWithinBook />
        <GoDeeperSection />
        <MomentsOfConnection />
      </div>
    </>
  )
}

export default HomePage