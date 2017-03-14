import { requestHost } from '../config/config.local';

/**
 * Base class for services using http
 */
export default class HttpService {
  constructor($http) {
    this.$http = $http;
    this.defaultHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest'
    };
    this.defaultTimeout = 10000;
  }

  static get $inject() {
    return ['$http'];
  }

  /**
   * make a requst.
   * @param string Name of the HTTP method.
   * @param string path Path of the requesting url.
   * @param string error_msg A Message in case for an error.
   * @param string headers Headers for the request.
   * @param string data Data to be sent.
   * @param object opt Optional fields for request.
   * @return Promise Promise
   */
  request(method, path, error_msg, headers, data, opt) {
    return this.$http(this.createRequest(method, path, headers, data, opt)).
        then(this.defaultCallback).
        catch(error => {
          let errors = [];
          errors.push(error_msg);
          errors.push(error);
          return Promise.reject(errors);
        });
  }

  /**
   * Create a request object.
   * @param string method Request method.
   * @param string path Path to the requesting url.
   * @param object headers Request headers.
   * @param object opt Additional fields for the request.
   * @return object An object for the request.
   */
  createRequest(method, path, headers, data, opt) {
    let request = {
      method: method,
      url: requestHost + path,
      timeout: this.defaultTimeout
    };
    if (headers) {
      request.headers = headers;
    }
    if (data) {
      request.data = data;
    }
    // Additional fileds for the request
    if (typeof opt !== 'undefined') {
      $.each(opt, (key, value) => {
        request[key] = value;
      });
    }
    return request;
  }

  /**
   * default callback function for the request.
   * @param any response HTTP response.
   * @return Promise Promise of the http result.
   */
  defaultCallback(response) {
    return new Promise((resolve, reject) => {
      /* define default process
      if (response.data.status === 'success') {
        resolve(response.data.results);
      } else {
        reject(response.data);
      }
      */
    });
  }

}
