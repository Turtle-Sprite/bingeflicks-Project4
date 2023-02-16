import { NavLink, Link } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";
import { BiMoviePlay } from "react-icons/bi"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNav({currentUser}) {


    return (
        <Navbar className="md:flex bg-amber-500">
            <Navbar.Brand>
                <div className='ml-4 font-bold text-2xl flex items-center text-violet-900'>
                    <BiMoviePlay />
                    BingeFlicks
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">
                        <p className="text-gray-800 hover:text-gray-400 duration-500 link text-xl">Rent Movies</p>
                    </Nav.Link>

                    {currentUser ?
                    <div className='col-ends'>
                    <Nav.Link href="/logout" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button type="submit"> Logout </button>
                    </Nav.Link>
                    </div>
                    :
                    <div>
                    <Nav.Link href="/login" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button type="submit"> Login </button>
                    </Nav.Link>

                    <Nav.Link href="/signup" className="text-gray-800 hover:text-gray-400 duration-500 link">
                        <button type='submit'>Sign up</button>
                    </Nav.Link>
                    </div>
                    }
                    <Nav.Link href='/cart' className="text-gray-800 hover:text-gray-400 duration-500 link col-ends">

                        {/* Shopping bag */}
                        <HiShoppingBag className='w-10 h-10 text-violet-900 hover:text-violet-700 duration-500 col-ends' />

                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarNav;