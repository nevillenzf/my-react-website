import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import resume from '../Images/resume.pdf';
import {Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
import store from '../index';

class SocialBar extends React.Component {

  componentDidMount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  componentWillUnmount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  render() {
    return (
    <div className="SocialBarContainer">

    <Col >
      <div className="SocialBar">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Resume</Tooltip>} 
                          placement={window.innerWidth > 480 ? "left" : "top"}>
            <button className="socialBtn" onClick={() => window.location.href=resume}>
              <FontAwesomeIcon icon={faFile} size={window.innerWidth > 480 ? "1x" : "lg"}/>
            </button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" >Github</Tooltip>} 
                          placement={window.innerWidth > 480 ? "left" : "top"}>
            <button className="socialBtn" onClick={() => window.location.href='https://github.com/nevillenzf'}>
              <FontAwesomeIcon icon={faGithub} size={window.innerWidth > 480 ? "1x" : "lg"}/>
            </button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">LinkedIn</Tooltip>} 
                          placement={window.innerWidth > 480 ? "left" : "top"}>
            <button className="socialBtn" onClick={() => window.location.href='https://linkedin.com/in/nevillenzf'}> 
              <FontAwesomeIcon icon={faLinkedin} size={window.innerWidth > 480 ? "1x" : "lg"}/> 
            </button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Instgram</Tooltip>} 
                          placement={window.innerWidth > 480 ? "left" : "top"}>
            <button className="socialBtn" onClick={() => window.location.href='https://instagram.com/nevillenzf'}> 
              <FontAwesomeIcon icon={faInstagram} size={window.innerWidth > 480 ? "1x" : "lg"}/> 
            </button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Facebook</Tooltip>} 
                          placement={window.innerWidth > 480 ? "left" : "top"}>
            <button className="socialBtn" onClick={() => window.location.href='https://facebook.com/nevillenzf'}> 
              <FontAwesomeIcon icon={faFacebook} size={window.innerWidth > 480 ? "1x" : "lg"}/> 
            </button>
          </OverlayTrigger>
        {/* Vertical line for styling purposes*/}
      </div>
      <div className="lineContainer">
        <div className="vertLine"/>
      </div>
    </Col>

    </div>)
  }

  //Master internal function for key down events - listener god
  keyDownKing = (event) => {
    // 40 is down key
    if (event.keyCode === 38 )
    {
      event.preventDefault();
      this.moveToContent();
    }
  }

  moveToContent(){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  handleClick = (eventKey) => {
    //Updates the Redux state to reflect the current selected section
    store.dispatch({type: "CURR_SECTION", sect: eventKey});
    if (eventKey === 'Resume')
    {

    }
  }

}

export default SocialBar;
