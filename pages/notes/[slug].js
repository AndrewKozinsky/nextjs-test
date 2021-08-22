import Link from 'next/link'

export default function Note(props) {
    const { postData } = props

    return (
        <main>
            <h1>{ postData.header }</h1>
            <p>{ postData.content }</p>
            <p>
                <Link href='/' prefetch={false}>&larr; Back</Link>
            </p>
        </main>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: 'first-note'}},
            {params: {slug: 'second-note'}},
        ],
        fallback: true
    }
}

export function getStaticProps({params}) {
    const data = {
        'first-note': {
            header: 'First note',
            content: 'First note content'
        },
        'second-note': {
            header: 'Second note',
            content: 'Second note content'
        },
    }

    return {
        props: {
            postData: data[params.slug]
        }
    }
}