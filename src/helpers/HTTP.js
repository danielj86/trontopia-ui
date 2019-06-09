class HTTP {

    static async HTTPCALL(URI, METHOD, HEADERS, BODY) {
        let postObj = {
            method: METHOD,
            headers: HEADERS
        };

        if (BODY) {
            postObj.body = JSON.stringify(BODY);
        }

        if (window.jwttoken) {
            postObj.headers["Authorization"] = "Bearer " + window.jwttoken;
        }

        return window.fetch(URI, postObj).then(resp => {
            if (resp.status == 200) {
                return resp.json();
            } else if (resp.status == 403) {
                return null;
            }
        });
    };

    static async GET(URI) {
        return HTTPCALL(URI, "GET", {}, null);
    };

    static async POST(URI, BODY) {
        return this.HTTPCALL(
            URI,
            "POST",
            {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            BODY
        );
    };

}

export default HTTP;