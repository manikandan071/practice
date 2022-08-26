
//22 N numbers in sequence

for(k=1;k<=10; k++){
		console.log(k);
	
}
//23 N numbers in reverse order
for(l=10;l>=1;l--){
		console.log(l);
}

//24 N even Numbers

for (j=1;j<=10;j++){
	if(j%2==0){
		console.log(j);
	}
}
//25 N 0dd numbers

for(i=1; i<10; i++){
	if(i%2!=0){
		console.log(i)
	}
}

//29 table of given number
let value=5;
for(x=1; x <=10;x++){
	let value1=value*x;
	console.log(value1);
}


//32 check prime number or not

let no=7;
let temp=0;
for(m=2;m<=no-1;m++){
	if(no%m==0){
	temp=temp+1;
	}
}
if(temp>0){
	console.log("not prime number");
}
else{
	console.log("prime number");
}

//33 print prime number within Range
let given=50;

for(n=2;n<=given;n++){
	let find=0;
	for(o=1;o<=n;o++){
		if(n%o==0){
			find=find+1;
		}
	}
	if(find==2){
		console.log(n);
	}
}

//34 fibonacci series

let k1=0;
let k2=1;
let fibo=10;
console.log(k1,k2);
for(l=0;l<=fibo;l++){
	
	let k3=k1+k2;
	console.log(k3);
	k1=k2;
	k2=k3;
}

//35 factorial program

let fact=6;
let ans=1;
for(no=1;no<=fact;no++){
	ans=ans*no;
	
}
console.log(ans);


//36 calculate average of given numbers
 
let total5=0;
let subs=[70,80,60,50,40]

for(s=0;s < subs.length;s++){
	total5+=subs[s];
}
console.log(total5/subs.length);


let m1=700;
let m2=200;
let m3=300;

if(m1<m2 && m1<m3 && m2<m3 ){
	console.log(m1,m2,m3);
	console.log(m3,m2,m1);
}
else if(m1<m2 && m1<m3 && m2>m3 ){
	console.log(m1,m3,m2);
}
else if(m2<m1 && m2<m3 && m1<m3 ){
	console.log(m2,m1,m3);
}
else if(m2<m1 && m2<m3 && m1>m3 ){
	console.log(m2,m3,m1);
}
else if(m3<m1 && m3<m2 && m1<m2 ){
	console.log(m3,m1,m2);
}
else {
	console.log(m2,m3,m1);
}

let age=16;
let lsn="pass";

if(age>=18){
	if(lsn=="pass"){
		console.log("permite");
	}
	else{
		console.log("not permite");
	}
}
else{
	console.log("minor");
}


let y1=100;
let y2=200;
let y3=300;
let y4=400;

if(y1>y2 && y1>y3 && y1>y4){
	if(y2>y3 && y2>y4){
		if(y3>y4){
			console.log(y1,y2,y3,y4);
		}
		else{
			console.log(y1,y2,y4,y3);
		}
	}
	else if(y3>y2 && y3>y4){
		if(y2>y4){
			console.log(y1,y3,y2,y4);
		}
		else{
			console.log(y1,y3,y4,y2);
		}
	}
	else if(y4>y2 && y4>y3){
		if(y2>y3){
			console.log(y1,y4,y2,y3);
		}
		else{
			console.log(y1,y4,y3,y2);
		}
	}
}
if(y2>y1 && y2>y3 && y2>y4){
	if(y1>y3 && y1>y4){
		if(y3>y4){
			console.log(y2,y1,y3,y4);
		}
		else{
			console.log(y2,y1,y4,y3);
		}
	}
	else if(y3>y1 && y3>y4){
		if(y1>y4){
			console.log(y2,y3,y1,y4);
		}
		else{
			console.log(y2,y3,y4,y1);
		}
	}
	else if(y4>y1 && y4>y3){
		if(y1>y3){
			console.log(y2,y4,y1,y3);
		}
		else{
			console.log(y1,y4,y3,y1);
		}
	}
}
if(y3>y1 && y3>y2 && y3>y4){
	if(y1>y2 && y1>y4){
		if(y2>y4){
			console.log(y3,y1,y2,y4);
		}
		else{
			console.log(y3,y1,y4,y2);
		}
	}
	else if(y2>y1 && y2>y4){
		if(y1>y4){
			console.log(y3,y2,y1,y4);
		}
		else{
			console.log(y3,y2,y4,y1);
		}
	}
	else if(y4>y1 && y4>y2){
		if(y1>y2){
			console.log(y3,y4,y1,y2);
		}
		else{
			console.log(y3,y4,y2,y1);
		}
	}
}
if(y4>y1 && y4>y2 && y4>y3){
	if(y1>y2 && y1>y3){
		if(y2>y3){
			console.log(y4,y1,y2,y3);
		}
		else{
			console.log(y4,y1,y3,y2);
		}
	}
	else if(y2>y1 && y2>y3){
		if(y1>y3){
			console.log(y4,y2,y1,y3);
		}
		else{
			console.log(y4,y2,y3,y1);
		}
	}
	else if(y3>y1 && y3>y2){
		if(y1>y2){
			console.log(y4,y3,y1,y2);
		}
		else{
			console.log(y4,y3,y2,y1);
		}
	}
}


//
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (i10 = 0,len = cars.length; i10 < len; i10++){
  textcars = cars[i10];
  console.log(textcars);
}

let ji=1234;
let rev=0;
let rem=0;

while(ji>0){
	rem=ji%10;
	rev=(rev*10)+rem;
	
	ji=Math.floor(ji/10);
}
console.log(rev);


for(k1=1;k1<=100; k1++){
	if(k1%5==0 && k1%3==0 ){
		console.log(k2,k3);
	}
	else if(k1%5==0){
		k3="hello";
		console.log(k3);
	}
	
	else if(k1%3==0){
		k2="hi";
		console.log(k2);
	}
	else{
		console.log(k1);
	}
}


var newtime=new Date("august 24,2022 17:45:22");
var oldtime=new Date("august 24,2022 12:00:00");
var sec="pm";

if(newtime>oldtime){
	if(sec=="pm"){
		console.log("afternoon");
	}
	else{
		console.log("morning");
	}
}
else{
	console.log("before old time");
}

//amstrong number

let arm=153;
let rev1=0;
let equl=arm;

while(arm>0){
	rem1=arm%10;
	rev1+=rem1*rem1*rem1;
	arm=Math.floor(arm/10);
}
if(equl==rev1){
	console.log("this is amstrong number");
}
else{
	console.log("not amstrong number");
}

//addition given number


let tt=12345;
let addition=0;

while(0<tt){
	rem2=tt%10;
	addition +=rem2;
	tt=Math.floor(tt/10);
}
console.log(addition);