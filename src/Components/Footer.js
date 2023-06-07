import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff"
                , marginRight: "2rem"}}/>
                    <div>
                        <p>Dairout, Assiut</p>
                        <p>Egypt</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff"
                , marginRight: "2rem"}}/>
                +201000133555</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff"
                , marginRight: "2rem"}}/>
                yasser.mostafa76@yahoo.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>
                    This is me Yasser Salim. 
                    I enjoy discussing new projects and design challenges
                </p>
                <div className="social">
                    <FaFacebook
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "2rem"}}
                    />
                    <FaLinkedin
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "2rem"}}
                    />
                    <FaTwitter
                        size={30} 
                        style={{color: "#fff",
                        marginRight: "2rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer