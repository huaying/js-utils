function axios({ method, url, params, data }) {
  method = method.toUpperCase();

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    let str = "";
    for (let k in params) {
      str += `${k}=${params[k]}&`;
    }
    str = str.slice(0, -1);
    xhr.open(method, url + "?" + str);

    if (method === "POST" || method === "PUT" || method === "DELETE") {
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response,
          });
        } else {
          reject(new Error(xhr.status));
        }
      }
    };
  });
}

axios.get = function (url, options) {
  return axios({ ...options, method: "GET", url });
};

axios.post = function (url, options) {
  return axios({ ...options, method: "POST", url });
};

axios.put = function (url, options) {
  return axios({ ...options, method: "PUT", url });
};

axios.delete = function (url, options) {
  return axios({ ...options, method: "DELETE", url });
};

module.exports = axios;
