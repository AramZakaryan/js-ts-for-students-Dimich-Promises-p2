// let pr = new Promise((res, rej) => res("Oleg"))
// console.log(pr.then(value => value)===pr.then(value => value))


// console.log(1);
// let pr = new Promise((res, rej) => {
//     res("Hura!") // sync !!!
//     console.log(2) // sync !!!
// })
// pr.then(value => console.log(3)) // async 
// console.log(4);


// const pr1 = new Promise(res => setTimeout(() => res(1)
//     , 1000)
// )
//
// const pr2 = Promise.resolve(2)
//
// Promise.all([pr1, pr2]).then(data => {
//     console.log(data)
// })


// Promise.reject()
//     .then(() => console.log("then1"))
//     .catch(() => console.log("catch1"))
//     .catch(() => console.log("catch2"))
//     .then(() => console.log("then2"))


// async  function foo () {
//     return 5
// }
//
// (async function foo2 () {
//     const r =  foo()
//     console.log(r)
// })()


// Promise.resolve()
//     .then(res => 1)
//     .then(res => Promise.resolve(20))
//     .then(res => console.log(res))


// Promise.resolve()
//     .then(res => 1)
//     .then(res => Promise.resolve(20))
//     .then(res => console.log(res))


// Promise.resolve()
//     .then(res => 1)
//     .then(res => Promise.resolve(res+2))
//     .then(res => Promise.resolve(res-1))
//     .then(res => res+2)
//     .then(res => console.log(res))


// const pr = new Promise((res,rej)=>{
//     res(1)
//     rej(2)
//     console.log(3)
// })
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))


// let pr = new Promise((res, rej) => {
//     rej("some error")
// });
//
// let pr2 = new Promise((res, rej) => {
//     rej("some error2")
// });
// (async function foo () {
//     // try {
//         let res = await pr;
//         console.log(res);
//     // } catch (err) { 
//     //     console.log(err);    }
// })()


// setTimeout((data1, data2, data3)=>console.log(data1, data2, data3), 1000, "hura1", "hura2", "hura3")


let pr = new Promise((res, rej) => {
    rej("some error")
});

let pr2 = new Promise((res, rej) => {
    rej("some error2")
});
    
window.addEventListener("unhandledrejection", (err) => console.error(err))