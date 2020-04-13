const data = require('.//russia.json')
console.log(data[0]);


const mos = data.map(item=>{return item.region});

function name(params) {
  return  Array.from(new Set(params));
}
// console.log(name(mos));
const res = {}
name(mos).forEach(function(item, i, arr) {

  res[`1${i+1}0000`] = [{'province': item}]

});
// console.log(res);
for (id in res) {
  // тело цикла выполняется для каждого свойства объекта
  cityId = +id + 100
  res[id][0]['id'] = cityId

  data.map(item=>{
    if (res[id][0].province===item.region){
      if (res[id][0].name === undefined){
        res[id][0].name = item.city
      } else {
        res[id].push({
          province: item.region,
          name: item.city,
          id: +res[id][res[id].length-1]['id'] + 100
        })
      }}})
}
// let json = JSON.stringify(student)
console.log( JSON.stringify(res));
var str = JSON.stringify(res);
var fs = require('fs');
fs.writeFileSync('./test.json', str);

let ruu = [
  {
    "region": "Москва и Московская обл.",
    "city": "Москва"
  },
  {
    "region": "Москва и Московская обл.",
    "city": "Абрамцево"
  }
]
let arr = {
  "110000": [
    {
      "province": "北京市",
      "name": "市辖区",
      "id": "110100"
    }
  ],
  "120000": [
    {
      "province": "天津市",
      "name": "市辖区",
      "id": "120100"
    }
  ],
  "130000": [
    {
      "province": "河北省",
      "name": "石家庄市",
      "id": "130100"
    },
    {
      "province": "河北省",
      "name": "唐山市",
      "id": "130200"
    }
  ]
}

