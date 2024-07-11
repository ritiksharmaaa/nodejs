//  modeule

// new way to export 

export default function sum(a , b ){
    return a + b 
}


//  defult way to export 
function add(a , b){
  
   return  a + b 

}

// module.exports = "Piyush"
// module.exports = add
//  defaut way to export  it overight all eport methid 
module.exports = { add : add , sub : "radha"}

exports.add = (a , b) => a+b;


