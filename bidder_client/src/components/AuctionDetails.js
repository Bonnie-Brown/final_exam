import React from 'react'; //this used to be important, but for new react this is optional becausereact is already importing from react by default configurations

const AuctionDetails = ({ title, description, author, end_time, price, created_at, updated_at }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{end_time}</p>
            <p>{price}</p>
            <p>By {author}</p>
            <p>
                <small>Created: {created_at}</small>
                <small>Last edited: {updated_at}</small>
            </p>
        </div>
    )
}

export default AuctionDetails;
//export default will make QuestionDetails the default value when importing
//In this case, with import you don't need object destructuring anymore {QuestionDetails}