import React from 'react'
import './sidebar.scss'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';
import SystemSecurityUpdateGoodTwoToneIcon from '@mui/icons-material/SystemSecurityUpdateGoodTwoTone';
import AnchorTwoToneIcon from '@mui/icons-material/AnchorTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo text-danger">MUKESH</span>
        </Link>

      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardTwoToneIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">
            LISTS
          </p>
          <Link to='/users'>
            <li>
              <PeopleAltTwoToneIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products'>
            <li>
              <Inventory2TwoToneIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <BorderColorTwoToneIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningTwoToneIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">
            USEFUL LINKS
          </p>
          <li>
            <QueryStatsTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsTwoToneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">
            SERVICES
          </p>
          <li>
            <SystemSecurityUpdateGoodTwoToneIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <AnchorTwoToneIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsTwoToneIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">
            USER
          </p>
          <li>
            <AccountBoxTwoToneIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutTwoToneIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-options"></div>
        <div className="color-options"></div>
      </div>
    </div>
  )
}

export default Sidebar