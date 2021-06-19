var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b,(err, rectangle)=>{
        if (err){
            console.log("ERROR:",err.message)
        }
        else{
            console.log("This area of the rectangle is the rectangle of dimension "+l+
            " and b = "+b+" is" +rectangle.area());
            console.log("This perimeter of the rectangle is the rectangle of dimension"+l+
            " and b = "+b+" is " +rectangle.perimeter());
        }
    });
    console.log("this assignment is after the call to rect but will be executed first")
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);