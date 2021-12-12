import React from 'react'
import Sidebar from './Sidebar'

const Calender = () => {
return (
<>
    <section id="calender">
        <div className="row">
            <div className="col-lg-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 my-auto">
                <div className="main-home">
                    <div className="calendar-container">
                        <header>
                            <div className="day">18</div>
                            <div className="month">August</div>

                        </header>
                        <table className="calendar">
                            <thead>
                                <tr>

                                    <td>Mon</td>
                                    <td>Tue</td>
                                    <td>Wed</td>
                                    <td>Thu</td>
                                    <td>Fri</td>
                                    <td>Sat</td>
                                    <td>Sun</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="prev-month">29</td>
                                    <td className="prev-month">30</td>
                                    <td className="prev-month">31</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td className="current-day">18</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td className="next-month">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ring-left"></div>
                        <div className="ring-right"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Calender