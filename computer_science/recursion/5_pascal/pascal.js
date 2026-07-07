const pascal = function(n) {
  if(n===1){
    return [1];
  }
  const prev = pascal(n-1);
  const shifright = [0, ...prev];
  const shiftleft = [...prev, 0];

 const result =  shifright.map((value, index)=> {
    return value + shiftleft[index];
  })
  return result;
};
  
// Do not edit below this line
module.exports = pascal;
