import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MandalaHeader from './component/Navbar'
import MandalaFooter from './component/Footer'

// Pages
import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage.jsx'
// import IsThisYouPage from './pages/IsThisYouPage'
// import GuidancePage from './pages/GuidancePage'
import ArticlesPage from './pages/ArticlesPage'
import YoutubePage from './pages/YoutubePage'

import Blog1 from './pages/blog/blog1.jsx'
import Blog2 from './pages/blog/blog2.jsx'
import Blog3 from './pages/blog/blog3.jsx'
import Blog4 from './pages/blog/blog4.jsx'
import Blog5 from './pages/blog/blog5.jsx'
import Blog6 from './pages/blog/blog6.jsx'
import Blog7 from './pages/blog/blog7.jsx'

import AnalyticsTracker from './component/AnalyticsTracker.jsx'
import ScrollToTop from './component/ScrollToTop.jsx'


const App = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <MandalaHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/is-this-you" element={<IsThisYouPage />} /> */}
        {/* <Route path="/guidance" element={<GuidancePage />} /> */}
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/youtube" element={<YoutubePage />} />

        {/* Blog pages */}
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/blog/blog4" element={<Blog4 />} />
        <Route path="/blog/blog5" element={<Blog5 />} />
        <Route path="/blog/blog6" element={<Blog6 />} />
        <Route path="/blog/blog7" element={<Blog7 />} />

      </Routes>

      <MandalaFooter />
    </Router>
  )
}

export default App