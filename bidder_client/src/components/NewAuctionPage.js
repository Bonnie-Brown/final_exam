const NewAuctionForm = props => {
    const getDataAndSubmit = (event) => {
        //get the form data
        //pass it into the function from props
        //props.submitForm
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("title"), fd.get("description"))
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                end_date: fd.get("end_date"),
                price: fd.get("price"),
                created_at: new Date(),
                id: 5
            }
        )
        event.currentTarget.reset()
    }
    return (
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" name="description" id="" />
            </div>
            <div>
                <label htmlFor="end_date">End Date</label>
                <br />
                <input type="text" name="end_date" id="" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="price" id="" />
            </div>
            <div>
                <input type="submit" value="Create Question" />
            </div>

        </form>
    )
}

export default NewAuctionForm;
