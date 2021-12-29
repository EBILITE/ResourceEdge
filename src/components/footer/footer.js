import React, { Component } from 'react'
import './footer.css';
import '../Hero.css'


class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-flex">
                    <div className="footer-1">
                        <h1 className="edge">resource edge</h1>
                        <p>Throw paperwork into the trash.</p>
                    </div>
    
                    <div className="flex-right">
                        <div className="flex-right-1">

                            <img src={process.env.PUBLIC_URL + '/images/Vectorfacebook.png' }  alt=""/>
                            <img src={process.env.PUBLIC_URL + '/images/Twitte.png'} alt="Hero_Pics"  />
                            <img src={process.env.PUBLIC_URL + '/images/Vectorlinkedin.png'} alt="Hero_Pics"  />
                            <img src={process.env.PUBLIC_URL + '/images/Vectorinsta.png'}  alt=""/>
                            
                        </div>
                        <div>
                            <p className="copy">Copyright &copy; Genesys DevStudio . All rights reserved</p>
                        </div> 
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Footer;