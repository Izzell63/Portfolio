  document.getElementById('logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});


function sendEmail(e) {
  e.preventDefault(); // Prevent form submission

  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  emailjs.send("service_kr6btac", "template_nv5xjdr", params)
    .then(() => {
      alert("Message sent successfully");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Oops! Something went wrong.");
    });
}
