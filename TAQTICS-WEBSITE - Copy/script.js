document.addEventListener("DOMContentLoaded", function () {

    // 
    // 1. MOBILE NAVBAR
    // 

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuBtn.setAttribute("aria-expanded", isOpen);
            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            menuBtn.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after clicking a link

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open menu");
                menuBtn.textContent = "☰";

            });

        });

        // Close menu with Escape key

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("active");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open menu");
                menuBtn.textContent = "☰";

            }

        });

    }


    // 
    // 2. AUDIT DEMO FUNCTIONALITY
    //

    const completeAudit = document.getElementById("completeAudit");
    const resetAudit = document.getElementById("resetAudit");

    const qualityScore = document.getElementById("qualityScore");
    const completionScore = document.getElementById("completionScore");

    const checksCompleted = document.getElementById("checksCompleted");
    const progressBar = document.getElementById("auditProgressBar");

    const checkOne = document.getElementById("checkOne");
    const checkTwo = document.getElementById("checkTwo");
    const checkThree = document.getElementById("checkThree");

    const auditMessage = document.getElementById("auditMessage");

    function updateAudit(completed) {

        const percentage = completed * 10;

        if (qualityScore) {
            qualityScore.textContent = percentage + "%";
        }

        if (completionScore) {
            completionScore.textContent = percentage + "%";
        }

        if (checksCompleted) {
            checksCompleted.textContent = completed;
        }

        if (progressBar) {
            progressBar.style.width = percentage + "%";
        }

        const checks = [checkOne, checkTwo, checkThree];

        checks.forEach(function (check, index) {

            if (check) {

                if (index < completed) {
                    check.textContent = "Completed";
                    check.style.color = "#25a879";
                } else {
                    check.textContent = "Pending";
                    check.style.color = "#d58a24";
                }

            }

        });

    }

    if (completeAudit) {

        completeAudit.addEventListener("click", function () {

            updateAudit(10);

            if (auditMessage) {
                auditMessage.textContent =
                    "Demo audit completed successfully!";
                auditMessage.style.color = "#25a879";
            }

            completeAudit.textContent = "Audit Completed";
            completeAudit.disabled = true;

        });

    }

    if (resetAudit) {

        resetAudit.addEventListener("click", function () {

            updateAudit(0);

            if (auditMessage) {
                auditMessage.textContent =
                    "Sample dashboard for demonstration.";
                auditMessage.style.color = "#536176";
            }

            if (completeAudit) {
                completeAudit.textContent = "Run Demo Audit";
                completeAudit.disabled = false;
            }

        });

    }


    // 
    // 3. CUSTOMER COUNTER ANIMATION
    //

    const counters = document.querySelectorAll(".counter");

    function animateCounter(counter) {

        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";

        if (!Number.isFinite(target)) return;

        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const currentValue = Math.floor(target * progress);

            counter.textContent = currentValue.toLocaleString("en-IN") + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }

        }

        requestAnimationFrame(updateCounter);

    }

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.5
        });

        counters.forEach(function (counter) {
            observer.observe(counter);
        });

    } else {

        counters.forEach(animateCounter);

    }


    // 
    // 4. SMOOTH SCROLL
    // 

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // 
    // 5. CURRENT YEAR IN FOOTER
    // 
    const footerYear = document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.textContent =
            "© " + new Date().getFullYear() +
            " Taqtics Website Demo";

    }


    // 
    // 6. CONSOLE MESSAGE
    // 

    console.log("Taqtics Home Page JavaScript Loaded!");

});

document.querySelectorAll('.product-card a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (!target) {
            event.preventDefault();
            alert('Product details coming soon!');
        }
    });
});
// 
// INDUSTRIES PAGE JAVASCRIPT
// 

// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isOpen);

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking navigation link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");

            menuBtn.textContent = "☰";
        });

    });

    // Close menu with Escape key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");

            menuBtn.textContent = "☰";
        }

    });

}

// Industries Card Hover Animation

const industryCards = document.querySelectorAll(".product-card");

industryCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-6px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });

});

// Footer Current Year

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
    footerYear.textContent =
        "© " + new Date().getFullYear() + " Taqtics Website Demo";
}
// 
// COMPANY PAGE JAVASCRIPT
// 

document.addEventListener("DOMContentLoaded", function () {

    // 1. Update Footer Year

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 2. Company Image Error Handling

    const companyImage = document.querySelector(".company-image img");

    if (companyImage) {

        companyImage.addEventListener("error", function () {

            this.style.display = "none";

            console.log("Company image not found. Please check image path.");

        });

    }


    // 3. Company Cards Animation

    const companyCards = document.querySelectorAll(".company-card");

    companyCards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        card.style.transition = "all 0.5s ease";

        setTimeout(function () {

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
// 
// RESOURCES PAGE JAVASCRIPT
// 

document.addEventListener("DOMContentLoaded", function () {

    // 1. Update Footer Year

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 2. Resources Cards Animation

    const resourceCards = document.querySelectorAll(".product-card");

    resourceCards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";

        setTimeout(function () {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });


    // 3. Resource Card Click Effect

    resourceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.cursor = "pointer";
        });

    });


    // 4. Explore Resources Button

    const exploreButton = document.querySelector(
        'a[href="#resources"]'
    );

    if (exploreButton) {

        exploreButton.addEventListener("click", function () {

            const resourceSection = document.getElementById("resources");

            if (resourceSection) {
                resourceSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }

});
// 
// PRICING PAGE JAVASCRIPT
//

document.addEventListener("DOMContentLoaded", function () {

    // 1. Update Footer Year

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 2. Pricing Cards Animation

    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "all 0.5s ease";

        setTimeout(function () {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 200);

    });


    // 3. Pricing Card Hover Effect

    pricingCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.cursor = "pointer";

        });

    });


    // 4. FAQ Section

    const faqItems = document.querySelectorAll(".pricing-faq details");

    faqItems.forEach(function (item) {

        item.addEventListener("toggle", function () {

            if (item.open) {

                faqItems.forEach(function (otherItem) {

                    if (otherItem !== item) {
                        otherItem.open = false;
                    }

                });

            }

        });

    });

});
// 
// TAQTICS FREE TRIAL PAGE JAVASCRIPT
// 


// 1. UPDATE FOOTER YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 2. FREE TRIAL FORM

const trialForm = document.getElementById("trialForm");

const trialMessage = document.getElementById("trialMessage");


if (trialForm) {

    trialForm.addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();

        // Get form values
        const fullName = document.getElementById("fullName").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const company = document.getElementById("company").value.trim();

        const locations = document.getElementById("locations").value;


        // Check empty fields
        if (
            !fullName ||
            !email ||
            !phone ||
            !company ||
            !locations
        ) {

            trialMessage.textContent = "Please fill in all fields.";

            trialMessage.style.color = "red";

            return;
        }


        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            trialMessage.textContent = "Please enter a valid email address.";

            trialMessage.style.color = "red";

            return;
        }


        // Check phone number
        const phonePattern = /^[0-9+\-\s()]{10,15}$/;

        if (!phonePattern.test(phone)) {

            trialMessage.textContent = "Please enter a valid phone number.";

            trialMessage.style.color = "red";

            return;
        }


        // Show success message
        trialMessage.textContent =
            "Thank you! Your demo trial form has been submitted successfully.";

        trialMessage.style.color = "green";


        // Reset form
        trialForm.reset();

    });

}
// 
// TAQTICS BOOK A DEMO JAVASCRIPT
// 

// 1. UPDATE FOOTER YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 2. BOOK A DEMO FORM

const demoForm = document.getElementById("demoForm");

const demoMessage = document.getElementById("demoSuccessMessage");


if (demoForm) {

    demoForm.addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();


        // Get form values
        const name = document.getElementById("demoName").value.trim();

        const email = document.getElementById("demoEmail").value.trim();

        const phone = document.getElementById("demoPhone").value.trim();

        const company = document.getElementById("demoCompany").value.trim();

        const locations = document.getElementById("demoLocations").value;

        const message = document.getElementById("demoMessage").value.trim();


        // Check required fields
        if (!name || !email || !phone || !company || !locations) {

            demoMessage.textContent = "Please fill in all required fields.";

            demoMessage.style.color = "red";

            return;
        }


        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            demoMessage.textContent = "Please enter a valid email address.";

            demoMessage.style.color = "red";

            return;
        }


        // Phone validation
        const phonePattern = /^[0-9+\-\s()]{10,15}$/;

        if (!phonePattern.test(phone)) {

            demoMessage.textContent = "Please enter a valid phone number.";

            demoMessage.style.color = "red";

            return;
        }


        // Show success message
        demoMessage.textContent =
            "Thank you! Your demo request has been submitted successfully.";

        demoMessage.style.color = "green";


        // Reset form
        demoForm.reset();

    });

}