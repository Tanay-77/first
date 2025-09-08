// class Reactangle {
//     constructor(width,height,color){
//         this.width = width
//         this.height = height
//         this.color = color
//     }

//     area(){
//         const area = this.width * this.height
//         return area
//     }

//     paint(){
//         console.log(`paintaing with color ${this.color}`)
//     }
// }

// const rect = new Reactangle(2,4)
// const area = rect.area()
// console.log(area)

// map class 
// const map = new Map();
// Map.set('name','alice')
// Map.set('age',20)
// console.log(Map.get('name'))/

//  In JavaScript, a Promise is an object representing the eventual 
// completion or failure of an asynchronous operation, and its resulting value. 
// It acts as a placeholder for a value that is not yet available but will be in the future. 

// function setTimeoutPromisified(ms){  // ms = milisecod
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// function callBack(){
//     console.log("3 second have passed ")
// }

// setTimeoutPromisified(3000).then(callBack)


// function set(resolve){
//     setTimeout(resolve,3000)
// }

// set(function(){
//     console.log("hi there")
// })

// setinterval(functionName,1000)  it will call function after every second

// Deleting elemnt

{//   <div>
//     <div id="todo-1">
//       <h4>1. Take class</h4>
//       <button onclick="deleteTodo(1)">delete</button>
//     </div>
//     <div id="todo-2">
//       <h4>2. Go out to eat</h4>
//       <button onclick="deleteTodo(2)">delete</button>
//     </div>
//   </div>
//   <div>
// </div>

//   function deleteTodo(index) {
//     const element = document.getElementById("todo-" + index);
//     element.parentNode.removeChild(element);
}

{/* <html>
    <body id="body">
        <h2>Todo 1</h2>
        <h2>Todo 2</h2>
        <h2>Todo 3</h2>
        <button onclick="deleteRandomTodo()">Delete todo!</button>
    </body>
    <script>
        function deleteRandomTodo() {
            const element = document.querySelector("h2");
            const parentElement = element.parentNode;
            parentElement.removeChild(element);
        }

    </script>
</html> */}


{/* <html>
<body>
  <h1>Todo list</h1>
  <div id="todos">
    <div id="todo-1">
      <h4>1. Take class</h4>
      <button onclick="deleteTodo(1)">delete</button>
    </div>
    <div id="todo-2">
      <h4>2. Go out to eat</h4>
      <button onclick="deleteTodo(2)">delete</button>
    </div>
  </div>
  <div>
    <input id="inp" type="text"></input>
    <button onclick="addTodo()">Add Todo</button>
  </div>
</body>

<script>
  function addTodo() {
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);

  }
</script>

</html> */}


// another way to add

// value = document.getelementbyid("input").value
//const spanel = document.createelement("span") 
// const buttonel = document.createelenment("button")
// spanel.innerhtlml = value
// buttonel.innerhtml = "delete"

// const div = document.createelement("div")
// div.appendchild(spanel)
// div.appendchild(buttonel)

//document.queryselelctor(body).appendchild(div) in this span and butoon will add in the div and then the div added to the body