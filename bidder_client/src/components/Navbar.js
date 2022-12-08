import { NavLink } from 'react-router-dom';
import { Session } from '../requests';

const NavBar = () => {

    // const handleSignOut = () => {
    //     Session.destroy().then(() => {
    //         onSignOut()
    //     })
    // }

    return (
       <nav>
            <NavLink to='/'>Home</NavLink>
       </nav>
    )
}

export default NavBar;
