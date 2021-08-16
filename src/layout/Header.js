import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header flex">
      <h1>MyTube</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default Header
