// script.js

document.addEventListener('DOMContentLoaded', function() {
    const certificationsSection = document.getElementById('certifications');
    const certificationsLink = document.getElementById('certificationsLink');
    let isZoomed = false;

    certificationsLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (!isZoomed) {
            certificationsSection.scrollIntoView({ behavior: 'smooth' });
            certificationsSection.classList.add('zoomed');
            isZoomed = true;
        } else {
            certificationsSection.classList.remove('zoomed');
            isZoomed = false;
        }
    });

    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach(certificate => {
        certificate.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    });
});
