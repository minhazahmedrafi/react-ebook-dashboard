import React from 'react'
import Sidebar from './Sidebar'
import { LineChart, PieChart ,AreaChart} from 'react-chartkick';


const Summary = () => {
    return (
        <>
            <section id="summary">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-10 my-auto">
                        <div className="main-home">
                        <div className="graphChart">
                                <AreaChart data={{"2021-01-01 00:00:00 -0800": 2, "2021-01-01 00:01:00 -0800": 5,}} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Summary
