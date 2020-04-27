const casesNeeded = () => {
  const length = document.getElementById('length').value;
  const height = document.getElementById('height').value;
  const area = length * height;
  const cases = Math.round(area / 24);
  document.getElementById('resultSentence').innerText=`The area of your space is ${area} feet. You will need ${cases} cases.`
}


