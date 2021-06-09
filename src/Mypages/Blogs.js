import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
// import Sdata from './Sdata'

const Blogs = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Read articles of your wish</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className ="row gy-4">
                        {/* <Card /> */}
                        {
                            Sdata.map((val, ind) => {
                                return <Card key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    description={val.description}
                                    lnk={val.lnk}
                                />
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs
