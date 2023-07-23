export default class RequestThrottler {
    requestLimits; // Map URL to request limit
    interval;
    requests; // Map URL to request timestamps
    timeout;
  
    constructor() {
      this.requestLimits = new Map();
      this.interval = 1000; // 1 second by default
      this.requests = new Map();
      this.timeout = null;
    }
  
    clearRequests(url) {
      if (this.requests.has(url)) {
        const urlRequests = this.requests.get(url) || [];
        this.requests.set(
          url,
          urlRequests.filter((timestamp) => Date.now() - timestamp < this.interval)
        );
      }
    }
  
    canMakeRequest(url) {
      const requestLimit = this.requestLimits.get(url) || 0;
      const urlRequests = this.requests.get(url) || [];
      return urlRequests.length < requestLimit;
    }
  
    scheduleRequest(url) {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.clearRequests(url);
      }, this.interval);
    }
  
    setRequestLimit(url, requestLimit) {
      this.requestLimits.set(url, requestLimit);
    }
  
    makeRequest(url) {
      if (!this.requestLimits.has(url)) {
        console.log("URL not found in throttler configuration. Please set request limit first.");
        return;
      }
  
      if (this.canMakeRequest(url)) {
        if (!this.requests.has(url)) {
          this.requests.set(url, []);
        }
        const urlRequests = this.requests.get(url) || [];
        urlRequests.push(Date.now());
        this.scheduleRequest(url);
        console.log(`Request sent to URL: ${url}`);
      } else {
        throw new Error(`Request to URL: ${url} throttled. Please try again later.`)
      }
    }
  }
  