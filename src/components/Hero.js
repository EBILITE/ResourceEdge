import React, { Component } from 'react';
import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div className="Hero-page">
                    <div className="wording">
                        <h1>Throw paperwork <br /> into the trash where <br /> it belongs.</h1>
                        <p className="para">Eliminate all the hassle involved in managing<br/> people operations by automating it .</p>
                    </div>
                    <div>
                        
                        <img src={process.env.PUBLIC_URL + '/images/pics1.png' }  alt=""/>
                    </div>
                </div>

                <div className="hum">
                    <h1 className="hum-res  side-space">Human Resources</h1>
                    <p className="onboard side-space">Onboard new employees, manage the employee lifecycle <br/> and measure employee performance.</p>
                    <div className="frame">
                        
                        <img src={process.env.PUBLIC_URL + '/images/Frame 2329.png' }  alt="" className="frameee"/>
                        <img src={process.env.PUBLIC_URL + '/images/Frame 2327.png' }  alt="" className="frameee"/>
                        <img src={process.env.PUBLIC_URL + '/images/Frame 2328.png' }  alt="" className="frameee"/>
                    </div>
                    <div className="grp-frame">
                        
                        <img src={process.env.PUBLIC_URL + '/images/Group 19842.png' }  alt="" className="grp-frame1"/>
                    </div><br/>
                </div>


                <div className="admin">
                    <div className="admin-flex">
                        <div>
                            <h1 className="admin-0">Admin & Logistics</h1><br/>
                            <p className="admin-1">Manage and track company assets as well as logistics for <br/> travelling employees</p>
                        </div>
                
                        <div classname="admin-2">
                            
                            <img src={process.env.PUBLIC_URL + '/images/Admin2.png' }  alt=""/>
                            <h2>Travel & Logistics</h2>
                            <p>Make travel requests, get <br/>approvals, and have access to <br/>travel information.
                            </p>
                        </div>
                
                        <div className="admin-2">
                            <img src="./Admin1.png" alt=""/>
                            <img src={process.env.PUBLIC_URL + '/images/Admin1.png' }  alt=""/>
                            <h2>Assets Management</h2>
                            <p>Manage the acquisition,<br/> assignment, and disposition of <br/>assets seamlessly.</p>
                        </div>
                    </div>

                    <div className="admin-3">
                        
                        <img src={process.env.PUBLIC_URL + '/images/Admin3.png' }  alt="" className="grp-frame1"/>
                    </div>

                </div>

                <div class="admin">
                    <div class="admin-flex">
                        <div classname="fin-1">
                            <h1 className="admin-0">Finance</h1><br/>
                            <p class="admin-1">Generate invoices, track expenditure, and manage complex payrolls for<br/> multiple teams and companies</p>
                        </div>
                
                        <div className="admin-2">
                            
                            <img src={process.env.PUBLIC_URL + '/images/Group 19838fin1.png' }  alt=""/>
                            <h2>RE Vouchers</h2>
                            <p>Track and manage expenditure<br/> for multiple teams across your <br/>organisation using Resource<br/> Edge Vouchers
                            </p>
                        </div>
                
                        <div className="admin-2">
                            
                            <img src={process.env.PUBLIC_URL + '/images/Group 19838fin2.png' }  alt=""/>
                            <h2>Payroll</h2>
                            <p>Our easy to use systems takes<br/> away the pain of managing <br/>complex payrolls for<br/> organisations of all sizes.</p>
                        </div>
                    </div>

                    <div class="admin-3">
                        
                        <img src={process.env.PUBLIC_URL + '/images/Groupfin3.png' }  alt="" className="grp-frame1"/>
                    </div>

                </div>

                <div class="admin">
                    <div class="admin-flex grid2x2">
                        <div>
                        
                        <img src={process.env.PUBLIC_URL + '/images/image 7logo1.png' }  alt="" className="admin-4"/>
                        </div>
                
                        <div>
                            
                            <img src={process.env.PUBLIC_URL + '/images/image 6logo2.png' }  alt=""/>
                        
                        </div>
                
                        <div>
                            
                            <img src={process.env.PUBLIC_URL + '/images/image 9logo3.png' }  alt=""/>
                        </div> 

                        <div>
                            
                            <img src={process.env.PUBLIC_URL + '/images/image 10logo4.png' }  alt=""/>
                        </div>
                    </div>

                

                </div>

            </div>
        )
    }
}
