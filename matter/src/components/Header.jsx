import React from 'react'
import Banner from './Banner';
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const loginList = ['로그인', '회원가입'];

  return (
      <div>
        <Banner></Banner>
          <div className='Header-container'>
              <div className='logo'>
                <img src="assets/Img/matter.logo.png" alt="matter 로고" />
              </div>

              <div className='userList'>
                  <li>로그인</li>
                  <li>회원가입</li>
                  <li className='icon icon-heart'>
                      <FontAwesomeIcon icon={faHeart} />
                  </li>
                  <li className='icon icon-cart'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  </li>
              </div>
          </div>
      </div>
  )
}

export default Header
