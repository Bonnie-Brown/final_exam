import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import { useState, useEffect } from "react";
import { Auction } from "../requests";
import { useParams } from "react-router-dom";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

const AuctionShowPage = (props) => {
    const [auction, setAuction] = useState({});

    useEffect(() => {
        Auction.show(props.match.params.id).then((fetchedAPIAuction) => {
            setAuction(fetchedAPIAuction);
        });
    }, []);


    const { title, description, author_full_name, end_time, price, created_at, updated_at } = auction

    return (
        <main>
            <AuctionDetails
                title={title}
                description={description}
                author={author_full_name}
                end_time={end_time}
                price = {price}
                created_at={created_at}
                updated_at={updated_at}
            />
   
            <BidList
                bids={auction.bids}
            />
        </main>
    );
};

export default withRouter(AuctionShowPage);