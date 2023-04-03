import emailjs from "emailjs-com";

export const SendEmail = (email) => {
  //Setting the message for registration
  var message;

  if (email.role === "Buyer")
    message =
      "Start browsing with RB&MS and stand a chance to win exclusive rewards and offers.";
  else
    message =
      "Hurrayy!! Now you are a part of the RB&NS Merchant Community. Start selling your products and set a new height among your peers";

  // Object with the data to send
  const emailData = {
    user_name: email.user_name,
    role: email.role,
    message,
  };

  return emailjs
    .send("service_gonv5lf", "template_hkvdita", emailData, "IO-tHKTjIpByN9aF9")
    .then(
      (result) => {
        console.log(result.text);
        return result.text;
      },
      (error) => {
        console.log(error.text);
        return error.text;
      }
    );
};
