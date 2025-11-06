function getFailedPromise(value){
    return Promise.reject(value);
}
getFailedPromise("Error")
.then((value) => console.log(value))
.catch((error) => console.log(error))


function getSuccsedPromise(value) {
    return Promise.resolve(value)
}

getSuccsedPromise("Запит виконався!")
.then(value => console.log(value));

const firstPromise = Promise.resolve(true);
const secondPromise = Promise.resolve(2)
const thirdPromise = Promise.resolve("asdf")

Promise.all([firstPromise, secondPromise, thirdPromise])
.then(results => console.log(results));

const factPromise = new Promise((resolve) => {
     const randomDelay = Math.floor(Math.random() * 6000 + 1000);
    setTimeout(() => {
        resolve(`I am faster ${randomDelay}`)
    }, randomDelay)
})

const slowPromise = new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 6000 + 1000);
    setTimeout(() => {
        resolve(`I am slow ${randomDelay}`)
    }, randomDelay)
})

const midPromise = new Promise((resolve) => {
     const randomDelay = Math.floor(Math.random() * 6000 + 1000);
    setTimeout(() => {
        resolve(`I am ok ${randomDelay}`)
    }, randomDelay)
})

Promise.race([factPromise, slowPromise, midPromise])
.then(results => console.log(results));