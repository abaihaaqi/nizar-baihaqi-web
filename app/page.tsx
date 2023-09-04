import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import ProjectCard from "../components/ProjectCard";
import BlogImage from "../public/blog-homepage.png";
import BushiImage from "../public/bushi-homepage.png";
import RancangImage from "../public/rancang-creative.png";
import RRQImage from "../public/rrq-homepage.png";

export default function Home() {
  return (
    <div>
      {/* Banner */}

      <div
        id="top"
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl lg:text-9xl mb-5 text-center text-yellow-400">
          Nizar Baihaqi
        </h1>
        <h2 className="text-2xl mb-5 font-medium">Web Developer</h2>
        <p>Scroll down</p>
      </div>

      {/* My Projects */}

      <h1
        id="projects"
        className="text-4xl text-center mb-5 font-bold scroll-smooth scroll-mt-14"
      >
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProjectCard
          title="My Blog Post"
          desc="I post my assignment here 😂"
          link="https://blog.nizarbaihaqi.com"
          img={BlogImage}
        />
        <ProjectCard
          title="Bushi Computer"
          desc="A computer repair shop"
          link="https://bushi.nizarbaihaqi.com"
          img={BushiImage}
        />
        <ProjectCard
          title="Rancang Creative"
          desc="Social Media Agency"
          link="https://rancang-creative.vercel.app"
          img={RancangImage}
        />
        <ProjectCard
          title="RRQ Landing Page Clone"
          desc="E-Sports Team"
          link="https://rrq-landing-page.vercel.app"
          img={RRQImage}
        />
      </div>

      {/* Contacts */}

      <div className="mt-10">
        <h1 className="text-4xl text-center mb-5 font-bold">How to hire me</h1>
        <h3 className="text-lg text-center">
          You can hire me by sending an email to{` `}
          <a
            href="mailto:nizarbaihaq@gmail.com"
            className="p-2 hover:bg-cyan-600 border border-white rounded transition-all"
          >
            nizarbaihaq@gmail.com
          </a>
        </h3>
      </div>

      {/* Social Media */}

      <div className="mt-5 mb-10 gap-3 flex justify-center">
        <a
          href="https://instagram.com/ijaybaihaqi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-cyan-600 rounded"
        >
          <IconBrandInstagram stroke={1.5} />
        </a>
        <a
          href="https://www.facebook.com/nizar.baihaqi.94/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-cyan-600 rounded"
        >
          <IconBrandFacebook stroke={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/nizar-baihaqi/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-cyan-600 rounded"
        >
          <IconBrandLinkedin stroke={1.5} />
        </a>
      </div>
    </div>
  );
}
