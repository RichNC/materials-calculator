

const casesNeeded = () => {
  const length = document.getElementById('length').value;
  const height = document.getElementById('height').value;
  const unitOfMeasurement = document.getElementById('unitOfMeasurement').value;
  let area = '';
  if (unitOfMeasurement === 'feet') {
    area = (length * height);
  } else if (unitOfMeasurement === 'inches') {
    area = (length/144 * height/144);
  }
  const cases = Math.round(area / 24);


  document.getElementById('resultSentence').innerText=`The area of your space is ${area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} feet. You will need ${cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} cases.`
}

