import React, { Component } from 'react'
//import Search from './Search'
import './Style.css'
export class SideNav extends Component {
    render() {
        return (
            <div>
                <a href='#fs' className='nav-burgur'>
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
                {/* <Search /> */}
            </div>
        )
    }
}

export default SideNav
