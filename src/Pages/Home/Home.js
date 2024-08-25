import React from 'react'
import Featured from '../../components/featured-chart/Featured'
import Navbar from '../../components/Navbar/Navbar'
import Normal from '../../components/normal-chart/Normal'
import Sidebar from '../../components/Sidebar/Sidebar'
import List from '../../components/table/Table'
import Widget from '../../components/Widget/Widget'
import './home.scss'

const Home = () => {
    return (
        <>
        <div className="home">
            <Sidebar/>
            <div className="home-container">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Normal title={"Last 6 months revenue"} aspect={2 / 1}/>
                </div>
                <div className="list-container">
                    <div className="list-title">Latest Transactions</div>
                    <List/>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Home
