const input = require("readline-sync");
 let n = input.questionInt("number #:- ");
 let i = 1;
let hcf = input.questionInt("number N;- ");
while (i<n)
{
    let b= input.questionInt("number N;- ");
    if (b%hcf!=0)
    {
     r=b%hcf;
     b=hcf;
     hcf=r;
    }i++; 
}console.log(hcf);