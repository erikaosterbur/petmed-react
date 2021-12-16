import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Login from './pages/Login';
import CreatePet from './pages/CreatePet';
import Footer from './Footer';

export default function Container() {

  return (
    <>
      <div id="main-container">
        <Header />
        <Login />
        <Router>
          <Routes>
            <Route exact path="/newpet" element={<CreatePet />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};
