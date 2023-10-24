
	
	

myButton = document.getElementById("calculate").addEventListener("click", findMinCost);

function findMinCost() {
	const textElement = document.getElementById("rope-lengths");
	const resultElement = document.getElementById("result");
	const arr = textElement.value.split(",").map(Number);
    const ropeLengths = textElement.value.trim();
    if (!ropeLengths) {
        resultElement.textContent = "Please enter rope lengths.";
        return;
    }

    

    let minCost = 0;
    while (arr.length > 1) {
        arr.sort((a, b) => a - b);
        const sum = arr[0] + arr[1];
        minCost += sum;
        arr.splice(0, 2, sum);
    }
    resultElement.textContent = minCost;
}