import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={64} text="64%" strokeWidth={4} background backgroundPadding={6} styles={buildStyles({ backgroundColor: "#3e98c7", textColor: "#fff", pathColor: "#fff", trailColor: "transparent" })} />
        </div>
        <p className="title">Total Sales Today</p>
        <p className="amount">₹5,03,196</p>
        <p className="description">Previous transactions successful. Last payments not included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ArrowDropUpTwoToneIcon fontSize="small" />
              <div className="resultAmount">
                ₹202.37Cr
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <ArrowDropUpTwoToneIcon fontSize="small" />
              <div className="resultAmount">
                ₹62.37Cr
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small" />
              <div className="resultAmount">
                ₹2.10Cr
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
