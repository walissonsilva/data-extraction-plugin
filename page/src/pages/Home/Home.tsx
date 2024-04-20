import { Navbar } from "@/components/Navbar";
import { Banner } from "./sections/Banner";
import { About } from "./sections/About";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl px-4 sm:px-8 md:px-12 mx-auto">
        <Banner />
        <About />
      </main>
    </>
  );
};
