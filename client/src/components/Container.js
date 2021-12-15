import Header from './Header';
import Home from './pages/Home';
import Footer from './Footer';

export default function Container() {

  return (
    <>
      <div id="main-container">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};
