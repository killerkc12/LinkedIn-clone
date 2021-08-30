import { Avatar, Icon } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({avtar, Icon, title}) => {
    return (
        <div className="headerOption">
            {
                Icon &&
                    <Icon className="headerOption__icon" />
            }
            {
                avtar && 
                    <Avatar className="headerOption__avtar" src={avtar} />
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
