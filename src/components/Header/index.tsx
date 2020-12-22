import {Container} from './styles'
import React from 'react';
import instagramLogo from '../../assets/instagram-logo.png'
import profilePhoto from '../../assets/profile-image.jpeg'
import { FiSend, FiHeart } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { FaRegCompass } from 'react-icons/fa'


// import { Container } from './styles';

const Header: React.FC = () => {
  return (
        <Container>
          <div id ="header-wrapper">
          <div className="image-container">
            <img src={instagramLogo} alt="instagram-logo"/>
          </div>
          <input type="text" placeholder="Search"/>
          <div className="buttons">
            <BiHomeAlt size={24} color={'#fafafa'}/>
            <FiSend size={24} color={'#fafafa'}/>
            <FaRegCompass size={24} color={'#fafafa'}/>
            <FiHeart size={24} color={'#fafafa'}/>
            <img src={profilePhoto} alt="profile-photo"/>
          </div>
          </div>
        </Container>
    );
}

export default Header;

//FiSend
//BiHomeAlt
//FaRegCompass
//FiHeart