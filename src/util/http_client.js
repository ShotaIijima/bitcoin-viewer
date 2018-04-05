import request from 'superagent';

/**
 * httpクライアント群
 * superagentというライブラリを使う
 * 
 * 
 */

export function httpGET(apiURL) {
  return new Promise(
    (resolve, reject) => {
      request.get(apiURL)
        .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.text);
          }
        }
        );
    }
  );
}

//queryはPOSTする文字列
//例) JSONをPOSTしたいなら
//    JSON.stringifyしてからqueryに入れる
export function httpPOST(apiURL, query) {
  return new Promise(
    (resolve, reject) => {
      request.post(apiURL)
        .send(query)
        .set('Content-Type', 'application/json')
        .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.text);
          }
        }
        );
    }
  );
}

export function httpPUT(apiURL, query) {
  return new Promise(
    (resolve, reject) => {
      request.put(apiURL)
        .send(query)
        .set('Content-Type', 'application/json')
        .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.text);
          }
        }
        );
    }
  );
}

export function httpDELETE(apiURL) {
  return new Promise(
    (resolve, reject) => {
      request.del(apiURL)
        .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.text);
          }
        }
        );
    }
  );
}