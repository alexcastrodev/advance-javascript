import { throws } from 'node:assert'
import test from 'node:test'
import RequestThrottler from './index.mjs'

const throttler = new RequestThrottler();
  
throttler.setRequestLimit("https://google.com", 1); // Allowing 5 requests per second

test.it('Should not allow second request at same time', () => {
    throttler.makeRequest("https://google.com");
    throws(() => throttler.makeRequest("https://google.com"))
})