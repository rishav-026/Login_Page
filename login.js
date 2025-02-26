document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle the transition

    // Hide the login form container
    document.getElementById('form-container').style.display = 'none';

    // Show the completed sign-in container
    document.getElementById('completed-container').style.display = 'flex';

    // Change the background color of the page to black
    document.body.style.backgroundColor = 'black';
    document.body.style.background = 'none'; // Remove the gradient

    // Optionally, you can add an animation to make the transition smoother
    document.body.style.transition = 'background-color 0.5s ease-in-out';
});

