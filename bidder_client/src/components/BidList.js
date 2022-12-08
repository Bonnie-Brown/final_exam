import React from 'react';
import BidDetails from './BidDetails';

const BidList = ({ bids }) => {
    return (
        <React.Fragment>
            {
                bids ?
                    bids.map((b, i) => {
                        return <BidDetails
                            key={i}
                            bid_value={b.bid_value}
                            author={b.author_full_name}
                            created_at={b.created_at}
                        />
                    })
                    :
                    null
            }
        </React.Fragment>
    )
}

//React render can only render one component at a time, and to bypass that we created parent elements
//to contain a bunch of sibling elements, like the iterated AnswerDetails elements within a div in the 
//AnswerList component.  However, if you don't want to specifically create extra html elements just to 
//contain these elements (for example, a div element could create additional unwanted spacing and margins), React has other 
//ways you can manage:
//React.Fragment is a special component that you can use if you want to list a bunch of sibling
//elements but do not want to specially create a container for them
//You can use <React.Fragment></React.Fragment> or shorthand is: <></>

export default BidList;
