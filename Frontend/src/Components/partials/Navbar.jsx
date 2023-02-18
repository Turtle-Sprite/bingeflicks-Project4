import { NavLink, Link } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";
import { BiMoviePlay } from "react-icons/bi"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNav({ currentUser, handleLogout }) {


    return (
        <nav className="md:flex bg-amber-500 navContainer">
            <div className='logo p-2 ml-4 font-bold text-2xl flex items-baseline text-violet-900'>
                <BiMoviePlay />
                BingeFlicks
                    <div className='mx-4'>
                    <Link to="/">
                        <h2 className="text-gray-800 hover:text-gray-400 duration-500 link text-xl no-underline ">Rent Movies</h2>
                    </Link>
                </div>
            </div>
                
            <div className='flexContainer flex items-end mx-5'>
                {currentUser ?
                    <div className='flexContainer'>
                        <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500 link">
                            <button className="mx-2" type="submit" onClick={() => handleLogout()}> Logout </button>
                        </Link>
                    </div>
                    :
                    <div className='flexContainer items-baseline'>
                        <Link to="/login" className="text-gray-800 hover:text-gray-400 duration-500 link">
                            <button className="mx-2" type="submit"> Login </button>
                        </Link>

                        <Link to="/signup" className="text-gray-800 hover:text-gray-400 duration-500 link">
                            <button className="mx-2" type='submit'>Sign up</button>
                        </Link>
                    </div>
                }
                <div className='flexContainer items-baseline'>
                    <Link to='/cart' className="text-gray-800 hover:text-gray-400 duration-500 link col-ends">

                        {/* Shopping bag */}
                        <HiShoppingBag className='w-10 h-10 text-violet-900 hover:text-violet-700 duration-500 col-ends ml-3' />
                    </Link>
                </div>
                </div>
        </nav>
    );
}

export default NavbarNav;