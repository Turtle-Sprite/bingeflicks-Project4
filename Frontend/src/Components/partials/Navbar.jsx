import { NavLink, Link } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";

function Navbar() {
    return (
        <nav className="nav-bar shadow-md sticky top-0 z-20 w-full">
            <div className="container md:flex bg-white py-4">
                <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl-justify-end items-center">
                    <NavLink to="/">
                        <h2>Rent Movies</h2>
                    </NavLink>
                    <NavLink to="/login">
                        <h2>Login</h2>
                    </NavLink>
                    <NavLink to="/signup">
                        <h2>Sign up</h2>
                    </NavLink>

                    <NavLink to='/cart'>
                        <div className="nav-bar">
                            {/* Shopping bag */}
                            <HiShoppingBag className='w-12 h-12'/>
                            <span className="bag-quantity">
                                <span>0</span>
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;