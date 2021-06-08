import React, { Component } from 'react';
//IMAGES
import ProfilePicture from '../assets/images/Profile_Picture.png'
import ProfileName from '../assets/images/Luca_Biglieri.png'
import ProfileRole from '../assets/images/Graphic_DesignerTarget.png'
import Instagram from '../assets/images/Instagram.png'
import Linkedin from '../assets/images/Linkedin.png'
import Gmail from '../assets/images/Gmail.png'
import Behance from '../assets/images/Behance.png'
import Footer from "../assets/images/It's_Lookab.png"
//STYLE
import './css/profile.css'

class Profile extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='profileContainer'>

                <div className='profileImageContainer'>
                    <img src={ProfilePicture} />
                </div>

                <div className='profileNameContainer'>
                    <img src={ProfileName} />
                </div>

                <div className='profileRoleContainer'>
                    <img src={ProfileRole} />
                </div>

                <div className='profileIconsContainer'>
                    <div className='profileIconsRow'>
                        <div className='profileIconsItem'>
                            <a href=''><img src={Instagram} /></a>
                            <a href=''>look.ab</a>
                        </div>
                        <div className='profileIconsItem'>
                            <a href=''><img src={Behance} /></a>
                            <a href=''>lucabiglieri1</a>
                        </div>
                    </div>
                    <div className='profileIconsRow'>
                        <div className='profileIconsItem'>
                            <a href=''><img src={Gmail} /></a>
                            <a href=''>biglieriluca@gmail.com</a>
                        </div>
                        <div className='profileIconsItem'>
                            <a href=''><img src={Linkedin} /></a>
                            <a href=''>Luca Biglieri</a>
                        </div>
                    </div>
                </div>

                <div className='profileFooterContainer'>
                    <img src={Footer} />
                </div>

            </div>
        );
    }
}

export default Profile;