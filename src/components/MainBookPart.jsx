import React from 'react'
import img4 from '../images/MaskGroup1.png';
import img5 from '../images/MaskGroup2.png';
import img6 from '../images/MaskGroup3.png';
import img7 from '../images/MaskGroup4.png';
import BookList from './BookList';

const MainBookPart = () => {
return (
<>
    <div className="myBooksPart">
        <div className="myBooksHead">
            <div className="row">
                <div className="col-md-6">
                    <th>My Books</th>
                </div>
                <div className="col-md-6 text-end">
                    <span>View all</span>
                </div>
            </div>
        </div>
        <div className="mainBooksPart pt-3">
            <div className="bookPart1 pt-4">
                <BookList image1={img4} date="06 Jan ,09:33 am" name="Jane Ek" title="Charllota Brone" />
            </div>
            <div className="bookPart2 pt-4">
                <BookList image1={img5} date="03 Jan ,10:13 am" name="New World" title="Aldrey Huxley" />
            </div>
            <div className="bookPart3 pt-4">
                <BookList image1={img6} date="03 Jan ,09:13 Pm" name="War Peack" title="John Danvey" />
            </div>
            <div className="bookPart4 pt-4">
                <BookList image1={img7} date="01 Jan ,12:13 am" name="Leaf Moris" title="Ana Frank" />
            </div>
        </div>
    </div>
</>
)
}

export default MainBookPart