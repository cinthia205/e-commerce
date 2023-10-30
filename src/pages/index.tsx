import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import exampleImage from '@/images/MakeupBrushes.jpg'
import ProductList from '@/components/ProductList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>Le Parfum's</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
      <h1>Le Parfum's</h1>
      <h2>Os melhores cosméticos você encontra aqui!</h2>
      <Image src={exampleImage} alt="Makeup brushes"/>
      <ProductList />
      </main>
    </>
  )
}