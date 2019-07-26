import React from 'react'
import PropTypes from 'prop-types'
import ramen1 from '../images/ramen1.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="logo" src={ramen1} alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ramen Template</h1>
                <p>A fully responsive site template designed by <a href="https://michaelbao.dev">Michael Bao</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Menu</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Location</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Social</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
