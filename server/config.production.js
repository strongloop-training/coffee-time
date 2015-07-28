// Custom config generator for "production" only!

var API_ROOT = "/api",
    UPLOAD_LIMITS = "100kb";

module.exports = {
  "restApiRoot": API_ROOT,
  "host": "0.0.0.0",
  "port": 3000,
  "remoting": {
    "context": {
      "enableHttpContext": false
    },
    "rest": {
      "normalizeHttpPath": false,
      "xml": false
    },
    "json": {
      "strict": false,
      "limit": UPLOAD_LIMITS
    },
    "urlencoded": {
      "extended": true,
      "limit": UPLOAD_LIMITS
    },
    "cors": {
      "origin": true,
      "credentials": true
    },
    "errorHandler": {
      "disableStackTrace": true
    }
  }
};
