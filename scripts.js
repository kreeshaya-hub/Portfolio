// HEADER & FOOTER
document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error("Error loading header:", error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error("Error loading footer:", error));
});

// FORM SUBMISSION

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formStatus = document.getElementById("form-status");
    formStatus.innerText = "Sending message...";

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                service_id: "service_8rqzr4k",
                template_id: "template_p3rjx56",
                user_id: "dnR2rZ_JIJKDLBts8",
                template_params: formData
            })
        });

        if (response.ok) {
            formStatus.innerText = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        formStatus.innerText = "Error sending message. Please try again.";
        console.error("Email sending error:", error);
    }
});
