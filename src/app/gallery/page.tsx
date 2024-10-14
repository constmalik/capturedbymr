// import '../../global.css';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export default async function Gallery() {
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