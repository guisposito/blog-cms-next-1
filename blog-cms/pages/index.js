import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const posts = [
  {title: "React Testing", excerpt: "Learn React testing"},
  {title: "React Testing", excerpt: "Learn React testing"},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-green-300">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div className="">
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">

            </div>
        </div>
      </div>
     
    </div>
  )
}
