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