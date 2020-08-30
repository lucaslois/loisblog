import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import { Col, Row } from "react-bootstrap"
import LogoImage from '../images/logo.png'
import Navbar from "./Navbar/navbar"


const Header = ({ siteTitle }) => (
  <header className='header'>
    <Row>
      <Col xs={2} className='d-flex align-items-end justify-content-end'>
        <img className='logo d-block' alt='Lucas Lois Logo' src={LogoImage} />
      </Col>
      <Col className='d-flex align-items-center'>
        <div>
          <h1>Lucas Lois | Blog</h1>
          <Navbar />
        </div>
      </Col>
    </Row>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
