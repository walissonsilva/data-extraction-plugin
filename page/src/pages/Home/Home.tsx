import { Navbar } from "@/components/Navbar";
import { Banner } from "./sections/Banner";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl px-8 sm:px-8 md:px-12 mx-auto mb-12">
        <Banner />
        <About />
        <Projects />
      </main>
    </>
  );
};
