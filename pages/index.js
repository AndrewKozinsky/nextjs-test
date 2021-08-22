import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <p>Welcome to my blog</p>
            <p>
                <Link href="/notes/first-note" prefetch={false}>
                    First note
                </Link>
            </p>
            <p>
                <Link href="/notes/second-note" prefetch={false}>
                    Second note
                </Link>
            </p>
        </main>
    )
}
