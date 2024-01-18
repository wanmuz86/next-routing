"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavAuth() {
    const navLinks = [
        { "name": "Register", href: "/register" },
        { "name": "Login", href: "/login" },
        { "name": "Forgot Password", href: "/forgot-password" },
    ]
    const pathname = usePathname();
    return (
        <nav>
            <ul>
                {
                    navLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    style={{
                                        color: pathname.startsWith(link.href) ?
                                            "green"
                                            : "blue"
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })

                }
            </ul>
        </nav>
    )
}
