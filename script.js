// const myPromise = new Promise((resolve, reject) => {
//   const isSuccess = true;
//   const data = [1, 2, 3];
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(data);
//     } else {
//       reject("error")
//     }
//   }, 2000);
//  })
// console.log(myPromise);

// myPromise
//   .then((data) => {
//   console.log(data);
//   })
//   .catch((err) => {
//   console.log(err);
//   })
//   .finally(()=> console.log("party")
// )

// const mySuccessfullPromise = new Promise ((resolve) =>
// {
//     resolve("я успішно завершився :)");
// });

// mySuccessfullPromise.then ((result) =>
// {
//     console.log(result);
// })

const mySuccessrejectedPromise = new Promise ((reject) =>
{
    reject ("я не успішно завершився :(")
});

mySuccessrejectedPromise.catch ((result) => {
    console.log(result)
})

// Випадковий проміс
//  Створіть функцію randomPromise, яка повертає проміс, 
// який випадковим чином виконується або відхиляється.
//  Використайте метод then, щоб обробити виконання проміса та 
// вивести повідомлення "Проміс виконано".
//  Використайте метод catch, щоб обробити помилку, якщо 
// проміс відхиляється, і вивести повідомлення "Помилка проміса".
//  Використайте метод finally для виведення повідомлення
// "Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.

function randomPromise(){
    return new Promise ((resolve, reject) =>{
        const randomValue = Math.random ();
        if(randomValue > 0.5) {
            resolve("Проміс виконано");
        } else {
            reject("Помилка проміса");
        }
    })
}

randomPromise()
.then((result) => console.log(result))
.catch((err) => console.log(err))
.finally(() => console.log("Робота з промісом завершена"))


// Послідовний проміс
//  Створіть функцію getRandomNumber, яка повертає проміс, 
// що генерує випадкове число.
//  Використайте метод then, щоб обробити результат першого проміса, 
// додати до нього число 10 та вивести результат.
//  Використайте метод catch, щоб обробити помилки у будь-якому 
// з промісів та вивести повідомлення "Помилка проміса".
//  Використайте метод finally для виведення повідомлення 
// "Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.

const getRandomNumber = () =>{
    return new Promise((resolve, reject) =>{
        const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        if(randomNumber){
            resolve(randomNumber)
        } else {
            reject("Nothing")
        }
    })
}

getRandomNumber()
.then((result) => result)
.then((result) => console.log(result * 10))
.catch((error) => console.log(error))