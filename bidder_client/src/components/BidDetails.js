const BidDetails = ({ bid_value, author, created_at}) => {
    return (
        <div>
            <p>{bid_value}</p>
            <p>By {author}</p>
            <p>
                <strong>Created at:</strong>
                {created_at.toLocaleString()}
            </p>
        </div>
    )
}

export default BidDetails;