import HomePage from './Pages/HomePage/HomePage'
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from './Pages/ApplicationFormPage/ApplicationFormPage'
import AdminEnrollPage from './Pages/AdminEnrollPage/AdminEnrollPage'
import ListTrip from './Pages/ListTripsPage/ListTripsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppBody } from './Styled'


const App = () => {

  return (
    <AppBody>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/trips/list" element={<ListTrip />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/admin/trips/:id" element={<AdminEnrollPage />} />
        </Routes>
      </BrowserRouter>
    </AppBody>
  );
}
export default App;
