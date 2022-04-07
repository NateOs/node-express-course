const { readFile } = require('fs');

// async code that returns a promise
const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	})
}

// calling the async function and chaining the promise
const result = getText('./content/first.txt').then(result =>{console.log(result)}).catch(err =>{console.log(err)})