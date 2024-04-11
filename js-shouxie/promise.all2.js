Promise.myAll = function(promises){
  promises = Array.from(promises)
  let results = [];
  let count = 0;
  return new Promise((resovle, reject)=>{
    for(let i = 0; i < promises.length; ++i){
      Promise.resolve(promises[i])
      .then(value=>{
        results[i] = value;
        count++;
        if(count === promises.length){
          resovle(results)
        }
      })
      .catch(reject)
    }
  })
}
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("foo");
    resolve("foo");
  }, 100);
});

Promise.myAll([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
})
.catch(err=>{
  console.log(err)
})
