import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo"> M-Benz</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
        </ul>
       <div className='nav-contact'>Contact</div>
    </div>
  )
}

export default Navbar