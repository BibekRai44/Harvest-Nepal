const data = {
  "rice": {
    n: { low: 0, high: 80 },
    p: { low: 0, high: 40 },
    k: { low: 0, high: 30 },
    moisture: { low: 0, high: 30 },
    ph: { low: 0, high: 5 },
    message: "The best fertilizer to use in rice accroding to your chemical value is Urea. You can use locally available fertilizer like animal dung to increase land fertility as well as rice production. धानमा प्रयोग गर्ने सबैभन्दा राम्रो मल युरिया हो। यूरिया प्रयोग गर्नुहोस् | जमिनको उर्वराशक्ति र धान उत्पादन बढाउन स्थानीय स्तरमा उपलब्ध मल जस्तै जनावरको गोबर प्रयोग गर्न सकिन्छ ।",
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
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in maize accroding to your chemical value is NPK 15:15:15 which contains 15% of nitrogen,phosphrous and potassium. Locally available organic fertilizer like animal dung would be perfect to yield maize production. मकैमा प्रयोग गर्ने उत्तम मल NPK 15:15:15 हो जसमा 15% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। स्थानीय रूपमा उपलब्ध जैविक मल जस्तै जनावरको गोबर मकै उत्पादन गर्न उपयुक्त हुनेछ।",
    fertilizer: {
      image: 'https://saprotan-utama.com/wp-content/uploads/2020/11/15_NPK151515.jpg',
      caption: 'NPK 15:15:15'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'chickpea': {
    n: { low:0, high:40},
    p: { low:0, high:60},
    k: { low: 0, high: 80},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in chickpea accroding to your chemical value is NPK 5:10:10 which is low in nitrogen (N) and higher in potassium (P) and phosphorus (K). Locally available organic fertilizer like animal dung would be perfect to yield chickpeas production. चनामा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 5:10:10 हो जसमा नाइट्रोजन (N) कम र पोटासियम (P) र फस्फोरस (K) बढी हुन्छ। स्थानीय रूपमा उपलब्ध जैविक मल जस्तै जनावरको गोबर चना उत्पादन गर्न उपयुक्त हुनेछ।",
    fertilizer: {
      image: 'https://i.etsystatic.com/23088193/r/il/885022/3716760807/il_fullxfull.3716760807_hfje.jpg',
      caption: 'NPK 5:10:10'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'kidneybeans': {
    n: { low:0, high:20},
    p: { low:0, high:60},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 45},
    ph: { low: 0, high: 5},
    
    message: "Kidney beans do not need much specific fertiliser. As they are legumes their roots have nodules that contain bacteria that will fix nitrogen, so they can grow even in nitrogen poor soils. They grow best in rich soil containing compost or other organic matter. किड्नी बीन्सलाई खास मलको आवश्यकता पर्दैन। तिनीहरू फलफूल भएकाले तिनीहरूको जरामा नोडलहरू हुन्छन् जसमा ब्याक्टेरिया हुन्छन् जसले नाइट्रोजनलाई ठीक गर्छ, त्यसैले तिनीहरू नाइट्रोजन कम माटोमा पनि बढ्न सक्छन्। तिनीहरू कम्पोस्ट वा अन्य जैविक पदार्थ भएको समृद्ध माटोमा राम्रोसँग बढ्छन् | स्थानीय रूपमा उपलब्ध जैविक मल जस्तै जनावरको गोबर चना उत्पादन गर्न उपयुक्त हुनेछ।",
    fertilizer: {
      image: 'https://foxlakeflpo.org/images/uploads/pages/No_Fertilizer_Art.jpg',
      caption: 'No specific fertilizer'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'pigeonpeas': {
    n: { low:0, high:20},
    p: { low:0, high:60},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 45},
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in pigeonpeas accroding to your chemical value is DAP (Diammonium Phosphate). DAP is a commonly used fertilizer that provides a balanced supply of nitrogen and phosphorus, which are essential nutrients for pigeonpea plants. It promotes healthy plant growth, improves yield, and enhances the overall quality of the harvested crop. परेवा दाना प्रयोग गर्ने सबैभन्दा राम्रो मल डीएपी (डायमोनियम फास्फेट) हो। डीएपी सामान्यतया प्रयोग हुने मल हो जसले नाइट्रोजन र फस्फोरसको सन्तुलित आपूर्ति प्रदान गर्दछ, जुन परेवा दाना बोटका लागि आवश्यक पोषक तत्व हुन्। यसले स्वस्थ बिरुवाको वृद्धिलाई बढावा दिन्छ, उत्पादनमा सुधार गर्छ, र फसल बालीको समग्र गुणस्तर बढाउँछ | स्थानीय रूपमा उपलब्ध जैविक मल जस्तै जनावरको गोबर परेवा दाना उत्पादन गर्न उपयुक्त हुनेछ।",
    fertilizer: {
      image: 'https://static-01.daraz.pk/p/ab4cb3c33dcce9ac0534708393c578c7.jpg',
      caption: 'DAP'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'mothbeans': {
    n: { low:0, high:20},
    p: { low:0, high:40},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 30},
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in moth beans accroding to your chemical values is NPK . Organic fertlizers like fish emulsion, seaweed extract, and bone meal would be good for moth beans than inorganic fertilizers. मोथ बीन्समा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK हो। जैविक मलहरू जस्तै माछा इमल्शन, समुद्री शैवाल निकासी, र हड्डीको खाना अकार्बनिक मलहरू भन्दा माथ बीन्सका लागि राम्रो हुन्छ। म अर्गानिक मल प्रयोग गर्न सुझाव दिन्छु.",
    fertilizer: {
      image: 'https://m.media-amazon.com/images/I/71yy+QZTCHL._SX466_.jpg',
      caption: 'NPK'
    },
    manure: {
      image:'https://cdn.shopify.com/s/files/1/0577/2745/1326/products/IMG_3241_2000x2667.jpg?v=1633644704', 
      caption: 'Fish Emulsion (माछा इमल्शन)'
    }
  },
  'mungbean': {
    n: { low:0, high:20},
    p: { low:0, high:40},
    k: { low: 0, high: 20},
    moisture: { low: 0, high: 80},
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in mung beans accroding to your chemical value is NPK 10-10-10 which contains 10% of nitrogen,phosphrous and potassium. Organic fertlizers like compost manure would be better alternative to use than inorganic fertilizers. मुग दालमा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 10-10-10 हो जसमा 10% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। अजैविक मल भन्दा कम्पोष्ट मल जस्ता प्राङ्गारिक मल प्रयोगको लागि उत्तम विकल्प हुनेछ।",
    fertilizer: {
      image: 'https://n1.sdlcdn.com/imgs/j/n/y/Greatindos-Premium-Quality-1000gram-NPK-SDL289482178-1-a9d2a.jpg',
      caption: 'NPK 10:10:10'
    },
    manure: {
      image:'https://www.agrifarming.in/wp-content/uploads/2015/03/Organic-Compost.jpg', 
      caption: 'Compost Manure (कम्पोस्ट मल)'
    }
  },
  'banana': {
    n: { low:0, high: 100},
    p: { low:0, high: 75},
    k: { low: 0, high: 50},
    moisture: { low: 0, high: 40},
    ph: { low: 0, high: 6},
    message: "The best fertilizer to use in banana accroding to your chemical value is NPK 14-14-14 which contains 14% of nitrogen,phosphrous and potassium. Locally available well-rotted animal manure, such as cow or horse manure, can be an effective organic fertilizer for banana plants. केरामा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 14-14-14 हो जसमा 10% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। स्थानीय रूपमा उपलब्ध राम्ररी सडेको पशु मल, जस्तै गाई वा घोडाको मल, केराको बोटको लागि प्रभावकारी जैविक मल हुन सक्छ।",
    fertilizer: {
      image: 'https://partners.simplot.com/-/media/simplot-mvc/simplot-partners/images/products/best-and-apex/74420_apex_14-14-14_bag_mockup2-a1200x1200-jpg.jpg?h=600&la=en&mw=600&w=600',
      caption: 'NPK 14:14:14'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'mango': {
    n: { low:0, high: 20},
    p: { low:0, high: 20},
    k: { low: 0, high: 30},
    moisture: { low: 0, high: 15},
    ph: { low: 0, high: 5},
    message: "The best fertilizer to use in mango accroding to your chemical value is NPK 14-14-14 which contains 14% of nitrogen,phosphrous and potassium. Locally available well-rotted animal manure, such as cow or horse manure, can be an effective organic fertilizer for banana plants. केरामा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 14-14-14 हो जसमा 10% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। स्थानीय रूपमा उपलब्ध राम्ररी सडेको पशु मल, जस्तै गाई वा घोडाको मल, केराको बोटको लागि प्रभावकारी जैविक मल हुन सक्छ।",
    fertilizer: {
      image: 'https://partners.simplot.com/-/media/simplot-mvc/simplot-partners/images/products/best-and-apex/74420_apex_14-14-14_bag_mockup2-a1200x1200-jpg.jpg?h=600&la=en&mw=600&w=600',
      caption: 'NPK 14:14:14'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'grapes': {
    n: { low:0, high: 20},
    p: { low:0, high: 125},
    k: { low: 0, high: 200},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
    message: "The best fertilizer to use in grapes accroding to your chemical value is NPK 14-14-14 which contains 14% of nitrogen,phosphrous and potassium. Locally available well-rotted animal manure, such as cow or horse manure, can be an effective organic fertilizer for banana plants. केरामा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 14-14-14 हो जसमा 10% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। स्थानीय रूपमा उपलब्ध राम्ररी सडेको पशु मल, जस्तै गाई वा घोडाको मल, केराको बोटको लागि प्रभावकारी जैविक मल हुन सक्छ।",
    fertilizer: {
      image: 'https://partners.simplot.com/-/media/simplot-mvc/simplot-partners/images/products/best-and-apex/74420_apex_14-14-14_bag_mockup2-a1200x1200-jpg.jpg?h=600&la=en&mw=600&w=600',
      caption: 'NPK 14:14:14'
    },
    manure: {
      image:'https://www.wur.nl/upload/5160f541-9f91-44b7-bfbc-08e0f4727505_shutterstock_1284414196.jpg', 
      caption: 'Animal manure (पशु मल)'
    }
  },
  'watermelon': {
    n: { low:0, high: 100},
    p: { low:0, high: 10},
    k: { low: 0, high: 50},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
    message: "The best fertilizer to use in watermelon accroding to your chemical value is NPK 10-10-10 which contains 10% of nitrogen,phosphrous and potassium. Seaweed  as organic fertilizer enhances plant growth, improves fruit quality, and helps plants withstand stress. तरबूजमा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 10-10-10 हो जसमा 10% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। जैविक मलको रूपमा समुद्री शैवाल निकासीले बिरुवाको वृद्धि बढाउँछ, फलको गुणस्तर सुधार गर्छ, र बोटबिरुवाहरूलाई तनाव सहन मद्दत गर्छ",
    fertilizer: {
      image: 'https://n1.sdlcdn.com/imgs/j/n/y/Greatindos-Premium-Quality-1000gram-NPK-SDL289482178-1-a9d2a.jpg',
      caption: 'NPK 10:10:10'
    },
    manure: {
      image:'https://www.agrifarming.in/wp-content/uploads/2022/10/Seaweed-Extract-Uses-in-Agriculture1-1024x768.jpg', 
      caption: 'Seaweed (समुद्री शैवाल)'
    }
  },
  'apple': {
    n: { low:0, high: 20},
    p: { low:0, high: 125},
    k: { low: 0, high: 200},
    moisture: { low: 0, high: 50},
    ph: { low: 0, high: 6},
    message: "The best fertilizer to use in apple accroding to your chemical value is NPK 12-12-12 which contains 12% of nitrogen,phosphrous and potassium. Blood meal, soybean meal, composted chicken manure, cottonseed meal, and feather meal are all good, organic nitrogen sources for apple. तरबूजमा प्रयोग गर्ने सबैभन्दा राम्रो मल NPK 12-12-12 हो जसमा 12% नाइट्रोजन, फस्फ्रस र पोटासियम हुन्छ। रगतको खाना, भटमासको खाना, कम्पोष्ट गरिएको कुखुराको मल, कपासको बीउ र फेदर मील सबै राम्रो, स्याउका लागि जैविक नाइट्रोजन स्रोत हुन्।",
    fertilizer: {
      image: 'https://i.etsystatic.com/23088193/r/il/885022/3716760807/il_fullxfull.3716760807_hfje.jpg',
      caption: 'NPK 12:12:12'
    },
    manure: {
      image:'https://www.agrifarming.in/wp-content/uploads/2015/03/Organic-Compost.jpg', 
      caption: 'Compost Manure (कम्पोस्ट मल)'
    }
  },
  'orange': {
    n: { low:0, high: 20},
    p: { low:0, high: 10},
    k: { low: 0, high: 10},
    moisture: { low: 0, high: 60},
    ph: { low: 0, high: 4},
    message: "The best fertilizer to use in orange accroding to your chemical value is Jack's Class No.1.5 20-10-20 Citrus Food Fertilizer. Composted manure is organic orange fertilizer that can be added to the soil around the base of the tree or used as mulch. It is an excellent source of organic matter and other nutrients for oragne trees. सुन्तलामा प्रयोग गर्नको लागि सबैभन्दा राम्रो मल ज्याकको कक्षा नं.1.5 20-10-20 सिट्रस फूड उर्वरक हो। कम्पोस्ट गरिएको मल जैविक सुन्तला मल हो जुन रूखको आधार वरपरको माटोमा थप्न सकिन्छ वा मल्चको रूपमा प्रयोग गर्न सकिन्छ। यो orange रूखहरूको लागि जैविक पदार्थ र अन्य पोषक तत्वहरूको उत्कृष्ट स्रोत हो।",
    fertilizer: {
      image: 'https://cdn.shopify.com/s/files/1/0594/5583/2249/products/citrusfeed_1200x918.png?v=1675022344',
      caption: 'Jacks Class No.1.5 20-10-20 Citrus Food Fertilizer'
    },
    manure: {
      image:'https://www.agrifarming.in/wp-content/uploads/2015/03/Organic-Compost.jpg', 
      caption: 'Compost Manure (कम्पोस्ट मल)'
    }
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
