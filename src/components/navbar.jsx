import { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    const [show, setShow] = useState(false)

    const closeMobile = () => setShow(false)
    return (
        <div>
            <header>
                <h1>RRN</h1>
                <span onClick={() => setShow(!show)}><GiHamburgerMenu /></span>
            </header>
            {show && <main>
                <Link to='/' onClick={closeMobile}>Home</Link>
                <Link to='/about' onClick={closeMobile}>About</Link>
                <Link to='/projects' onClick={closeMobile}>Projects</Link>
            </main>}
        </div>
    )
}