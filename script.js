//your JS code here. If required.
async function delayAndShowMessage() {
  // Get user input values
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  const delayInMilliseconds = delayInput * 1000;

  await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));

  document.getElementById('output').innerText = textInput;
}
document.getElementById('btn').addEventListener('click', delayAndShowMessage);