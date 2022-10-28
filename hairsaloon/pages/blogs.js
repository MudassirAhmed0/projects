import React from 'react'
import { BlogsCardSection } from '../components/blogs/blogs-card-section/BlogsCardSection';
import HeroBlue from '../components/hero-blue/HeroBlue';
import Layout from '../components/layout/layout'
const heroSectionData = {
  title: "Blogs",
  pageName: "Blogs",
};
const Blogs = () => {
  return (
    <Layout>
      <HeroBlue data={heroSectionData} />
      <BlogsCardSection />
    </Layout>
  )
}

export default Blogs