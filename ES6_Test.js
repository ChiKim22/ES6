let a = 10;

function test(){
  let a=0;
  console.log(a);
  for(let a = 5; a < 7; a++){
    console.log(a);
  }
  console.log(a);
}
console.log(a);
test();
console.log(a);

class SayHello{
 constructor(name){
   this.name=name;
 }
  funcTypeHello(){
  	const handler = function(){
      return `Hello, ${this.name}`;
	}
	return handler();
  }

 	lambdaTypeHello(){
  		const handler = ()=>{
      return `Hello, ${this.name}`;
	}
	return handler();
  }
}

hello = new SayHello('user')
console.log(hello.funcTypeHello());
console.log(hello.lambdaTypeHello());


console.log(obj.getName());

var ody=`<body>
	<h1>Hello world</h1>
</body>`;
var name = 'abc';
var msg = `welcome ${name}`;

console.log(body);
console.log(msg);