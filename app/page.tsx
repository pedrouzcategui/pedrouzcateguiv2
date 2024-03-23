import { Button } from "@/components/ui/button";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


export const metadata = {
  title: 'Pedro Uzcategui',
  description: 'Robotics Engineer',
};

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <Menu />
      <div className="text-center py-40">
        <h1 className="text-4xl lg:text-6xl block"><b className="font-bold">Creating</b> a better world <br /> one line of code at a time.</h1>
        <Button className="mt-8">See code in Github</Button>
      </div>
      <Projects />
      <Footer />
    </main>
  );
}
