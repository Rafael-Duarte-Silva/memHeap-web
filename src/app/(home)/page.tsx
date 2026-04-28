import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";
import { H1, H2, Paragraph } from "@/src/components/ui/Typography";
import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <section className="max-w-6xl mx-auto mb-20">
                <H1>Notes I didn’t want to forget.</H1>

                <Paragraph className="text-lg mb-6">
                    {
                        "memHeap are where I save and share what I've learned; this also helps me memorize what I learn."
                    }
                </Paragraph>

                <section className="flex flex-wrap gap-4 text-sm">
                    <Button
                        as="a"
                        href="https://github.com/your-username"
                        target="_blank"
                    >
                        GitHub
                    </Button>

                    <Button
                        as="a"
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>

                    <Button
                        as="a"
                        href="mailto:your@email.com"
                    >
                        Email
                    </Button>
                </section>
            </section>

            <section className="max-w-6xl mx-auto mb-20">
                <H2 className="mb-6">Latest posts</H2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Ubuntu: How to keep it clean",
                            desc: "Developing for a technology stack requires multiple tools that can take up a lot of space.",
                        },
                        {
                            title: "Writing Your Own Allocator",
                            desc: "A deep dive into custom memory allocators.",
                        },
                        {
                            title: "Pointers in Practice",
                            desc: "Practical patterns with pointers and references.",
                        },
                    ].map((post, i) => (
                        <article
                            key={i}
                            className="flex flex-col p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-green-400 transition"
                        >
                            <H2 className="text-xl mb-2">{post.title}</H2>
                            <Paragraph>{post.desc}</Paragraph>

                            <Link
                                href="/post"
                                className="text-green-400 text-sm mt-auto font-sans"
                            >
                                Read more →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto mb-20">
                <H2 className="mb-6">Topics to explore</H2>

                <div className="flex flex-wrap gap-4">
                    {[
                        "Memory",
                        "Systems",
                        "Performance",
                        "Networking",
                        "Compilers",
                    ].map((category) => (
                        <Badge key={category}>{category}</Badge>
                    ))}
                </div>
            </section>

            <footer className="max-w-6xl mx-auto text-center text-neutral-500 text-sm font-sans">
                <p className="mb-2">
                    If you like this kind of content, feel free to reach out or
                    follow my work.
                </p>
                <p>
                    © {new Date().getFullYear()} memHeap — built one note at a
                    time.
                </p>
            </footer>
        </main>
    );
}
