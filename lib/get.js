const request = require('request');

module.exports = {
    infoAsync: async (code) => {
        return new Promise((resolve, reject) => {
            request.get({
                url: `https://catgirls.pet/api/info/${code}`
            }, (error, response, body) => {
                if (error) return reject(new Error(error));

                if (response.statusCode !== 200) return reject(new Error(`Server returned status code: ${response.statusCode}.`));

                return resolve(JSON.parse(body));
            });
        });
    }
};