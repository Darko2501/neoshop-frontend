'use client';
import Link from "next/link";
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
    const { isAuthenticated, username } = useAuth();

    return (
        <nav className="bg-black p-4">
            <div className="flex justify-between items-center text-white">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/product">Products</Link>
                    </li>
                    <li>
                        <Link href="/">Cart</Link>
                    </li>
                    <li>
                        <Link href="/">Order</Link>
                    </li>
                </ul>

                <ul className="flex space-x-4">
                    <li>
                        <Link href="/register">Register</Link>
                    </li>
                    <li>
                        {isAuthenticated ? (
                            <Link href="/profile">{username}</Link> // Prikazuje korisničko ime
                        ) : (
                            <Link href="/profile">Profile</Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
