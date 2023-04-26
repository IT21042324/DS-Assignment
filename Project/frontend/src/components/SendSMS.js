// import { Vonage } from '@vonage/server-sdk'
// import { UseUserContext } from '../context/useUserContext';

// export function SmsSender(){

// const {user1} = UseUserContext()

//   const vonage = new Vonage({
//     apiKey: "547d4296",
//     apiSecret: "oTgWjRr2fvoq83yf"
//   })
  
//   const from = "RB&NS"
//   const to = user1[0].contact
//   const text = 'Your Payment has been successful and we will notify you in further status'
  
//   return {sendSMS:async function sendSMS() {
//     await vonage.sms.send({to, from, text})
//         .then(resp => { console.log('Message sent successfully'); console.log(resp); })
//         .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
//   } }
  
// }