import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/contact";
import Experence from "../components/Experence";
import Main from "../components/main";
import Projects from "../components/projects";

export default function Home() {
  return <div className="max-w-7xl mx-auto  ">
    <Main/>
    <About/>
    <Experence/>
    <Projects/>
    <Blogs/>
    <Contact/>
  </div>;
}
