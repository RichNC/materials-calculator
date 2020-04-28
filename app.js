

const unitText = () => {
  const unitOfMeasurement = document.getElementById('unitOfMeasurement').value;
  document.getElementById('inUnit').innerText=`(in ${unitOfMeasurement})`
  document.getElementById('inUnit2').innerText=`(in ${unitOfMeasurement})`
}

const casesNeeded = () => {
  const length = document.getElementById('length').value;
  const height = document.getElementById('height').value;
  const unitOfMeasurement = document.getElementById('unitOfMeasurement').value;
  let area = '';
  if (unitOfMeasurement === 'feet') {
    area = Math.round((length * height)*100)/100;
  } else if (unitOfMeasurement === 'inches') {
    area = Math.round((length/12 * height/12)*100)/100;
  };
  const cases = Math.ceil(area / 24);
  const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  const addPluralS = () => cases === 1 ? '' : 's';
  const addPluralFeet = () => area === 1 ? 'foot' : 'feet';

  document.getElementById('resultSentence').innerHTML=`The area of your space is <strong>${formatNumber(area)}</strong> ${addPluralFeet()}.<br>You will need <strong>${formatNumber(cases)}</strong> case${addPluralS()}.`
}


