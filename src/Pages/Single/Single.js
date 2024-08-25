import React from 'react'
import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar' 
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Normal from '../../components/normal-chart/Normal'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="single-container">
        <Navbar/>
        <div className="top">
          <div className="left"><div className="edit-btn">
              <EditTwoToneIcon/> Edit
            </div>
            <h1 className="title">Information</h1>
            
            <div className="item">
              <img src="https://images.pexels.com/photos/10193444/pexels-photo-10193444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="item-image" />
              
              <div className="details">
                <h1 className="item-name">
                  Jenny Dern
                </h1>
                <div className="detail-items">
                  <span className="item-info">Email:</span>
                  <span className="item-value">noodjenny@gmail.com</span>
                </div>
                <div className="detail-items">
                  <span className="item-info">Phone:</span>
                  <span className="item-value">+XX XXX-XXX-XXX</span>
                </div>
                <div className="detail-items">
                  <span className="item-info">Country:</span>
                  <span className="item-value">Uganda</span>
                </div>
                <div className="detail-items">
                  <span className="item-info">Address:</span> <br />
                  <span className="item-value">69 there, dig bick lovers, BBC area. (696969)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
              <Normal aspect={3 / 1} title={"User Spendings in last 6 months"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
