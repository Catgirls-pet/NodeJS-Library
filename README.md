# Baka.ink
A simple NodeJS library to interact with the Baka.ink API.

## Uploading
```javascript
const Baka = require('baka-ink');

const request = await Baka.postAsync('./file.ext');
```

This will return the following in JSON format:
```json
{
  "status": 200,
  "data": {
    "code": "FILE_CODE",
    "link": "https://baka.ink/FILE_CODE"
  }
}
```