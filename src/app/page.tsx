import './global.css'
import { Header } from '../components/header/Header';
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default async function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}