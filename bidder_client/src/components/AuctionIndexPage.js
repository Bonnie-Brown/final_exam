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
                            <p>{a.title}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}



export default AuctionIndexPage