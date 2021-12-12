import React from 'react';

const BookList=(props)=> {
return (<>
    <div className="singleBook">
        <div className="leftTitleBook">
            <img className="img-fluid" src={props.image1} alt="" />
            <div className="bookNameTitle pt-3 ms-3">
                <h5>{props.name}</h5>
                <p>{props.title}</p>
            </div>
        </div>
        <div className="booksProgressBar">
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="50"></div>
            </div>
        </div>
        <div className="dateTime">
            <span>{props.date}</span>
        </div>
        <div className="bookIcon">
            <i className='bx bx-check-square'></i>
        </div>
    </div>
</>)
}

export default BookList