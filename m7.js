function calc(...x)
{
    // x = [10,20,30];
    // var s=0;
    // x.forEach((data)=>{
    //     s=s+data
    // })
    // return s

    var s=x.reduce((total,data)=>{
        total += data
        return total
    })
    return s
}

var name = "Rahul"
var age = 30

// calc(10)
// calc(10,20,30)
// calc(10,203,45,56,778)

export {name,age,calc}