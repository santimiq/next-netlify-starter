import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Delta Protect!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Subdomain Takeover Hexa.dd360.mx <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
