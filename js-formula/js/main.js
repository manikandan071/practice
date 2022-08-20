let x=12;
let y=6;
//addition
let a=y+x;
console.log(a);

//subraction
let b=x-y;
console.log(b);

//multiplication
let c=x*y;
console.log(c);

//division
let d=x/y;
console.log(d);

//square
console.log(y**2);
console.log(y**3);

//area of circle
let r=7;
let area=Math.PI* r**2;
console.log(area);

//area of triangle
let height=7;
let base=10;
let area2=height*base/2;
console.log(area2);

//intrest
let amount=1000;
let total=1100;
let intrest=total-amount;
console.log(intrest);

//total and percentage
let tamil=80;
let eng=75;
let math=95;
let sci=90;
let ss=85;

let totalmark=tamil+eng+math+sci+ss;
console.log(totalmark);
let percentage=totalmark/5;
console.log(percentage);

//large number
let large=(50,12,55,77,88,111);
console.log(Math.max(large));
let large1=(50,12,55,77,88);
console.log(Math.min(large1));
let min=(2,4,5,6,7,8);
console.log(Math.min(min));






//even numbers
for(i=1; i<12; i++){
	if(i%2==0){
		console.log(i);
	}
}




let even=10;

if(even%2==0){
	console.log("even");
}
else{
	console.log("odd");
}

let odd=10;

if(odd%2!=0){
	console.log("odd");
}
else{
	console.log("even");
}








//odd numbers
for(i=1; i<10; i++){
	if(i%2!=0){
		console.log(i)
	}
}




//quadratic equation
let h=3;
let j=5;
let k=-7;

let dd=Math.sqrt(j**2 -(4*h*k));
let gg=-j+dd;
let ff=2*h;
let result1=gg/ff;
console.log(result1);

//print grade

let marks=95;


	if(marks>=90){
		console.log("s grade");
	}
	else if(marks>=80){
		console.log("a grade");
	} 
	else if(marks>=70){
		console.log("b grade");
	}
	else if(marks>=60){
		console.log("c grade");
	}
	else if(marks>=50){
		console.log("e grade");
	}
	else{
		console.log("fail");
	}


//marriage eligibility

let age=23;
let gender="male"
if(age>=23){
	if(gender=="male"){
		console.log("not-eligible");
	}
	else{
		console.log("eligible");
	}
	
}


//decending order
let u=10;
for(u; u>=1; u--){
	if(u<10){
		console.log(u);
	}
}

//ascending order

let v=1;
for(v; v<=10; v++){
	if(v>1){
		console.log(v);
	}
}


let w=100;
let q=2000;
let t=300;
if(w>q){
	if(w>t){
		console.log(w);
	}
	else{
		console.log(t);
	}
}

else{
	if(q>t){
		console.log(q);
	}
	else{
		console.log(t);
	}
}

let new1=100;
let new2=400;
let new3=300;
let new4=550;

if(new1>new4){
	if(new1>new2){
		if(new1>new3){
			console.log(new1+new3+new3+new4);
		}
		else{
			console.log(new3);
		}
	}
	else{
		console.log(new2);
	}
}
else if(new2>new4){
	if(new2>new1){
		if(new2>new3){
			console.log(new2);
		}
		else{
			console.log(new3);
		}
	}
	else{
		console.log(new1);
	}
}
else if(new3>new4){
	if(new3>new1){
		if(new3>new2){
			console.log(new3)
		}
		else{
			console.log(new2)
		}
	}
	else{
		console.log(new1);
	}
}
else if(new4>new1){
	if(new4>new2){
		if(new4>new3){
			console.log(new4)
		}
		else{
			console.log(new3)
		}
	}
	else{
		console.log(new2);
	}
}


let age6=18;
let gender6="female";


if(age6>21){
	if(gender6=="female"){
		console.log("eligible");
	}
	else{
		console.log("not-eligible");
	}
}
else{
	console.log("rejected");
}

//======================================================================================