document.addEventListener('DOMContentLoaded', function () {
    const developerText = document.getElementById('developer-text');
    const roles = ['Frontend Developer', 'UI/UX Designer'];
    let roleIndex = 0;

    function typeText(index) {
      developerText.textContent = roles[roleIndex].slice(0, index);
      if (index < roles[roleIndex].length) {
        setTimeout(function () {
          typeText(index + 1);
        }, 150); // Adjust the typing speed here (milliseconds)
      } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(function () {
          typeText(0);
        }, 1000); // Pause before typing the next role (milliseconds)
      }
    }

    typeText(0);
  });

//   Theme
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check if dark theme is already set in local storage
  const isDarkTheme = localStorage.getItem('dark-theme') === 'true';

  // Set default theme based on local storage or system preference
  if (isDarkTheme || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-theme');
  }

  // Toggle dark theme on button click
  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    // Save theme preference to local storage
    const isDarkModeEnabled = body.classList.contains('dark-theme');
    localStorage.setItem('dark-theme', isDarkModeEnabled);
  });
});



// download resume
document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.getElementById('download-resume');
  downloadButton.addEventListener('click', function () {
    const resumePath = 'Resume_Anjali_NV.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'AnjaliResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


// send message
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const sendMessageButton = document.getElementById('send-message');

  sendMessageButton.addEventListener('click', function () {
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your Formspree endpoint
    const formAction = 'https://formspree.io/f/xpzvaylw';

    contactForm.setAttribute('action', formAction);
    contactForm.setAttribute('method', 'POST');

    // Submit the form
    contactForm.submit();
  });
});
