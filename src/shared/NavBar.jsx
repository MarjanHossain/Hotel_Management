import { Link } from "react-router-dom";
import logo from "../assets/images/logo/tasteeLogo.png"
const NavBar = () => {
    return (
        <nav className="">
            <div className="navBar container ">
                {/*------ Logo----- */}
                <div>
                    <img className="h-24" src={logo} alt="" />
                </div>
                <div>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>All Items</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link>Login</Link></li>
                        <li><Link>Profile</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;