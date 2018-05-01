export class HttpResult {
  constructor(obj) {
    if (typeof obj === 'undefined') {
      throw new Error('No data is passed to HttpResult.');
    }
    /** status code */
    this.status = obj.status;
    /** redirect URL */
    this.url = obj.url ? obj.url : '';
    /** message */
    this.message = obj.message ? obj.message : '';
    /** result object */
    this.results = obj.results;
    /** error list */
    this.errors = obj.errors;
  }
}
