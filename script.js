function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");
    
    // Convert the radius input to a number
    radius = Number(radius);
    
    // Calculate the area of the circle using the formula πr²
    const area = Math.PI * Math.pow(radius, 2);
    
    // Round the result to two decimal places
    const roundedArea = area.toFixed(2);
    
    // Display the result to the user
    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
}

calculateArea();
