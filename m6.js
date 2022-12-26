var name="Rohan";
var age=50;

function calc(...x)
{
    var s=x.reduce((total,data)=>{
        total *= data
        return total
    })
    return s
}
var company="TECHPILE";
function demo1()
{
    console.log("i am from demo1 function precent in mod6");
}

// in an module there can be only 1 default member 
export {name,age,calc,demo1}
export default company