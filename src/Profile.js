import React from 'react'
import './assets/custom.css'
import Propic from './assets/Caaspture.PNG'

export default function Profile() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src={Propic} alt="Shahadat Hossain (Raiyan) #shr47"
                                className="rounded-circle img-fluid" style={{ width: "150px" }} />
                            <h5 className="my-3">Shahadat Hossain</h5>
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">Dhaka, Bangladesh</p>
                            <div className="d-flex justify-content-center mb-2">
                                {/* <button type="button" className="btn btn-primary">Follow</button> */}
                                <a href="mailto: shraiyan47@gmail.com"><button type="button" className="btn btn-outline-primary ms-1">Email Me</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fas fa-globe fa-lg text-warning"></i>
                                    <p className="mb-0">https://shraiyan47.github.io</p>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                    <a href='https://github.com/shraiyan47' target="_blank" rel="noreferrer"><p className="mb-0">github.com/shraiyan47</p></a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-stack-overflow fa-lg" style={{ color: "#ac2bac" }}></i>
                                    <a href='https://stackoverflow.com/users/11209333/mr-shr47' target="_blank" rel="noreferrer"> <p className="mb-0">stackoverflow.com/users/11209333/mr-shr47</p></a>
                                </li>
                                {/* <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                    <p className="mb-0">mdbootstrap</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="card mt-4 mb-lg-0">
                        <h5 class="card-header">Education</h5>
                        <div class="card-body">
                            <ul class="list-group list-group-light list-group-small">
                                <li class="list-group-item px-4"><b>Daffodil International University</b></li>
                                <li class="list-group-item px-5">September 2015 - December 2019</li>
                                <li class="list-group-item px-5">B.Sc in Software Engineering</li>
                            </ul>

                            <ul class="list-group list-group-light list-group-small">
                                <li class="list-group-item px-4"><b>Ideal College, Dhanmondi</b></li>
                                <li class="list-group-item px-5"> 2011 -  2014</li>
                                <li class="list-group-item px-5">HSC</li>
                            </ul>

                            <ul class="list-group list-group-light list-group-small">
                                <li class="list-group-item px-4"><b>Dhanmondi Govt. Boys' High School</b></li>
                                <li class="list-group-item px-5"> 2001 -  2011</li>
                                <li class="list-group-item px-5">SSC</li>
                            </ul>
                            


                        </div>
                    </div>


                </div>


                <div className="col-lg-8">

                    {/* Personal Info  */}

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Shahadat Hossain</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">shraiyan47@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            {/* <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">+88 01859506936 </p>
                                </div>
                            </div> */}
                            {/* <hr /> */}
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0"> +88 01859506936 </p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Skills  */}

                    <div className="card mb-4 mb-md-0">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">Skills</span> Status </p>

                        </div>
                        <div className="card-body">
                            <p className="mb-1" style={{ fontSize: ".77rem" }}>HTML, CSS</p>
                            <div className="progress rounded" style={{ height: "5px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>JavaScript</p>
                            <div className="progress rounded" style={{ height: "5px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>PHP</p>
                            <div className="progress rounded" style={{ height: "5px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>MySQL</p>
                            <div className="progress rounded" style={{ height: "5px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "78%" }} aria-valuenow="78"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>MongoDB</p>
                            <div className="progress rounded mb-2" style={{ height: "5px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    {/* Experiences  */}
                    <div className="card mt-4 mb-md-0">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">Experiences</span> Timeline </p>
                        </div>
                        <div className="card-body">
                            <div class="timeline">
                                <div class="timeline-container timeline-left">
                                    <div class="timeline-content">
                                        <h4 className='text-danger'>February 2020</h4>
                                        <h5 className='text-info'>Zaimah Technology</h5>
                                        <p className='text'>Worked as a PHP Developer. Focused on raw coding for backend. Also worked on Vanilla JavaScript. Made some big projects like ERP & Some management system.</p>
                                    </div>
                                </div>
                                <div class="timeline-container timeline-right">
                                    <div class="timeline-content">
                                        <h4 className='text-danger'>February 2021</h4>
                                        <h5 className='text-info'>Bdtask Limited</h5>
                                        <p className='text'>Worked here as a PHP Developer too, but on a Framework called Codeigniter. Focused on rest api based back-end and also front-end. Also worked on Vanilla JavaScript. Made a Ticket Management System.</p>
                                    </div>
                                </div>
                                <div class="timeline-container timeline-left">
                                    <div class="timeline-content">
                                        <h4 className='text-danger'>June 2021</h4>
                                        <h5 className='text-info'>LEADS Corporation Limited</h5>
                                        <p className='text'>Working here as a ReactJS based front-end developer. Also doing RND on AI. Learning NodeJS and trying to get the MERN Stack as well.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
