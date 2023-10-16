
function calculateMinCost() {
	const text = document.getElementById("rope-lengths");
	const result = document.getElementById("result");
	const ropeLengths = text.value.split(",").map(Number);
	
    
      if (!ropeLengths.every(Number.isInteger) || ropeLengths.length < 2) {
        result.textContent = "Invalid input. Please provide at least two integer rope lengths.";
        return;
      }
	const minimumCost = findMinCost(ropeLengths);
      result.textContent = minimumCost;
	
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