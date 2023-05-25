// The Main condition
let condition = false;

// Main cariables
let a, b, c, d;

// Call elements from DOM
const container = document.querySelector('.container'),
    inputA = document.querySelector('#a'),
    inputB = document.querySelector('#b'),
    inputC = document.querySelector('#c'),
    inputD = document.querySelector('#d'),
    // body = document.querySelector('body'),
    canvasDOM = document.querySelector('.chart'),
    calcBtn = document.querySelector('.calcBtn');


// Take a value from input element
inputA.addEventListener('input', (e) => {
    a = +e.target.value
});
inputB.addEventListener('input', (e) => {
    b = +e.target.value
});
inputC.addEventListener('input', (e) => {
    c = +e.target.value
});
inputD.addEventListener('input', (e) => {
    d = +e.target.value
});

// Calculate buttun
calcBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
        condition = true;
        condition ? container.style.display = 'none' : 'flex';
        condition ? canvasDOM.style.display = 'flex' : 'none';

        // Define the equation function
        const equation = (x) => ((a - c) / (b + d));

        // Define the two lines' equations
        const line1 = (x) => 2 * x - 4;
        const line2 = (x) => -3 * x + 6;

        // Find the intersection point
        const intersectionX = 0;
        const intersectionY = equation(intersectionX);


        // Generate data points for the equation chart
        // const equationData = [];
        // for (let x = -10; x <= 10; x++) {
        //     const y = equation(x);
        //     equationData.push({ x, y });
        // }

        // Generate data points for Line 1
        const line1Data = [
            { x: -10000, y: line1(-10000) },
            { x: 10000, y: line1(10000) },
        ];

        // Generate data points for Line 2
        const line2Data = [
            { x: -10000, y: line2(-10000) },
            { x: 10000, y: line2(10000) },
        ];

        // Get the canvas element
        const canvas = document.getElementById('chart');

        // Create the chart
        new Chart(canvas, {
            type: 'scatter',
            data: {
                datasets: [
                    // {
                    //     label: 'Equation',
                    //     data: equationData,
                    //     borderColor: 'blue',
                    //     fill: false,
                    // },
                    {
                        label: 'Supply',
                        data: line1Data,
                        borderColor: 'red',
                        showLine: true,
                    },
                    {
                        label: 'Demand',
                        data: line2Data,
                        borderColor: 'green',
                        showLine: true,
                    },
                    {
                        label: 'Intersection',
                        data: [{ x: intersectionX, y: intersectionY }],
                        backgroundColor: 'purple',
                        pointRadius: 5,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                    },
                },
            },
        });

    }
    else {
        alert('Please fill in the all blanks!')
    }

});