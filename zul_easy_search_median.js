// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const sorted = input.slice().sort((a,b)=>a-b);
  const middle = Math.floor(sorted.length/2);

  if (sorted.length%2 === 0){
  	return (sorted[middle-1] + sorted[middle]) 	/2; 
  }
  return sorted[middle];
  }

  console.log(result(input));