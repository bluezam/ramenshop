import React from 'react'
import PropTypes from 'prop-types'

import rameninside1 from '../images/rameninside1.jpg'
import menu1 from '../images/ramenmenu1.jpg'
import staff1 from '../images/ramenstaff1.jpg'
import map1 from '../images/googlemap1.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={rameninside1} alt="" /></span>
          <p>XXX Ramen believes in the freshest noodles by the freshest ingredients.</p>
          <p>ingredients imported straight from Japan! Chefs Imported from Japan! The best ingredient made by the best chefs! XXX Ramen is the best!</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Menu</h2>
          <span className="image main"><img src={menu1} alt="" /></span>
          <p>Try our beloved and famed Tonkotsu Ramen</p>
          <p>Check out our special menu, changes daily, and our happy hour menu!</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Location</h2>
          <span className="image main"><img src={map1} alt="" /></span>
          <p>Our Operating hours</p>
          <table>
            <tr>
              <th>Monday-Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <th>11:00am to 3:30pm & 5:00pm to 8:30pm</th>
              <th>11:00am to 3:30pm & 5:30pm to 9:30pm</th>
              <th>10:00am to 3:30pm & 5:00pm to 10:00pm</th>
            </tr>
          </table>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Social Media</h2>
          <span className="image main"><img src={staff1} alt="" /></span>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-yelp"><span className="label">Yelp</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main