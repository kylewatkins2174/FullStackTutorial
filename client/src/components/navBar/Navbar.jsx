import "./navbar.scss";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>socialapp</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="search"/>
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <div className="user">

                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;



//<img src="../../pages/login/Images/People.jpg" alt="image" />