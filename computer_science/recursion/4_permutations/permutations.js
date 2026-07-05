const permutations = function(array) {
  if(Array.isArray(array)){
    if(array.length === 0){
        return [[]];
    } 
   const  result = [];
    for(let i = 0; i< array.length; i++){
    const first = array[i];
    const beforefirst = array.slice(0, i);
    const afterfirst = array.slice(i+1)
    const rest = [...beforefirst, ...afterfirst];
    const smallperm = permutations(rest);
    smallperm.forEach(e => {
      return result.push([first, ...e]);
    })
  }
    return result;

  }
};
  
// Do not edit below this line
module.exports = permutations;
