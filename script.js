
function calculateMinCost() {
	const textElement = document.getElementById("rope-lengths");
	const resultElement = document.getElementById("result");
	const ropeLengths = textElement.value.split(",").map(Number);
    const minimumCost = findMinCost(ropeLengths);
    resultElement.textContent =   minimumCost;
	return;
	
}
function findMinCost(arr) {
        let minCost = 0;
        while (arr.length > 1) {
          arr.sort((a, b) => a - b);
          const sum = arr[0] + arr[1];
          minCost += sum;
          arr.splice(0, 2, sum);
        }
        return minCost;
      }