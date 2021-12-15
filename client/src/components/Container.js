import Header from './Header';
import Login from './pages/Login';
import Footer from './Footer';

export default function Container() {

  return (
    <>
      <div id="main-container">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
};
