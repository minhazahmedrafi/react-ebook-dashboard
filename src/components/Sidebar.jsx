import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const forAlert =()=>{
    alert('Hello Sir, There is no Sign out page 🙂')
}
    return (
        <>
            <div className="mainSidebar">
                        <nav className="navbar navbar-expand-lg flex-lg-column">
                            <NavLink className="navbar-brand mb-3" to="#">Ebooshop</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <i className='bx bx-menu'></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="activeItem" aria-current="page" to="/home"><span><i
                                                className='bx bx-home-smile'></i>Home</span></NavLink>
                                    </li>
                                    <li className="nav-item dashboard">
                                        <NavLink className="nav-link" activeClassName="activeItem" exact to="/"><span><i className='bx bxs-dashboard'></i> Dashboard</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="activeItem" to="calender"><span><i className='bx bx-calendar-plus'></i>
                                            Calender</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="activeItem" to="members"><span><i className='bx bx-group'></i> Members</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="activeItem" to="summary"><span><i className='bx bx-analyse'></i> Summary</span></NavLink>
                                    </li>
                                    <li className="nav-item noneItem">
                                        <NavLink className="nav-link" activeClassName="activeItem" to="#"><span><i className='bx bx-cog'></i> Setting</span></NavLink>
                                    </li>
                                    <li className="nav-item noneItem">
                                        <NavLink className="nav-link signOutBtn" to="#"><span><i className='bx bx-log-out'></i>
                                            SignOut</span></NavLink>
                                    </li>
                                </ul>
                            </div>
                            <ul className="signOut">
                                <li><NavLink className="nav-link" to="#"><i className='bx bx-cog'></i> Setting</NavLink></li>
                                <li><NavLink onClick={forAlert} className="nav-link signOutBtn" to="#"><i className='bx bx-log-out'></i> Sign
                                        Out</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
        </>
    )
}

export default Sidebar
