// import '../../global.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Image } from 'next/image';
import { mockImages } from 'src/data/constants';


export default async function Gallery() {
  const image1 = mockImages[0];
  console.log('image1', image1)
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <h2>Gallery</h2>
      </div>
      <Footer />
    </div>
  )
}