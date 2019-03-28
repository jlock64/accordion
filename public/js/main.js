// Listen for clicks on the document
document.addEventListener('click', (event) => {
  
  // Log the clicked element in the console
  console.log('target: ', event.target)
  
  console.log('classList: ', event.target.classList.contains("accordion-toggle"))

  // Bail if our clicked element doesn't have the .accordion-toggle class
  if (!event.target.classList.contains("accordion-toggle")) {
    return;
  }
  
  // Log the clicked element in the console
  console.log('matches');
  
})