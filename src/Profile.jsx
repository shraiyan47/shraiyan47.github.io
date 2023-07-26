import React, { useEffect } from 'react'
import './assets/custom.css'
import Propic from './assets/Caaspture.PNG'
import profileData from "./assets/data.json"
import CV from './assets/Shahadat Hossain CV - +8801859506936 .pdf'

export default function Profile() {

    useEffect(() => {
        document.title = 'Shahadat\'s Portfolio || SHR47';

        document.head.innerHTML += `
            <meta name='description' content='${profileData.meta_description}'/>
            <meta name='keywords' content='${profileData.meta_keywords}'/>
            <meta name='author' content='${profileData.meta_author}'/>
            `
    }, []);

    const handleDownloadClick = () => {
        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = CV;
        downloadLink.download = profileData.cv_pdf;
        downloadLink.click();
    };


    return (
        <div>
            <div className="row">
                <div className="col-lg-4">

                    {/* Short Me  */}
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src={Propic} alt="Shahadat Hossain (Raiyan) || #shr47"
                                className="rounded-circle img-fluid" style={{ width: "150px" }} />
                            <h1 style={{ display: "none" }}>Shahadat Hossain Raiyan, shr47, Software Engineer</h1>
                            <h5 className="my-3">{profileData.fullname}</h5>
                            <p className="text-muted mb-1">{profileData.position}</p>
                            <p className="text-muted mb-4">{profileData.short_location}</p>
                            <div className="d-flex justify-content-center mb-2">
                                {/* <button type="button" className="btn btn-primary">Follow</button> */}
                                <a href={"mailto: " + profileData.email}><button type="button" className="btn btn-outline-primary ms-1"> <b>✉</b> Email Me</button></a>
                                <a href={"tel:" + profileData.phone}><button type="button" className="btn btn-outline-primary ms-1">📞 Call Me</button></a>
                                <button type="button" className="btn btn-outline-primary ms-1" onClick={handleDownloadClick}>
                                    <i class="fa fa-download" aria-hidden="true"></i> &nbsp;
                                    CV
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Online URLs  */}
                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fas fa-globe fa-lg text-warning"></i>
                                    <a href={profileData.website} target="_blank" rel="noreferrer"><p className="mb-0">shraiyan47.github.io</p></a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                    <a href={profileData.github} target="_blank" rel="noreferrer"><p className="mb-0">Github || shraiyan47</p></a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-stack-overflow fa-lg" style={{ color: "#ac2bac" }}></i>
                                    <a href={profileData.stackoverflow} target="_blank" rel="noreferrer"> <p className="mb-0">Stackoverflow || mr-shr47</p></a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                    <i className="fab fa-linkedin-in fa-lg" style={{ color: "#3b5998" }}></i>
                                    <a href={profileData.linkedin} target="_blank" rel="noreferrer"> <p className="mb-0">LinkedIn || shahadat-hossain-swe</p></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Education  */}
                    <div className="card mt-4 mb-lg-0">
                        <h5 class="card-header">Education</h5>
                        <div class="card-body">
                            {
                                profileData.education.map((x, i) =>
                                (<>
                                    <ul class="list-group list-group-light list-group-small" key={i}>
                                        <li class="list-group-item px-4"><b>{x.inst_name}</b></li>
                                        <li class="list-group-item px-5">{x.duration}</li>
                                        <li class="list-group-item px-5">{x.degree}</li>
                                    </ul>
                                </>)

                                )
                            }
                        </div>
                    </div>

                    {/* Skills  */}

                    <div className="card mt-4 mb-md-0">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">Skills</span> Status </p>

                        </div>
                        <div className="card-body">

                            {
                                profileData.skills.map((x, i) =>
                                (
                                    <>
                                        <p className="mt-2 mb-2" style={{ fontSize: ".77rem" }} key={i}>{x.value}</p>
                                        <div className="progress rounded" style={{ height: "5px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: x.range + "%" }} aria-valuenow={x.range}
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </>
                                )
                                )
                            }

                        </div>
                    </div>

                    {/* Education  */}
                    <div className="card mt-4 mb-lg-0">
                        <h5 class="card-header">Extracurricular activity </h5>
                        <div class="card-body">
                            {
                                profileData.extra_activities.map((x, i) =>
                                (<>
                                    <ul class="list-group list-group-light list-group-small" key={i}>
                                        <li class="list-group-item px-4"><b>{x.activity_name}</b></li>
                                        <li class="list-group-item px-5">{x.inst_name}</li>
                                        {(x.description) && <li class="list-group-item px-5">{x.description}</li>}
                                    </ul>
                                </>)

                                )
                            }
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
                                    <p className="text-muted mb-0">{profileData.fullname}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{profileData.email}</p>
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
                                    <p className="text-muted mb-0">{profileData.phone} </p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{profileData.long_location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Me  */}
                    <div className="card mb-4">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">About me</span>  </p>
                        </div>
                        <div className="card-body">

                            <p>
                                {profileData.about_me}
                            </p>
                        </div>
                    </div>

                    {/* Experiences  */}
                    <div className="card mt-4 mb-md-0">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">Experiences</span> Timeline </p>
                        </div>
                        <div className="card-body">
                            <div class="timeline">

                                {
                                    profileData.experience.map((x, i) => (
                                        <>
                                            <div className={(i % 2 !== 0) ? "timeline-container timeline-right" : "timeline-container timeline-left"}>
                                                <div class="timeline-content">
                                                    <h4 className='text-danger'>{x.duration}</h4>
                                                    {
                                                        (x.working) && <small>Currently Working</small>
                                                    }
                                                    <h5 className='text-info'>{x.inst_name}</h5>
                                                    <p className='text-primary fw-bold' style={{ fontSize: "13px" }}>{x.position}</p>
                                                    <p className='text'>{x.description}</p>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }


                            </div>
                        </div>
                    </div>

                    {/* Projects  */}
                    <div className="card mt-4 mb-md-0">
                        <div className='card-header'>
                            <p className="mb-4"><span className="text-primary font-italic me-1">Projects </span> </p>
                        </div>
                        <div className="card-body">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                {
                                    profileData.projects.map((x,i) => (
                                        <>
                                            <div class="col" key={i}>
                                                <div class="card">

                                                    <div class="card-body">
                                                        <h5 class="card-title"><span className="text-primary me-1">{x.name}  </span></h5>
                                                        <p class="card-text">
                                                            <ul>
                                                            {(x.description.split("//")).map(x=>(
                                                                <>
                                                                    <li>
                                                                        {x}
                                                                    </li>
                                                                </>
                                                            ))}
                                                            </ul>
                                                        </p>
                                                        <div class="card-footer">
                                                            <small class="fst-italic">{x.technologies}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
