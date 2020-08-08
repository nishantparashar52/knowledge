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


  function objClone(obj, clone) {
      const clonedObj = clone || {};
        for(const [key,value] of Object.entries(obj)) {
            if(['object', 'function'].indexOf(value) > -1) {
                clonedObj[key] = value;
                objClone(value);
            } else {
                clonedObj[key] = value;
            }
        }
        return clonedObj;
  }
  const clonedObj = objClone(obj);
  console.log(clonedObj);