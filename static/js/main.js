const data = {
  "rice": {
    n: { low: 0, high: 80 },
    p: { low: 0, high: 40 },
    k: { low: 0, high: 30 },
    moisture: { low: 0, high: 30 },
    ph: { low: 0, high: 5.5 },
    message: "The best fertilizer to use in rice is Urea. You can use locally available fertilizer like animal dung to increase land fertility as well as rice production. धानमा प्रयोग गर्ने सबैभन्दा राम्रो मल युरिया हो। यूरिया प्रयोग गर्नुहोस् | जमिनको उर्वराशक्ति र धान उत्पादन बढाउन स्थानीय स्तरमा उपलब्ध मल जस्तै जनावरको गोबर प्रयोग गर्न सकिन्छ ।",
    fertilizer: {
      image: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480x270/7/9/7/143797_shutterstock_723175018.jpg',
      caption: 'Urea (युरिया)'
    },
    manure: {
      image:'https://businessfocus.co.ug/wp-content/uploads/2020/07/Manure.jpg', 
      caption: 'Animal dung (जनावरको गोबर)'
    }
  },
  'maize': {
    n: { low:0, high:80},
    p: { low:0, high:40},
    k: { low: 0, high: 40},
    moisture: { low: 0, high: 30},
    ph: { low: 0, high: 5.5},
  },
  'chickpea': {
    n: { low:0, high:40},
    p: { low:0, high:60},
    k: { low: 0, high: 80},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 5.5},
  },
  'kidneybeans': {
    n: { low:0, high:20},
    p: { low:0, high:60},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 45},
    ph: { low: 0, high: 5.5},
  },
  'pigeonpeas': {
    n: { low:0, high:20},
    p: { low:0, high:60},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 45},
    ph: { low: 0, high: 5.5},
  },
  'mothbeans': {
    n: { low:0, high:20},
    p: { low:0, high:40},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 30},
    ph: { low: 0, high: 5.5},
  },
  'mungbean': {
    n: { low:0, high:20},
    p: { low:0, high:40},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 80},
    ph: { low: 0, high: 5.5},
  },
  'banana': {
    n: { low:0, high: 100},
    p: { low:0, high: 75},
    k: { low: 0, high: 50},
    moisture: { low: 0, high: 40},
    ph: { low: 0, high: 6.5},
  },
  'mango': {
    n: { low:0, high: 20},
    p: { low:0, high: 20},
    k: { low: 0, high: 30},
    moisture: { low: 0, high: 15},
    ph: { low: 0, high: 5.5},
  },
  'grapes': {
    n: { low:0, high: 20},
    p: { low:0, high: 125},
    k: { low: 0, high: 200},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
  },
  'watermelon': {
    n: { low:0, high: 100},
    p: { low:0, high: 10},
    k: { low: 0, high: 50},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
  },
  'apple': {
    n: { low:0, high: 20},
    p: { low:0, high: 125},
    k: { low: 0, high: 200},
    moisture: { low: 0, high: 50},
    ph: { low: 0, high: 6.5},
  },
  'orange': {
    n: { low:0, high: 20},
    p: { low:0, high: 10},
    k: { low: 0, high: 10},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
  },
}

const fertilizerForm = document.querySelector('#fertilizer-form');
const results = document.querySelector('#results');
const cropSelectForm = document.querySelector('select[name=crop]');
const nitrogenInput = document.querySelector('input[name=n');
const phosphorusInput = document.querySelector('input[name=p');
const potassiumInput = document.querySelector('input[name=k');
const soilMoistureInput = document.querySelector('input[name=moisture');
const phInput = document.querySelector('input[name=ph');

cropSelectForm.addEventListener("change", (e) => {
  const {n, p, k, moisture, ph } = data[e.target.value];
  nitrogenInput.placeholder = `Enter nitrogen value (${n.low} - ${n.high})`;
  nitrogenInput.min = n.low;
  nitrogenInput.max = n.high;

  phosphorusInput.placeholder = `Enter phosphorus value (${p.low} - ${p.high})`;
  phosphorusInput.min = p.low;
  phosphorusInput.max = p.high;

  potassiumInput.placeholder = `Enter potassium value (${k.low} - ${k.high})`;
  potassiumInput.min = k.low;
  potassiumInput.max = k.high;

  soilMoistureInput.placeholder = `Enter soil moisture value (${moisture.low} - ${moisture.high})`;
  soilMoistureInput.min = moisture.low;
  soilMoistureInput.max = moisture.high;

  phInput.placeholder = `Enter ph value (${ph.low} - ${ph.high})`;
  phInput.min = ph.low;
  phInput.max = ph.high;
});

fertilizerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const {message, fertilizer, manure } = data[cropSelectForm.value];
  results.innerHTML = `
    <p>${message}</p>
    <h4>Fertilizer</h4>
    <img width=200 height=200 src="${fertilizer.image}" alt=""><br>
    <span>${fertilizer.caption}</span>
    <br>
    <br>
    <h4>Manure</h4>
    <img width=200 height=200 src="${manure.image}" alt="">
    <br>
    <span>${manure.caption}</span>
  `;
});
