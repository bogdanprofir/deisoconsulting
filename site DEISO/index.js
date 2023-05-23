document.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    function resetSlidesAndDots() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            dots[i].classList.remove("active");
        }
    }

    function showSlide(index) {
        slides[index].style.display = "block";
        dots[index].classList.add("active");
    }

    // This function will advance the slide by one
    function nextSlide() {
        resetSlidesAndDots();
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Auto-advance slides
    let slideIndex = 0;
    showSlide(slideIndex);
    setInterval(nextSlide, 35000);

    // Add click events to dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            resetSlidesAndDots();
            slideIndex = i;
            showSlide(i);
        });
    }
});



// contact form

function sendEmail() {
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gourmetica.ro@gmail.com",
      Password: "8E5A71F6B82D838EED24F1CB0C6AA998651D",
      To: "gourmetica.ro@gmail.com",
      From: "gourmetica.ro@gmail.com",
      Subject: "Contact site DEISO",
      Body:
        "Name: " +
        name +
        "<br> Email: " +
        email +
        "<br> Message: " +
        message,
    }).then(function (message) {
      alert("Mesajul a fost trimis cu succes!");
    });
  }
  
