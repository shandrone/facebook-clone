import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/SearchRounded"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className = "header">

             <div className = "header_left" >
                 <img src= "https://www.informaticsinc.com/application/files/5615/1456/2706/5PopularSocialMediaSitesandthecompaniesusingthem-900.jpg" />
                 <div className = "header_input">
                     <SearchIcon />
                     <input placeholder="Search" type = "text" />

                 </div>
             </div>

             <div className = "header_center" >
                 <div className ="header_option 
                 header_option--active" >
                    <HomeOutlinedIcon />
                 </div>
                 <div className ="header_option" >
                    <EmojiFlagsOutlinedIcon />
                 </div>
                 <div className ="header_option" >
                    <SubscriptionsOutlinedIcon />
                 </div>
                 <div className ="header_option" >
                    <StoreMallDirectoryOutlinedIcon />
                 </div><div className ="header_option" >
                    <PeopleAltOutlinedIcon />
                 </div>
                 
             </div>

             <div className = "header_right" >
                <div className = "header_info">
                    <Avatar src = {user.photoURL} />
                    <h4>{user.displayName} </h4>
                </div>
                <div>

                    <IconButton>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ForumOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationImportantOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownCircleOutlinedIcon />
                    </IconButton>
                    

                </div>

             </div>

        </div>
    )
}

export default Header
