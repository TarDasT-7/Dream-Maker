import { Link, NavLink } from 'react-router-dom';
import classes from './Footer.module.scss'

const Footer = () => {

    return(
        <div className={classes.footer}>
            <div className={classes.creator}>
                <p>
                    <Link to="/"> Created By Tardast </Link>
                </p>
            </div>

            <div className={classes.menu}>
                <ul>
                    <li>
                        <NavLink to="/about-me-page" className={(navData) => (navData.isActive ? "active-link" : "")}>
                        About Me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer