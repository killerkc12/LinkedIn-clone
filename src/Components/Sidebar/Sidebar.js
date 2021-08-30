import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const image = "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={image} alt="" />
                <Avatar className="sidebar__avtar" />
                <h2>Kiran N Chavan</h2>
                <h4>kiranchavankc112@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__stat__count">324234</p>
                </div>
                <div className="sidebar__stat">
                    <p>viewed on posts</p>
                    <p className="sidebar__stat__count">324234</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('java')}
                {recentItem('angular')}
                {recentItem('design')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
            </div>
        </div>      
    )
}

export default Sidebar