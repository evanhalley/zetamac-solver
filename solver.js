// maximum number of times the solve function can recursively call itself
// attempts to prevent stack size exceptions in Chrome Dev Tools
MAX_ITERATIONS = 13000;
MAX_LOOPS = 2;
var iterations;

function solve() {
	iterations++;

	// read the problem from the page
	var problem = $(".problem").html();
	var problemArr = problem.split(' ');
	var answer = null;

	// solve the problem
	if (problemArr[1] === '+') {
		answer = parseInt(problemArr[0]) + parseInt(problemArr[2]);
	} else if (problemArr[1] === '–') {
		answer = parseInt(problemArr[0]) - parseInt(problemArr[2]);
	}  else if (problemArr[1] === '×') {
		answer = parseInt(problemArr[0]) * parseInt(problemArr[2]);
	}  else if (problemArr[1] === '÷') {
		answer = parseInt(problemArr[0]) / parseInt(problemArr[2]);
	} 
	// print the problem and the answer
	console.log(problem + " = " + answer);

	// submit the answer
	$('.answer').val(answer);
	$('.answer').keyup();

	if (iterations < MAX_ITERATIONS) {
		solve();
	} else {
		return;
	}
}

// TODO: come up with a better way to run this until the time has expired
var loops = 0;
while (loops < MAX_LOOPS) {
	iterations = 0;
	solve();
}
