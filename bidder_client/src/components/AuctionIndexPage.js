import { useState, useEffect } from "react";
import { Auction } from "../requests";
import { Link } from "react-router-dom";

function AuctionIndexPage() {

    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index().then((auctionsData) => {
            setAuctions(auctionsData);
        });
    }, []);
    return (
        <>
            <ul>
                {auctions.map((a, i) => {
                    return (
                        <li key={i}>
                            {a.id} - <Link to={`/auctions/${a.id}`}>{a.title}</Link>{" "}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}



export default AuctionIndexPage