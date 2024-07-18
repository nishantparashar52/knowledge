function deepClone(obj, clone= {}) {
    const cloned = clone = {}
    if(obj === null || obj === undefined) return
    if(Array.isArray(obj)) {
        obj.forEach((item) => cloned[item] = deepClone(item))
    }
    for (const [key,value] of Object.entries(obj)) {
        if(['object', 'function'].indexOf(obj[value]) > -1) {
            cloned[key] = value
            deepClone(obj)
        } else cloned[key] = value
    }
    return cloned;
}

let obj = {
    "name": "yogendra",
    "age": 23,
    "indian": true,
    "dummy":{
        "dummy1":{
            "dummy2":{
                "name":"yogendra"
            }
        }
    },
    yummy:"yummy",
    funcCheck: function() {
        console.log(sim);
    },
    "address": [
      {
        "type": "present",
        "city": "bangalore"
      },
      {
        "type": "permanent",
        "city": "kanpur"
      }
    ],
    "phno": [
      "9888876556",
      "1234565678"
    ],
    "hobbies": {
      "type": "school",
      "hob": "reading"
    },
    "location" : {
              "lat" : 40.12,
              "lon" : -71.34
          }
  }
console.log(deepClone(obj))