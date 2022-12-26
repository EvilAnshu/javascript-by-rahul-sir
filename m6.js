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

export {name,age,calc}