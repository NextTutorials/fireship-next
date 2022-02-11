import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({article}) => {
    //const router = useRouter()
    //const {id} = router.query

    return (
        <>
            <Meta title={article.title} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back</Link>
        </>
    )
}

//getServerSideProps
/*export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const article = await res.json()

    return { 
        props: { article }
    }
}*/

/*export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return { 
        paths,
        fallback: false
     }
}*/

//only allowed on pages, runs server side, used for pre-rendering and not client-side data fetching
export const getStaticProps = async ({params}) => {
    const res = await fetch(`${server}/api/articles/${params.id}`);

    const article = await res.json()

    return { 
        props: { article }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);

    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return { 
        paths,
        fallback: false
     }
}


export default article