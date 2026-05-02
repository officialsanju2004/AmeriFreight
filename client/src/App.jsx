


import "./App.css";

import { createRoot } from "react-dom/client";
import "./index.css";

import "sweetalert2/src/sweetalert2.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AutoTransportWebsite from "./Ameri";
import PrivacyPolicy from "./PrivacyPolicy";
import BikeAtvTransport from "./Components/BikeAtvTransport";
import BoatShipping from "./Components/BoatShipping";
import EnclosedTrailerTransport from "./Components/EnclosedTrailerTransport";
import SpecializedTransport from "./Components/OpenTrailers";
import HeavyVehicleTransport from "./Components/HeavyVehicleTransport";
import FlatbedTrailer from "./Components/FlatbedTrailer";
import ContactUs from "./Components/ContactUs";
import About from "./Components/AboutUs";
import FormSubmissionConfirmation from "./Components/SuccessPage";
import TermsAndConditions from "./Components/TermsAndConditions";





function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<AutoTransportWebsite/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/BikeAtvRtvTransport" element={<BikeAtvTransport/>}/>
      <Route path="/BoatShipping" element={<BoatShipping/>}/>
      <Route path="/EnclosedTrailerTransport" element={<EnclosedTrailerTransport/>}/>
      <Route path="/OpenTrailers" element={<SpecializedTransport/>}/>
      <Route path="/HeavyVehicleTransport" element={<HeavyVehicleTransport/>}/>
      <Route path="/FlatbedTrailer" element={<FlatbedTrailer/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/termsAndConditions" element={<TermsAndConditions/>}/>

      <Route path="/success-page" element={<FormSubmissionConfirmation/>}/>



 


    </Routes>
   </Router>
  );
}

export default AppRouter;


