import { Link } from "react-router";

export default function Navbar(){
    return (
        <div className="navbar-container">
            <h1>KELOMPOK 8</h1>
            <div className="navbar right-container">
                <nav>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/sumber"}>Sumber</Link>
                </nav>
            </div>
        </div>
    )
}