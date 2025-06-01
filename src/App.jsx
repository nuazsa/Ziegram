import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "./features/auth/pages/SigninPage";
import NotfoundPage from "./pages/NotfoundPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </Router>
  )
}