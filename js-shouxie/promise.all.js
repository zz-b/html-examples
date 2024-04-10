Promise.myAll = function(list){
  let resovle,reject;
  let data = [];
  let count = 0;
  let p = new Promise((res, rej)=>{
    resovle = res;
    reject = rej;
    if(list.length === 0){
      resovle([])
    }else{
      for(let index = 0; index< list.length;index++){
        Promise.resolve(list[index]).then((res)=>{
          data[index] = res;
          count++;
          if(count === list.length){
            resovle(data)
          }
        },reject) 
      }
    }
  })
  return p;
}
// Promise.myAll([]).then(function(data){
//   console.log(data)
// })
// Promise.myAll([1,2,3,4]).then(function(data){
//   console.log(data)
// })
let p1 = new Promise(res=>{
  setTimeout(function(){
    res('p1')
  }, Math.floor(1000 * Math.random()))
})
let p2 = new Promise(res=>{
  setTimeout(function(){
    res('p2')
  }, Math.floor(1000 * Math.random()))
})
let p3 = new Promise(res=>{
  setTimeout(function(){
    res('p3')
  },1000)
})
let p4 = new Promise(res=>{
  setTimeout(function(){
    res('p4')
  }, 3000)
})
Promise.myAll([p1,p2,p3,p4]).then(function(data){
  console.log(data)
})