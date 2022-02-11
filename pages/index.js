import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}


/*export async function getServerSideProps({ params }){
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
      props: { car: data }
  }
}*/

export const getStaticProps = async() => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
      props: {articles}
  }
}

/*export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
      props: {articles}
  }
}*/

/*export async function getStaticPaths({ params }){
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  const paths = data.map(car => {
     return { params: { id: car }}
  })

  return {
      paths,
      fallback: false
  }
}*/

