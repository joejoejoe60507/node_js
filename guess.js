var readline = require('readline');
var readline_loop = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("please input b or s ", function(input) 
{

var num=Math.floor(Math.random()*6+1);

var ans=0;


var lose=0 ,win=0;
try{

	console.log("you choice"+input);
	}
	catch(err)
	{
			console.log("have error");
	
	}
	


if(num>3 && input=="b")
{
	ans=1;
}
else if(num>3 && input=="s")
{
	ans=0;
}


else if(num<3 && input=="s")
{
	ans=1;
}

else if(num>3 && input=="b")
{
	ans=0;
}

else if(num==3 )
{
		ans=1;
}

else
{
	ans=2;
}
console.log("random num is :"+num);

switch(ans)
{
	case 0:
	console.log("No you not right");
	lose++;
	break;
	case 1:
	console.log("Yes you guess right");
	win++;
	break;
	case 2:
	console.log("No you not right");
	break;
	

	
	
}

console.log(ans);
  rl.close();
  });