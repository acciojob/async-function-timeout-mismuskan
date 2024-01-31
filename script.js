//your JS code here. If required.
async function delayAndShowMessage() {
  // Get user input values
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  // Convert delay to milliseconds
  const delayInMilliseconds = delayInput * 1000;

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));

  // Display the message on the webpage
  document.getElementById('output').innerText = textInput;
}
document.getElementById('btn').addEventListener('click', delayAndShowMessage);