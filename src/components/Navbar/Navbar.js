import React from 'react'
import './navbar.scss'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import ModeNightTwoToneIcon from '@mui/icons-material/ModeNightTwoTone';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import avatar from '../../assets/images/3588_1624534522.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="search">
          <input type="text" placeholder="Search here" />
          <SearchTwoToneIcon />
        </div>
        <div className="items">
          <div className="item">
            <TranslateTwoToneIcon className="icon" />
            English
          </div>
          <div className="item">
            <ModeNightTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneTwoToneIcon className="icon" />
            <div className="counter">
              99+
            </div>
          </div>
          <div className="item">
            <ChatBubbleTwoToneIcon className="icon" />
            <div className="counter">
              99+
            </div>
          </div>
          <div className="item">
            <ListAltTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <img src={avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar