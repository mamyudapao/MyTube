import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header flex justify-between p-4">
      <h1 className="ml-8 text-3xl">MyTube</h1>
      <FontAwesomeIcon icon={faSearch} className="mr-8 fa-2x" />
    </div>
  )
}

export default Header
