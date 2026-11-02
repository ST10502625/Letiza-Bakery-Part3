// ================================================================
// LETIZA BAKERY - JAVASCRIPT (PART 3)
// ================================================================

document.addEventListener("DOMContentLoaded", function() {
    console.log("Letiza Bakery loaded successfully.");

    // 1. PRODUCT SEARCH
    const searchInput = document.getElementById("product-search");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const filter = searchInput.value.toLowerCase();
            const productCards = document.querySelectorAll(".product-card");
            productCards.forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    // 2. LIGHTBOX GALLERY
    const galleryImages = document.querySelectorAll(".cake-gallery img");
    if (galleryImages.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.style.cssText = "display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.9); justify-content:center; align-items:center; cursor:pointer;";
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px; box-shadow: 0 0 20px rgba(255,255,255,0.2);";
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.cssText = "position:absolute; top:20px; right:40px; color:white; font-size:50px; cursor:pointer;";
        
        lightbox.appendChild(closeBtn); lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        
        galleryImages.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", function() {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
            });
        });
        lightbox.addEventListener("click", () => lightbox.style.display = "none");
    }

    // 3. FORM VALIDATION HELPERS
    function showError(input, message) {
        input.classList.add("input-error");
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("span");
            error.className = "error-message";
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.innerText = message;
    }

    function clearError(input) {
        input.classList.remove("input-error");
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) error.innerText = "";
    }

    // 4. CONTACT FORM
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        const nameInput = document.getElementById("c-name");
        const emailInput = document.getElementById("c-email");
        const messageInput = document.getElementById("c-message");

        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener("input", () => clearError(input));
        });

        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            if (nameInput.value.trim() === "") { showError(nameInput, "Name is required."); isValid = false; }
            if (emailInput.value.trim() === "") { showError(emailInput, "Email is required."); isValid = false; }
            else if (!emailInput.value.includes("@")) { showError(emailInput, "Please enter a valid email."); isValid = false; }
            if (messageInput.value.trim() === "") { showError(messageInput, "Message is required."); isValid = false; }

            if (isValid) {
                const emailDraft = `To: letiza.bakery@gmail.com\nFrom: ${emailInput.value}\nSubject: Website Contact from ${nameInput.value}\n\nMessage:\n${messageInput.value}`;
                const responseDiv = document.createElement("div");
                responseDiv.className = "success-response";
                responseDiv.innerHTML = `<h3>Message Compiled Successfully!</h3>
                    <p>Your email draft is ready:</p>
                    <pre style="white-space: pre-wrap; background: #fff; padding: 10px; border: 1px solid #ccc;">${emailDraft}</pre>`;
                
                const oldResponse = document.querySelector(".success-response");
                if (oldResponse) oldResponse.remove();
                
                contactForm.parentNode.insertBefore(responseDiv, contactForm.nextSibling);
                contactForm.reset();
            }
        });
    }

    // 5. ENQUIRY FORM
    const enquiryForm = document.querySelector("main form:not(.contact-form form)");
    if (enquiryForm && !contactForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const typeInput = document.getElementById("order-type");
        const messageInput = document.getElementById("message");

        [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
            input.addEventListener("input", () => clearError(input));
        });

        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            if (nameInput.value.trim() === "") { showError(nameInput, "Name is required."); isValid = false; }
            if (emailInput.value.trim() === "") { showError(emailInput, "Email is required."); isValid = false; }
            else if (!emailInput.value.includes("@")) { showError(emailInput, "Please enter a valid email."); isValid = false; }
            if (phoneInput.value.trim() === "" || phoneInput.value.trim().length < 10) { showError(phoneInput, "Valid phone number required."); isValid = false; }
            if (messageInput.value.trim() === "") { showError(messageInput, "Please provide details."); isValid = false; }

            if (isValid) {
                const type = typeInput.options[typeInput.selectedIndex].text;
                let cost = "Custom cakes start from R350.";
                let avail = "We require 3 days notice.";
                if(typeInput.value === "bulk") { cost = "10% discount applied."; avail = "Please allow 1 week's notice."; }
                else if(typeInput.value === "other") { cost = "We will evaluate and quote you."; avail = "To be confirmed."; }

                const responseDiv = document.createElement("div");
                responseDiv.className = "success-response";
                responseDiv.innerHTML = `<h3>Enquiry Processed, ${nameInput.value}!</h3>
                    <p><strong>Enquiry Type:</strong> ${type}</p>
                    <p><strong>Cost Estimate:</strong> ${cost}</p>
                    <p><strong>Availability:</strong> ${avail}</p>
                    <p><em>A confirmation has been sent to ${emailInput.value}.</em></p>`;
                
                const oldResponse = document.querySelector(".success-response");
                if (oldResponse) oldResponse.remove();
                
                enquiryForm.parentNode.insertBefore(responseDiv, enquiryForm.nextSibling);
                enquiryForm.reset();
            }
        });
    }
});