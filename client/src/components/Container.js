import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Login from './pages/Login';
import PetDashboard from "./pages/PetDashboard";
import CreatePet from './pages/CreatePet';
import CreateVet from './pages/CreateVet';
import UpdatePet from './pages/UpdatePet';
import UpdateVet from './pages/UpdateVet';
import PetProfile from './pages/PetProfile';
import Account from './pages/Account';
import Footer from './Footer';

export default function Container() {

  return (
    <>
      <div id="main-container">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<PetDashboard />} />
            <Route exact path="/new-pet" element={<CreatePet />} />
            <Route exact path="/new-vet-visit" element={<CreateVet />} />
            <Route exact path="/:id/edit-pet" element={<UpdatePet />} />
            <Route exact path="/:id/edit-vet-visit" element={<UpdateVet />} />
            {/* change to /:id/pet-profile when hooked up to database */}
            <Route exact path="/pet-profile" element={<PetProfile />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};
