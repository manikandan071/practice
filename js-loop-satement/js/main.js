
//22 N numbers in sequence

for(k=1;k<=10; k++){
	if(k<=10){
		console.log(k);
	}
}
//23 N numbers in reverse order
for(l=10;l>=1;l--){
	if(l>=1){
		console.log(l);
	}
}

//24 N even Numbers
let j=1;
for (j;j<=10;j++){
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

//27 calculate sum of numbers
let value=5;
for(x=2;x<=8;x++){
	let value1=value*x;
	console.log(value1);
}


//32 check prime number or not

let no=17;
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

for(l=2;l<=fibo;l++){
	k3=k1+k2;
	console.log(k2);
	k1=k2;
	k2=k3;
}

//35 factorial program

let fact=6;
let ans=1;
for(no=1;no<fact;no++){
	ans1=ans*1;
	console.log(ans1+no);
}
//36 calculate average of given numbers
 
let total5=0;
let noofsub=5;
let subs=[70,80,60,50,40]

for(s=0;s < subs.length;s++){
	total5+=subs[s];
}
console.log(total5/subs.length);