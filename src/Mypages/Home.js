import React from 'react'
import web from "../images/img2.png"
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        Welcome to <strong>Learning Engineering</strong> Platform
                                    </h1>
                                    <h2 className="my-3">
                                        Explore Practical world, Compare theorotical knowledge with practical world.
                                    </h2>
                                    <div className="blog-button mt-3">
                                        <NavLink to="/blog" className="button"> Read article</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-2 header-imag">
                                    <img src={web} className="img-fluid animated" alt="loading image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home