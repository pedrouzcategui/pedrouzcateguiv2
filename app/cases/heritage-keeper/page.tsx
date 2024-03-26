import Footer from "@/app/components/Footer";
import Menu from "@/app/components/Menu";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeritageKeeperPage() {
    return (
        <div className="w-4/5 mx-auto text-sm">
            <Menu />
            <div className="my-32">
                <Link href={"/"} className="text-sm flex items-center gap-4 mb-4"><ArrowLeft size={16} /> Go Back To Case Studies</Link>
                <h1 className="text-4xl mb-4 font-bold">Heritage Keeper</h1>
                <img className="w-full h-[500px] object-cover mb-4" src="/heritage-keeper.png" alt="Heritage Keeper Initial Image" />
                <p>Hello folks! Welcome to another project review. This time we are going to review <b className="font-bold">Heritage Keeper</b>, a web application developed in 48 hours and the winner of Codicon 2024 (the yearly hackaton sponsored by <Link href={'https://lexpin.online/#/codicon/projects'}>Lexpin academy</Link>).</p>
                <h2>Chapter I: The Idea</h2>
                <p>First of all, I want to give you a little bit of context. Codicon is an international hackaton where developers from all around the world gather to develop a software product in a limited amount of time based on a particular keyword. This year, the keyword was… <b>“Transmission”</b>  🤯.</p>
                <p>Well, that was a tricky one, but we managed to come up with a great idea. My team and I didn’t want to stick to the typical <i>“data transmission”</i> or <i>“streaming”</i> application concepts, so we took our time to brainstorm and analyze the alternatives we had.</p>
                <p>
                    After a couple of hours, we found the perfect idea to work on: a web application to store, share, and <b>transmit</b> family memories and albums to future generations. We knew that this was an amazing approach to the keyword, and we started to work on it right away.
                </p>
                <h2>Chapter II: The setup 🛠️</h2>
                <p>The time was limited; 48 hours sounds like a lot of time but believe me when I say that it’s not. My team and I knew that so we had to be efficient and organized to deliver a functional product.</p>
                <p> We decided to use full stack technologies and infrastructure as a service to speed up the development process and avoid any configuration issues. We used the following technologies:</p>
                <ul className="list-disc ml-4">
                    <li className="mb-4 leading-8"><b>Next.js</b> for frontend and backend development. It was the perfect choice for us because it allowed us to develop a server rendered React application with ease. Additionally, it offers a wealth of libraries and pluggable integrations, such as NextAuth.js for authentication and Prisma for database management.</li>
                    <li className="mb-4 leading-8"><b>Shadcn/ui</b> was utilized as our design system. Its components are beautiful by default. By simply importing the library and making some theme changes, we were able to create a stunning UI in no time.</li>
                    <li className="mb-4 leading-8"><b>Neon</b> as database provider. Literally an awesome database as a service that allowed us to store and manage our data without worrying about the infrastructure. It provides a fully default configuration for serverless applications and it works perfectly with our selected ORM.</li>
                    <li className="mb-4 leading-8"><b>Uploadthing</b> served as our file storage provider. Despite being in beta, it was a great choice for us because it allowed us to store and manage files in a simple and secure way. Its API is very handy and easy to use.</li>
                </ul>
                <h2>Chapter III: The development 🚀</h2>
                <p>Once we had the setup ready and an amazing idea to work on, we started to develop the application. The core modelling of the application we based in three main entities:</p>
                <ul className="list-disc ml-4">
                    <li className="mb-4 leading-8"><b>Family Members:</b> they represent the different members that can be part of the user’s family. They can be added, edited, and deleted by the user. Also they can be tagged in the different memories and albums.</li>
                    <li className="mb-4 leading-8"><b>Memories:</b> they allow to the user to save pictures of meaningful moments of its life. They can be added, shared and deleted by the user. Also they can be tagged with family members and can be downloaded individually as image files.</li>
                    <li className="mb-4 leading-8"><b>Albums:</b> they are groups of memories that can be shared and downloaded by the user. They can be created, edited, and deleted by the user. Also can be opened in a visualization mode to appreciate the memories one by one.</li>
                </ul>
                <p>Since we were three developers in the team, we decided to distribute each module to each one randomly. After some give aways, I ended up developing the Albums module.</p>
                <h2>Chapter IV: My part (Memories’s module) 📚</h2>
                <h2>
                    Chapter V: The final result 🏆
                </h2>
                <p>After 48 hours of hard work, we managed to finish the project and submit it to the Codicon 2024 hackaton.</p>
                <p>We were very proud of the result and we knew that we had a great chance to win the competition. The judges were amazed by the idea and the implementation of the project.</p>
                <p>They loved the concept of Heritage Keeper and they were impressed by the quality of the code and the design of the application.</p>
                <p>After a long deliberation, the judges announced that Heritage Keeper was the winner of the Codicon 2024 hackaton.</p>
                <p>We were very happy and proud of our work. We knew that we had done a great job and that we had created something special.</p>
                <p>
                    I want to give special thanks to my amazing teammates <Link href={'/'}>Juan Álvarez</Link> and <Link href={'/'}>Pedro Uzcátegui</Link> with whom I had the pleasure to work and create great software.
                </p>
                <p>
                    That’s all for today folks! I hope you enjoyed this project review. If you have any questions or comments, <Link href={'/'}>feel free to contact me in my social media</Link>. I’ll be happy to answer them. See you in the next project review! 👋🏼.
                </p>
            </div>
            <Footer />
        </div>
    );
}