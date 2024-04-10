Promise.myRace = function(promises){
  let p = new Promise((resolve, reject)=>{
    let len = promises.length;
    for(let i = 0; i < len; i++){
      /**
       * 下面这种写法主要是针对promises里面每一项都是真正的promise实例的情况
       * promises[i].then(data=>resolve(data))
       * */ 
      // 下面的写法为处理非promise情况，如果不是promise，就用Promise.resolve()方法来包装成promise
      Promise.resolve(promises[i]).then((data)=>{
        resolve(data)
      }).catch(error=>{
        reject(error)
      })
    }
  })
  return p;
}
async function test(promises){
  try {
    console.log("success:\n",await Promise.myRace(promises));
  } catch (error) {
    console.log("error:\n",error);
  }
}
// test([1,2,3])
function genResPro(time, data){
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve(data)},time)
  })
}
function genRejPro(time, data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{reject(data)},time)
  })
}
let p1 = genResPro(1000, 'p1')
let p2 = genResPro(300, 'p2')
let p3 = genResPro(100, 'p3')
let p4 = {
  then(resolve){
    setTimeout(()=>{
      resolve('p4')
    },50)
  }
}
let p5 = genRejPro(10, 'p5')
// test([p1, p2, p3, p4, p5])
console.log(p1 instanceof Promise)
console.log(p4 instanceof Promise)
Promise.myRace([p1, p2, p3, p4, p5])
// Promise.myRace([p1, p2, p3, p4])
.then(console.log)
.catch(console.log)

