// Get the elements
const toggleButton = document.getElementById('flashlight-toggle');
const body = document.body;

// Add event listener for button click
toggleButton.addEventListener('click', () => {
    // Toggle between light and dark mode classes
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Update the button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Turn off the Flashlight';
    } else {
        toggleButton.textContent = 'Turn on the Flashlight';
    }
});
