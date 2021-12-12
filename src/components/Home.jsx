import React from 'react'
import Sidebar from './Sidebar'
import MainBookPart from './MainBookPart'

const Home = () => {
return (
<>
    <section id="home">
        <div className="row">
            <div className="col-lg-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 pt-2 my-auto">
                <div className="main-home">
                <MainBookPart></MainBookPart>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Home