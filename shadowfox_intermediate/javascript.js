const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const formMessage = document.getElementById("formMessage");

        // Check required fields
        if (name === "" || email === "" || phone === "") {
            formMessage.textContent = "Please fill in all required fields.";
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Check phone number
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            formMessage.textContent = "Please enter a valid 10-digit phone number.";
            return;
        }

        formMessage.textContent = "Thank you! Your message has been submitted.";

        contactForm.reset();
    });
}

const faqQuestions = document.querySelectorAll(".faq");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = this.nextElementSibling;

        answer.classList.toggle("active");

    });

});