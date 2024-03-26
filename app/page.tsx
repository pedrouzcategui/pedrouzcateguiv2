import { Button } from "@/components/ui/button";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Link from "next/link";
import Menu from "./components/Menu";

export const metadata = {
  title: 'Pedro Uzcategui',
  description: 'Robotics Engineer',
};

export default function Home() {
  return (
    <main>
      <Menu />
      <div className="text-center py-48">
        <h1 className="text-4xl lg:text-6xl block outline-none select-none"><b className="font-bold">Creating</b> a better world <br /> one line of code at a time.</h1>
        <Link target="_blank" href={'https://github.com/pedrouzcategui'}>
          <Button className="mt-8">
            See code in Github
          </Button>
        </Link>
      </div>
      <Projects />
      <Footer />
    </main>
  );
}
