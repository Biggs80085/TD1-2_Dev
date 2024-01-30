/*for(var i = 1; i<41; i++)
{
    var output = ""
    if(i % 3 == 0)
        output += "Fizz"
    
    if(i % 5 == 0)
        output += "Buzz"

    if(output != "")
        console.log(i + " " + output)
}*/

function anagrammes(x, y)
{
    var count = 0
    for (var i = 0; i < x.length ; i++){
        for (var j = 0; y < k.length ; j++){
            if(x[i] == y[j]){
                count++
            }     
        }
    }
    if(count == x.length)
        console.log('ils sont des anagrammes')
    else
        console.log('ils ne sont pas des anagrammes')
}
