const request = require('request');
const fs = require('fs');

module.exports = {
    postAsync: async (file) => {
        return new Promise((resolve, reject) => {
            if (!file) reject(new Error('File not provided'));
            if (!fs.existsSync(file)) reject(new Error('File does not exist.'));

            const data = fs.createReadStream(file);

            request.post({
                url: 'https://catgirls.pet/api/upload',
                formData: {
                    file: data
                }
            }, (error, response, body) => {
                data.close();
                
                if (error) return reject(new Error(error));

                if (response.statusCode !== 200) return reject(new Error(`Server returned status code: ${response.statusCode}.`));

                return resolve(JSON.parse(body));
            });
        });
    }
};
