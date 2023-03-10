import '../../App.css'


function Footer() {
    return ( 
        <div className="footer flex justify-center">
            <div className="container">
                <div className="row">
                <div className="col">
                    <p>Crystal Sheeley built this webpage using a MERN stack.</p>
                </div>
                <div className="col">
                    <p>About us</p>
                </div>
                </div>
                <div className="row">
                    &copy;{new Date().getFullYear()} || All rights reserved | Terms of Service | Privacy
                </div>
            </div>
        </div>
     );
}

export default Footer;