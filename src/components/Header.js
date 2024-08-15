
import { useState } from "react"

const Header = () => {

    const {logName, setlogName} = useState("login");
    return ( <div className="app-header">
                {/* <img className="app-logo" src="https://logowik.com/content/uploads/images/coffee-shop4933.logowik.com.webp"
                    alt="app=log" /> */}

            <nav className="header-nav">
                <ul>
                    <li>Home</li>
                    <li>Orders</li>
                    <li>About</li>
                    <li>Contact</li>
                    {/* <button > {logName}</button> */}
                </ul>

            </nav>

    </div>)
}

export default Header