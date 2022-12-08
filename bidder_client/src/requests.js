// Base URL that we going to send the requests to (the API server)
const baseURL = "http://localhost:3000/api/v1";

// ===============Question=========================
export const Auction = {
    // fetch all the questions from server
    index() {
        return (
            fetch(`${baseURL}/auctions`, {


                headers: {
                    "Content-type": "application/json",
                }
            })

           
                // by default fetch is a GET request
                // so we don't need to specify the method
                // we know the path to the backend because we created the API,
                // but for external API's you will need to look at the documentation
                // If you create an API for other's to access you are responsible
                // to specify the paths for the requests in your documentation

                // fetch will always return a promise, and a promise
                // will always return a response object, and the
                // response object represents the response and it's data.
                // We want the data of the actual response
                .then((response) => {
                    // console.log(response);
                    return response.json();
                    // normally we want it to be in some sort of text formate, but now we want it in json
                    // response object has a method .json() that will parse the body of response into json format
                })
        );
    },
    create(params) {
        return fetch(`${baseURL}/auctions`, {
            method: "POST",
            credentials: "include", // need this for cookies
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(params),
        }).then((res) => res.json());
    },
    show(id) {
        return fetch(`${baseURL}/auctions/${id}`).then((res) => res.json());
    },
    // update(id, params) {
    //     return fetch(`${baseURL}/questions/${id}`, {
    //         method: "PATCH",
    //         credentials: "include",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(params),
    //     }).then((res) => res.json());
    // },
    // destroy(id) {
    //     return fetch(`${baseURL}/questions/${id}`, {
    //         method: "DELETE",
    //         credentials: "include",
    //     });
    // },
};

export const Session = {
    create(params) {
        return fetch(`${baseURL}/session`, {
            method: "POST",
            credentials: "include", // need for cookies to be sent cross origin
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(params),
        }).then((res) => res.json());
    },
    destroy() {
        return fetch(`${baseURL}/session`, {
            method: 'DELETE',
            credentials: 'include' // need for cookies to be sent cross origin
        }).then(res => res.json())
    }
};

export const User = {
    current() {
        return fetch(`${baseURL}/users/current`, {
            credentials: "include", // need for cookies to be allowed to be sent cross-origin
        }).then((res) => res.json());
    },
    create(params) {
        return fetch(`${baseURL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
};
