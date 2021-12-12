import React, { useState } from 'react';
import Popularcard from './Popularcard';
import Sidebar from './Sidebar';
import MainBookPart from './MainBookPart';
import { LineChart, PieChart ,AreaChart} from 'react-chartkick';
import 'chartkick/chart.js';
import img1 from '../images/Group3.png';
import img2 from '../images/Group2.png';
import img3 from '../images/Group1.png';
import img8 from '../images/userImg.jpg';
import img9 from '../images/Group6.png';

const Ebook = () => {

const [bg, setBg] = useState();
let [name,setName] = useState("Dark Mode")

const bgChange =()=>{
let newBg = '#000';
setBg(newBg);
setName("Normal Mode")
}
const nmBg =()=>{
setBg('#fff')
setName("Dark Mode")
}
const forAlert =()=>{
    alert('Hello Sir, There is no log out page 🙂')
}
let date = new Date().toLocaleDateString();

return (
<>
    <main>
        <section id="ebook" style={{background:bg}}>
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-7">
                    <div className="middleTransPart">
                        <div className="middleHead">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="headMainInput">
                                        <input className="form-control headInput" type="text" placeholder="Search..." />
                                        <button onDoubleClick={nmBg} onClick={bgChange}
                                            className="mt-3 btn btn-primary">{name}</button>
                                        <div className="headSearchIcon">
                                            <i className='bx bx-search'></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="headDateArea text-end">
                                        <p><i className='bx bx-calendar-week'></i> Today {date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popularAllPart py-4">
                            <div className="popList">
                                <ul className="popUl">
                                    <th>Popular</th>
                                    <li>All</li>
                                    <li>Trending</li>
                                    <li>Features</li>
                                </ul>
                            </div>
                            <div className="allPopularProduct pt-4">
                                <div className="row">
                                    <div className="col-md-3">
                                        <Popularcard images={img1} title="The Everything" name="Robin Jams"
                                            dollar="$45" />
                                    </div>
                                    <div className="col-md-3">
                                        <Popularcard images={img3} title="Leaf Moris" name="Ana Frank" dollar="$60" />
                                    </div>
                                    <div className="col-md-3">
                                        <Popularcard images={img2} title="The Life Cast" name="Indo Poro"
                                            dollar="$50" />
                                    </div>
                                    <div className="col-md-3">
                                        <div className="emptyProduct">
                                            <div className="emptyTitle">
                                                <h5>23+</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainBookPart></MainBookPart>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="rightAdminPannel">
                        <div className="headerAdmin">
                            <i className='bx bx-envelope'></i>
                            <i className='bx bx-bell'></i>
                            <img src={img8} alt="" />
                            <span>coderminhaz</span>

                            <div className="dropdown">
                                <a type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className='bx bxs-chevron-down'></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">About</a></li>
                                    <li><a onClick={forAlert} className="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mainChartPart pt-4">
                            <div className="graphChart">
                                <AreaChart data={{"2021-01-01 00:00:00 -0800": 2, "2021-01-01 00:01:00 -0800": 5,}} />
                            </div>
                        </div>
                        <div className="mainBookQty mt-4">
                            <div className="singleBookQty">
                                <div className="booksIcon">
                                    <i className='bx bx-book-add'></i>
                                </div>
                                <div className="bookTitle ms-3 pt-1">
                                    <span>65</span>
                                    <p>Read Books</p>
                                </div>
                            </div>
                            <div className="singleBookQty">
                                <div className="booksIcon">
                                    <i className='bx bx-book-open'></i>
                                </div>
                                <div className="bookTitle ms-3 pt-1">
                                    <span>25</span>
                                    <p>Reading Books</p>
                                </div>
                            </div>
                            <div className="singleBookQty">
                                <div className="booksIcon">
                                    <i className='bx bxs-layer'></i>
                                </div>
                                <div className="bookTitle ms-3 pt-1">
                                    <span>355</span>
                                    <p>Readed Books</p>
                                </div>
                            </div>
                        </div>
                        <div className="buyBooksOffer pt-4">
                            <div className="offerArea text-center">
                                <p>Buy Two Books <br /> Get One Free.</p>
                                <img src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</>
)
}

export default Ebook