import Head from "next/head";
import About from "../components/About";
import Animationtext from "../components/animationtext";
import Blogs from "../components/Blogs";
import Contact from "../components/contact";
import Experence from "../components/Experence";
import Main from "../components/main";
import Projects from "../components/projects";
import Skills from "../components/Skills";
import Review from "../components/Review";

export default function Home() {
  return (
    <div className="max-w-[980px]   lg:mx-auto    mx-4">
      <Head></Head>
      <Main />
      <About />
      <Skills />
      <Experence />
      <Projects />
      <Review />
      <Blogs />
      <Contact />
    </div>
  );
}
