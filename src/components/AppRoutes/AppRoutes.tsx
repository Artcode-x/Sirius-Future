import { Route, Routes } from "react-router-dom"
import Main from "../../pages/Main/Main"
import Authoriz from "../../pages/Authoriz/Authoriz"
import Calendar from "../../pages/Calendar/Calendar"
import Profile from "../../pages/Profile/Profile"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Authoriz />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
