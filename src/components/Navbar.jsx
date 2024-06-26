import discordLogo from '../assets/discordLogo.png';
import menuIcon from '../assets/menuIcon.png';

function Navbar() {
    return (
        <header className='navbar'>
            <img
            src = {discordLogo}
            className='logo'
            alt='discord logo could not be loaded'
            />
            
            <img 
            src = {menuIcon}
            alt='menu icon not found'
            />

        </header>

    );

}
export default Navbar;