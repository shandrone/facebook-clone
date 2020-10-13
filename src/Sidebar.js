import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className = "sidebar">
            <SidebarRow src={user.photoURL} 
            title={user.displayName} />
            
            <SidebarRow 
            Icon= {LocalHospitalOutlinedIcon}
            title='Nearby Hospitals'/>
            
            <SidebarRow Icon={EmojiFlagsOutlinedIcon} title='Pages'/>
            
            <SidebarRow Icon={PeopleOutlineOutlinedIcon} title='Your Circle'/>
            
            <SidebarRow Icon={ChatOutlinedIcon} title='Instant Message'/>
            
            <SidebarRow Icon={StorefrontOutlinedIcon} title='Online Market'/>
            <SidebarRow Icon={PlayCircleFilledWhiteOutlinedIcon} title='Videos'/>
            <SidebarRow Icon={StorefrontOutlinedIcon} title='Online Market'/>
        </div>
    )
}

export default Sidebar
