import { NavLink, Link } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";
import { BiMoviePlay } from "react-icons/bi"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNav({currentUser, handleLogout}) {


    return (
        <Navbar className="md:flex bg-amber-500 navContainer">
            <Navbar.Brand>
                <div className='logo p-2 ml-4 font-bold text-2xl flex items-center text-violet-900'>
                    <BiMoviePlay />
                    BingeFlicks
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div >
                    <Link to="/">
                        <p className="text-gray-800 hover:text-gray-400 duration-500 link text-xl">Rent Movies</p>
                    </Link>
                    </div>
                    {currentUser ?
                    <div className='flexContainer'>
                    <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button className="m-2" type="submit" onClick={() => handleLogout()}> Logout </button>
                    </Link>
                    </div>
                    :
                    <div className='flexContainer items-baseline'> 
                    <Link to="/login" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button type="submit"> Login </button>
                    </Link>

                    <Link to="/signup" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button type='submit'>Sign up</button>
                    </Link>
                    </div>
                    }
                    <div className='flexContainer items-baseline'> 
                    <Link to='/cart' className="text-gray-800 hover:text-gray-400 duration-500 link col-ends">

                        {/* Shopping bag */}
                        <HiShoppingBag className='w-10 h-10 text-violet-900 hover:text-violet-700 duration-500 col-ends' />
                    </Link>
                    </div>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarNav;