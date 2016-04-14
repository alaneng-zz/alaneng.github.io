import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class SocialMenu extends React.Component {
  render() {
    const links = {
      'Facebook': 'https://www.facebook.com/LLCSF',
      'Twitter': 'https://twitter.com/LLCTutoringSF',
      'Blog': 'http://www.literacyandlanguagecentersf.com/whats-new'
    }

    const opacity = 0.5

    const socialMenuItems = this.props.socialMenu.map(socialMenuItem => {
      let imageStyle = {
        backgroundSize: '50% 120%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,' + opacity + '),rgba(255,255,255,' + opacity + ')), url(' + 'images/' + socialMenuItem + '.jpg' + ')',
        backgroundRepeat: 'no-repeat'
      }
      return (
        <ListGroupItem key={socialMenuItem}
                       href={links[socialMenuItem]}
                       style={imageStyle}>
          <p>{socialMenuItem}</p>
        </ListGroupItem>
      )
    })

    return (
      <ListGroup className='socialMenuItem text-center'>
        {socialMenuItems}
      </ListGroup>
    )
  }
};