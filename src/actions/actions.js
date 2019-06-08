import _ from "lodash";

const HTTPCALL = (URI, METHOD, HEADERS, BODY, COMMIT) => {
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

const GET = (URI, commit) => {
  return HTTPCALL(URI, "GET", {}, null, commit);
};

const POST = (URI, body, commit) => {
  return HTTPCALL(
    URI,
    "POST",
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body,
    commit
  );
};

const doLogin = ({ commit, dispatch }, dataObj) => {
  POST("/auth/token", dataObj, commit).then(res => {
    if (res == null || res.status == false) {
      commit("SHOW_LOGIN");
    } else if (res && res.status) {
      commit("USER_LOGGED_IN", res);
      dispatch("fetchInitData", { root: true });
    }
  });
};

export default {
  doLogin
};
