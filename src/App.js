import { Routes, Route } from "react-router";
import Homepage from "./page/Homepage";
import ProfilePage from "./page/ProfilePage";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
