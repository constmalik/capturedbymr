import './global.css'
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default async function Home() {
  return (
    <main>
      <Header />
      <div className="content-wrapper"></div>
      <Footer />
    </main>
  )
}