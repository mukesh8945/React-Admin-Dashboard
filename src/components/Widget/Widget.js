import React from 'react'
import './widget.scss'
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';


const Widget = ({type}) => {
    let data;

    // temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user": // this means if type="user" is passed as a prop then following items will be rendered.
            data = {
                title: "USERS",
                isMoney: false,
                link: "View all",
                icon: (
                    <PersonTwoToneIcon className="icon"/> 
                )
            };
        break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all",
                icon: (
                    <ShoppingCartTwoToneIcon className="icon pink"/> 
                )
            };
        break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnTwoToneIcon className="icon green"/> 
                )
            };
        break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletTwoToneIcon className="icon blue"/> 
                )
            };
        break;
            default:
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && `₹`} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            
            
            <div className="percentage positive">
            <ArrowDropUpTwoToneIcon/>
             {diff}%
            </div>
            {data.icon}
         </div>
    </div>
  )
}

export default Widget