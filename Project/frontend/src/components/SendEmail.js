import emailjs from "emailjs-com";

// Function to send email using emailjs
export const SendEmail = (email) => {
  // Variable to store the message for registration
  var message;

  // Setting the default template ID
  var template = "template_hkvdita";

  // Checking the role and setting the message accordingly
  if (email.role === "Buyer")
    message =
      "Start browsing with RB&MS and stand a chance to win exclusive rewards and offers.";
  else if (email.role === "Seller")
    message =
      "Hurrayy!! Now you are a part of the RB&NS Merchant Community. Start selling your products and set a new height among your peers";
  else if (email.role === "purchase") {
    message =
      "Keep in touch with RB&NS and look at other different products we offer..";

    // Setting a different template ID for purchase role
    template = "template_3wg309d";
  }

  // Adding the message to the email object
  email.message = message;

  // Sending the email using emailjs and returning the result
  return emailjs
    .send("service_gonv5lf", template, email, "IO-tHKTjIpByN9aF9")
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
