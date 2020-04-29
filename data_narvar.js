let schema = {
  cards: [
    {
      formControls: [
        {
          props: {
            label: "label",
            name: "settings/backgroundColor",
            type: "hex-color",
            validationError: "",
          }
        },
        {
          props: {
            label: "label",
            name: "settings/textColor",
            type: "hex-color",
            validationError: "",
          }
        },
        {
          props: {
            label: "label",
            name: "settings/linkColor",
            type: "hex-color",
            validationError: "",
          }
        }
      ]
    }
  ]
};

// Narvar 1st round

Reducer

this.firstName
this.lastName


const messagesStream = [
  {subject: "Re: Re: Message1"},
  {subject: "Message4"},
  {subject: "Message1"},
  {subject: "Re: Message1"},  
  {subject: "Message2"},
  {subject: "Re: Message2"},  
  {subject: "Re: Message4"},
  {subject: "Re: Message4"},
  {subject: "Re: Re: Re: Message1"},
];
      // Messsage4
//    Re: Message4
//    Re: Message4  
//      Re: Re: Message4
// Messsage1
//    Re: Message1
//      Re: Re: Message1  
//        Re: Re: Re: Message1
// Messsage2
//    Re: Message2


20 minutes


Message1
    Re: Message1
        Re: Message1
            Re: Message1

function getOutputObj(messagesStream) {
    messagesStream.reduce((acc, currItem) => {
        value = currItem.subject;
    const objKey = value.split(' ').pop();
    const indexOfKey = value.lastIndexOf('Re:') > 0 ? value.lastIndexOf('Re:')/2 : 0;
    if(acc[objKey]) {
        if(acc[objKey][indexOfKey]) {
            acc[objKey][indexOfKey] += 1;
        } else {
            acc[objKey][indexOfKey] = 1;
        }
    } else {
      acc[objKey] = [];
      acc[objKey][indexOfKey] = 1
    }
}, []);
}
