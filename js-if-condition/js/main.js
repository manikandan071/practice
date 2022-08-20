//intrest
let p=10000;
let i=5;
let t=12;

let intrest=(p*i*t)/100;
console.log(intrest);


//swap two Number

let mani=10;
let ranjith=20;
let ramm;
ramm=mani;
mani=ranjith;
ranjith=ramm;

console.log(mani,ranjith);

//grade


let grade=50;
let ranjith1=80;

if(grade<=ranjith1){
	if(80<=ranjith1){
		console.log("b grade");
	}
	else if(70<=ranjith1){
		console.log("c grade");
	}
}
else{
	console.log("fail");
}

//positive or negative

let value=-5;

if(value>0){
	console.log("positive value");
}
else{
	console.log("negative value");
}


//greaterthan 10

let x=8;
let y=9;
let z=12;

if(x>10){
	console.log("x greaterthan");
}
else if(y>10){
	console.log("y greaterthan");
}
else if(z>10){
	console.log("z greaterthan");
}
else{
	console.log("none above");
}

//divisible by 5

let num=54445
if(num%5==0){
	console.log("divisible");
}
else{
	console.log("not divisible");
}

//ascending 

let h1=50;
let h2=25;
let h3=30;

if(h1<h2 && h1<h3 && h2<h3){
	console.log(h1+" "+h2+" "+h3);
}
else if(h1<h2 && h1<h3 && h2>h3){
	console.log(h1+" "+h3+" "+h2);
}
else if(h2<h3 && h2<h1 && h1<h3){
	console.log(h2+" "+h1+" "+h3);
}
else if(h2<h3 && h2<h1 && h1>h3){
	console.log(h2+" "+h3+" "+h1);
}
else if(h3<h1 && h3<h2 && h1<h2){
	console.log(h3+" "+h1+" "+h2);
}
else if(h3<h1 && h3<h2 && h1>h2){
	console.log(h3+" "+h2+" "+h1);
}
else{
	console.log("none");
}


//decending

if(h1>h2 && h1>h3 && h2<h3){
	console.log(h1+" "+h3+" "+h2);
}
else if(h1>h2 && h1>h3 && h2>h3){
	console.log(h1+" "+h2+" "+h3);
}
else if(h2>h3 && h2>h1 && h1<h3){
	console.log(h2+" "+h3+" "+h1);
}
else if(h2>h3 && h2>h1 && h1>h3){
	console.log(h2+" "+h1+" "+h3);
}
else if(h3>h1 && h3>h2 && h1<h2){
	console.log(h3+" "+h2+" "+h1);
}
else if(h3>h1 && h3>h2 && h1>h2){
	console.log(h3+" "+h1+" "+h2);
}
else{
	console.log("none");
}





