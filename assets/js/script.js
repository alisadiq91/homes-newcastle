//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//emailJS contact us form

//alert for contact us form submission 

function showAlert(){
    alert("Thank you for contacting us!\nWe aim to reply to all queries within 2 working days.");
}



//emailJS contact us form

//alert for contact us form submission 

function showAlert(){
    alert("Thank you for contacting us!\nWe aim to reply to all queries within 2 working days.");
}



//emailJS contact us form

function sendEmail() {

  var name = document.getElementById("fromName").value;
    var email = document.getElementById("fromEmail").value;
    var message = document.getElementById("message").value;
    if (name.isEmpty() == false){
      if (email.isEmpty() == false){
        if (message.isEmpty() == false){
               var contactForm ={
                    from_name: name,
                    from_email: email,
                    message: message,
                };
              // emailJs key
                emailjs.send("service_mc16uvn","template_e2wnhxl",contactForm)
                .then(function(response){
                    console.log("success", response.status);
                    showAlert(); 
                    document.getElementById("fromName").value = '';
                    document.getElementById("fromEmail").value = '';
                    document.getElementById("message").value = '';
                });
          }
          else{
          alert("Invalid content entered. Fields can not be empty.");
          }
      }
      else{
      alert("Invalid content entered. Fields can not be empty.");
      }
    }
  else{
  alert("Invalid content entered. Fields can not be empty.");
  }
}