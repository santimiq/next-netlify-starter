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
        <Header title="Delta Protect!" />
        <p className="description">
          Subdomain Takeover Hexa
        </p>
      </main>

      <Footer />
    </div>
  )
}
