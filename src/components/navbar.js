import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </center>
        </div>
    )
}