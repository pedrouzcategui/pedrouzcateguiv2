import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

export default function Footer() {
    const date = new Date();
    return (
        <nav className="flex justify-between py-4">
            <div>
                <h2>@rowancode</h2>
            </div>
            <div>
                All rights reserved {date.getFullYear()}
            </div>
            <ul className="flex gap-4">
                <li>
                    <Link href={'mailto:contact@rowandev.com'}>
                        <FaEnvelope size={24} />
                    </Link>
                </li>
                <li>
                    <Link href={'https://www.linkedin.com/in/pedro-uzcategui/'}>
                        <FaLinkedin size={24} />
                    </Link>
                </li>
                <li>
                    <Link href={'https://github.com/pedrouzcategui'}>
                        <FaGithub size={24} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
