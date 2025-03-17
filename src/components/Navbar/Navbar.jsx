
import React from "react";
import { useState } from "react";

import MyTitle from '../Title/MyTitle.jsx';

// import { GetImageUrl } from "../../utils";

import styles from "./Navbar.module.css"

export const Navbar = () =>
{
    const [menuOpen , setMenuOpen] = useState(false);

    return(
    <nav className={styles.navbar}>

        {/* <a className={styles.title} href="/">Tirth Chapla </a> */}

        <MyTitle 
            sentence="Tirth Chapla"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
            />

        <div className={styles.menu} >
            <img className={styles.menuBtn} src={menuOpen ?"../../../assets/nav/closeIcon.png" : "../../../assets/nav/menuIcon.png"} 
            alt="menu-button"
            onClick={()=>setMenuOpen(!menuOpen)}/>

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
            onClick={() => setMenuOpen(false)}>
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Project">Project</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>

    </nav>)
}
