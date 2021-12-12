import React from 'react';

const Popularcard = (props) => {
return (
<>
    <div className="singlePart">
        <div className="singleImg text-center py-3">
            <img className="img-fluid" src={props.images} alt="" />
            <p>{props.title}</p>
            <span>{props.name}</span>
            <span className="imgAmmount">{props.dollar}</span>
        </div>
    </div>
</>
)
}

export default Popularcard