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
                <li>Email</li>
                <li>Linkedin</li>
                <li>Github</li>
            </ul>
        </nav>
    )
}
