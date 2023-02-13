import '../../App.css'


function Footer() {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col">
                    <p>Crystal Sheeley built this webpage using a MERN stack.</p>
                    <li>Hello</li>
                    <li>World</li>
                </div>
                <div className="col">
                    <p>Contact</p>
                    <li>You're</li>
                    <li>awful</li>
                </div>
                <div className="col">
                    <p>About us</p>
                    <li>People</li>
                    <li>suck</li>
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