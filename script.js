let button=document.getElementById("btn")
let data1=document.getElementById("data1")
let data2=document.getElementById("data2")
let data3=document.getElementById("data3")

button.addEventListener("click",promiseChain)

function promiseChain(){
  
  promiseAPI1()
  .then(promiseAPI2())
  .then(promiseAPI3())
  .catch((err)=>{console.log("err",err)})
}
function promiseAPI1(){
   return new Promise(function(resolve,reject){
   setTimeout(()=>{
      resolve(
      fetch("https://dummyjson.com/posts").then((response)=>response.json())
      .then((data)=>{
        console.log("data",data)
        data1.innerHTML=
        `<p>Post:${data.posts}</p>
        <p>Total:${data.total}</p>
        <p>Skip:${data.skip}</p>
        <p>Limit:${data.limit}</p>`
        // for(let i=0;i<30;i++){
        //   data1.innerHTML=`<p>${data.posts[i].title}</p>`
        // }
        
      })
    )},1000)
  })
}
function promiseAPI2(){
   return new Promise(function(resolve,reject){
   setTimeout(()=>{
      resolve(
      fetch("https://dummyjson.com/products").then((response)=>response.json())
      .then((data)=>{
        console.log("data",data)
        data2.innerHTML=
        `<p>Product:${data.products}</p>
        <p>Total:${data.total}</p>
        <p>Skip:${data.skip}</p>
        <p>Limit:${data.limit}</p>`

      })
    )},2000)
  })
}
function promiseAPI3(){
   return new Promise(function(resolve,reject){
   setTimeout(()=>{
      resolve(
      fetch("https://dummyjson.com/todos").then((response)=>response.json())
      .then((data)=>{
        console.log("data",data)
        data3.innerHTML=
        `<p>Todos:${data.todos}</p>
        <p>Total:${data.total}</p>
        <p>Skip:${data.skip}</p>
        <p>Limit:${data.limit}</p>`
      })
    )},3000)
  })
}