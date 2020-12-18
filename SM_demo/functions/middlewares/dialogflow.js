const {	dialogflow } = require('actions-on-google');
const app = dialogflow({ debug: true})


app.intent('Default Welcome Intent', (conv) => {
  conv.ask(`Hi there, thank you for being on time. My name is Alice. I was built and trained to detect unwanted behavior. I know, we both have better things to do. So let's make this interrogation a brief one. I'll now start asking some control questions.  `);
});

app.intent('emotion', (conv)=>{
  conv.ask('cool');
})

module.exports = app;
