const { readFile, writeFile } = require('fs').promises;

// async code that returns a promise
// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		})
// 	})
// }

// calling the async function and chaining the promise
// getText('./content/first.txt')
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	})


const start = async () => {
	try {
		const first = await readFile('./content/first.txt', 'utf8');
		const second = await readFile('./content/second.txt', 'utf8');
		await writeFile(
			'./content/result-mind-grenade.txt',
			`THIS IS AWESOME: ${first} ${second}`,
			{ flag: 'a' });
		console.log(first);
		console.log(second);
	} catch (error) {
		console.log(error)
	}		
}

start()