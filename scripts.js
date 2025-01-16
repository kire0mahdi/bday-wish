// Display loader for 2 seconds
window.onload = function() {
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 2000);
    
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
};