import Link from "next/link";

export const Header = () => {
    return (
        <div>
            <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight">
                    <Link href="/">
                        mem<span className="text-green-400">Heap</span>
                    </Link>
                </h1>
                <nav className="flex gap-6 text-sm">
                    <Link href="#">Guides</Link>
                    <Link href="#">Tutorials</Link>
                    <Link href="#">Snippets</Link>
                </nav>
            </header>
        </div>
    );
};
