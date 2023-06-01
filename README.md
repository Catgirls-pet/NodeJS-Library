# Catgirls.pet
A simple NodeJS library to interact with the Catgirls.pet API.

## Uploading
```javascript
const CGP = require('catgirls-pet');

const request = await CGP.postAsync('./file.ext');
```

This will return the following in JSON format:
```json
{
  "status": 200,
  "data": {
    "code": "FILE_CODE",
    "link": "https://catgirls.pet/FILE_CODE"
  }
}
```

## Info
```javascript
const CGP = require('catgirls-pet');

const request = await CGP.infoAsync('6e8447838c21457682cd6824d0b5e866');
```

This will return the following in JSON format:

```json
{
  "status": 200,
  "data": {
    "url": {
      "short": "https://catgirls.pet/6e8447838c21457682cd6824d0b5e866",
      "full": "https://catgirls.pet/6e8447838c21457682cd6824d0b5e866/sdafsdgdfgdf.png"
    },
    "metadata": {
      "id": "6e8447838c21457682cd6824d0b5e866",
      "name": "sdafsdgdfgdf.png",
      "size": {
        "bytes": 315178,
        "readable": "307.79 KB"
      },
      "contentType": "image/png",
      "uploadedAt": {
        "milliseconds": 1684027639856,
        "readable": "Sun May 14 2023 01:27:19 GMT+0000 (Greenwich Mean Time)"
      },
      "md5": "error"
    }
  }
}
```