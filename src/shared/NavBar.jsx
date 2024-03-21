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
            {/* <div >
                <svg className="w-40 h-20" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="black"><path d="M8 6.983a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3.017a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></path><path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clipRule="evenodd"></path></g></svg>
            </div> */}
        </nav>
    );
};

export default NavBar;