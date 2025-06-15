import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import MainLayout from './components/Layout/MainLayout'
import Dashboard from './pages/Login'
import Rentals from './pages/Rentals'
import Contact from './pages/Contact'
import DashboardLayout from './components/Layout/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import CalendarPage from './pages/dashboard/CalendarPage'
import ThemeSettings from './pages/dashboard/ThemeSettings'
import KanbanBoard from './pages/dashboard/KanbanBoard'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        
        {/*  =========== admin dashboard ========= */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="kanban" element={<KanbanBoard />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="theme-settings" element={<ThemeSettings />} />
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />



        <Route path="*" element={<NotFound />} />


        

      </Routes>
    </>
  )
}

export default App
