// Listen for clicks on the document
document.addEventListener('click', (event) => {
  
  // Log the clicked element in the console
  console.log('target: ', event.target)
  
  console.log('classList: ', event.target.classList.contains("accordion-toggle"))
  
  // Bail if our clicked element doesn't have the .accordion-toggle class
  if (!event.target.classList.contains("accordion-toggle")) {
    return;
  }
  
  // Get the target content
  var content = document.querySelector((event.target.hash))
  
  // If no content is found we will end the function
  if (!content) return
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active')
    return
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active')
  console.log('accordions: ', accordions)
  accordions.forEach(function (accordion) {
    accordion.classList.remove('active')
  })
  
  // Toggle our content
  content.classList.toggle('active')
  
})