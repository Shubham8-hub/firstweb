import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../images/adruino.jpg'

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <NavLink to={props.lnk} className="btn btn-primary">Go to Blog</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
