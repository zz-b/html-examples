// Promise.allSettled([
//   Promise.resolve(33),
//   new Promise((resolve) => setTimeout(() => resolve(66), 0)),
//   99,
//   Promise.reject(new Error("一个错误")),
// ]).then((values) => console.log(values))

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: 一个错误 }
// ]

// Promise.resolve( Promise.reject(new Error("一个错误")))
// .then(data=>{
//   console.log(data)
// })
// .catch(err=>{
//   console.log('err',err)
// })

Promise.myAllSettled = function(promises){
  let results = [];
  let count = 0, len = promises.length;
  return new Promise((resolve, reject)=>{
    for(let i = 0; i < len; ++i){
      Promise.resolve(promises[i])
      .then((value)=>{
        results[i] = {
          status: 'fulfilled', value
        };
        count ++;
        if(count === len){
          resolve(results)
        }
      })
      .catch((err)=>{
        results[i] = {
          status: 'rejected', reason: err
        };
        count ++;
        if(count === len){
          resolve(results)
        }
      })
    } 
  })
  
}

Promise.myAllSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("一个错误")),
]).then((values) => console.log(values))
