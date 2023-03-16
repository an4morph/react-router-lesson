import { Outlet } from "react-router-dom"
import { Nav } from "../../components/nav"
import { Footer } from "../footer"
import './layout.css'

export const Layout = () => {
  return (
    <div>
      <Nav />
      
      <div className="content">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  )
}