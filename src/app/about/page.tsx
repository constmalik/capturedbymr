// import '../../global.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import Image from 'next/image';

export default async function About() {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <h2>About</h2>
        <Image
          src="https://placehold.co/600x400"
          alt="Picture of the author"
          width={600}
          height={400}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam, deleniti alias, doloribus libero cupiditate, blanditiis soluta in sit praesentium ratione perspiciatis sapiente! Consequatur dolores placeat labore numquam eaque ad.</p>
      </div>
      <Footer />
    </div>
  )
}