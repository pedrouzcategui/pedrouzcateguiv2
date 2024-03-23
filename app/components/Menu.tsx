'use client'
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function Menu() {
    const [isDark, setIsDark] = React.useState(false);
    return (
        <nav className="font-bold flex justify-between py-4">
            <div>
                <h2>@rowancode</h2>
            </div>
            <ul className="flex gap-4">
                <li>Email</li>
                <li>Linkedin</li>
                <li>Github</li>
                <li className="cursor-pointer">
                    {
                        isDark
                            ? <Sun onClick={() => setIsDark(false)} />
                            : <Moon onClick={() => setIsDark(true)} />
                    }
                </li>
            </ul>
        </nav>
    )
}
