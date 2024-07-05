
function ImageData() {
    /* promise return img data resolve after x milliosecond*/
    return new Promise(resolve => {
      setTimeout(() => resolve({
        imgUrl: `https://picsum.photos/200/300?${Math.random() * 1000}`,
        duration: Math.floor(Math.random() * (10 - 3)) + 3
      }), Math.random() * (2000 - 500) + 500)
    })
}

async function sequentialCall() {
   let response = await ImageData();
    
   setTimeout(sequentialCall, response.duration * 1000);
}
sequentialCall().then(val => console.log(val));