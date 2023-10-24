const myButton = document.getElementById("calculate");
myButton.addEventListener("click", findMinCost);

function findMinCost() {
    const textElement = document.getElementById("rope-lengths");
    const resultElement = document.getElementById("result");
    const ropeLengths = textElement.value.trim();
    if (!ropeLengths) {
        resultElement.textContent = "Please enter rope lengths.";
        return;
    }

    const arr = ropeLengths.split(",").map(Number);

    let minCost = 0;
    while (arr.length > 1) {
        arr.sort((a, b) => a - b);
        const sum = arr[0] + arr[1];
        minCost += sum;
        arr.splice(0, 2, sum);
    }
    resultElement.textContent = "Minimum cost: " + minCost;
}