module.exports = function solveEquation(equation) {
  let solution = [];
  let array_abc = equation.replace(/\^2 | |x/gm, '').split('*');

  for(let i of array_abc){ 
    i = Number(i);
  }
  array_abc.push(array_abc[1]*array_abc[1] - 4*array_abc[0]*array_abc[2]);

  let x1 = Math.round((-array_abc[1]-Math.sqrt(array_abc[3]))/(2*array_abc[0]));
  let x2 = Math.round((-array_abc[1]+Math.sqrt(array_abc[3]))/(2*array_abc[0]));
	if (x1>x2) {
    solution.push(x2,x1)
  }
	else {
    solution.push(x1,x2)
  }
  return solution; 
}