'use client'
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

export default function Menu() {
    const [isDark, setIsDark] = React.useState(false);
    const handleDarkToggle = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setIsDark(!isDark);
    }

    return (
        <>
            <nav className="z-50 fixed shadow-sm top-0 left-0 w-full py-4 bg-white/30 backdrop-filter backdrop-blur-lg dark:bg-gray-900/30">
                <div className="mx-auto w-4/5 font-bold flex justify-between ">
                    <div>
                        <Link href={'/'}>
                            <span>@rowancode</span>
                        </Link>
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
                        <li className="cursor-pointer">
                            {
                                isDark
                                    ? <FaSun size={24} onClick={handleDarkToggle} />
                                    : <FaMoon size={24} onClick={handleDarkToggle} />
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="w-full py-8"></div>
        </>

    )
}
