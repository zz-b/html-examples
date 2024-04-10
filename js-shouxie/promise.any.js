Promise.myAny = function(promises){
  return new Promise((resolve, reject)=>{
    for(let i = 0; i < promises.length; i++){
      Promise.resolve(promises[i])
      .then(resolve)
      .catch(()=>{})
    }
  })
}
let p1 = new Promise((res,rej)=>{setTimeout(res, 500, '一')})
let p2 = new Promise((res,rej)=>{setTimeout(rej, 200, '二')})
// Promise.any([p1, p2])
Promise.myAny([p1, p2])
.then(value=>{
  console.log('成功，值为：',value)
})
.catch((error)=>{
  console.log("失败，值为：",error)
})