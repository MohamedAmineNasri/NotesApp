import { useNavigate } from "react-router-dom"
import ProfileInfo from "../Cards/ProfileInfo"

const NavBar = () => {

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login')
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-3xl font-medium text-black py-2">Notes</h2>

      <ProfileInfo onLogout={onLogout} />
    </div>
  )
}

export default NavBar
