import React, {useState, useEffect} from "react";
import Script from 'next/script' //Olspe: imported this in so I could import ionic-icons
import { themeChange } from "./helperFunctions/themeChange";  //Olspe: this is a helper function that deals with changing the background and color changes

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);  //state to hold boolean value. true means darkMode is on
    let themeIcon = <ion-icon name="moon-outline"></ion-icon>;  //default icon to show
    let sunnyIcon = <ion-icon name="sunny-outline"></ion-icon>;  //sunny icon
    let moonIcon = <ion-icon name="moon-sharp"></ion-icon>;  //moon icon
    //mode: match this variable' value to darkMode's value.
    //This gets passed into themeChange() since state varaibles should only be used in the same file it's made in
    let mode = darkMode;

    function themeToggle() {  //this gets called when theme-btn gets clicked
        setDarkMode(!darkMode);  //change darkmode value
        mode = darkMode;

    }

    useEffect(function mount() {  //keeps track of changes to darkMode value and updates page styling each time
        themeChange(mode);

    },[darkMode]);

    themeIcon = darkMode ? moonIcon : sunnyIcon;  //Olspe: this changes icon according to mode

    return (
        <nav className="hamburger-menu">  {/* Olspe: Added classNames and html elements to make the burger icon */}
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span className="myspan"></span>
            </label>
            <div className="nav menu__box">
                <a className="active ricebowl">🍚</a>
                <a className="active">Certified_Rice</a>
                <a href="../" className='menu__item'>Home</a>
                <a href="../about" className="text menu__item">About</a>
                <a href="../contact" className='menu__item'>Contact</a>
                <a href="../portfolio" className='menu__item'>Portfolio/Work</a>
                <a href="../hire" className='menu__item'>Hire me!</a>
                <a href="../blog" className='menu__item'>Blog</a>
                <a href="https://github.com/CertifiedRice/certifiedrice-website" className='menu-item'><i className="fa-brands fa-github"></i>&nbsp; Source</a>
                <button type="button" id="theme-btn" onClick={ themeToggle}>{themeIcon}</button>
            </div>
            {/*Olspe: Added Script tag to access ionic-icons */}
            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </nav>
    )
}

export default Navbar;