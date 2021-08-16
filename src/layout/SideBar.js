import './SideBar.css'

const SideBar = () => {
  return (
    <div className="sidenav flex flex-col justify-between">
      <div className="upside">
        <a href="#">Home</a>
        <a href="#">Trend</a>
        <a href="#">Channels</a>
      </div>

      <div className="downside">
        <a href="#" className="">Settings</a>
      </div>
    </div>
  )
}

export default SideBar
