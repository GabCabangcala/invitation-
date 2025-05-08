document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const goingBtn = document.getElementById('going');
    const notGoingBtn = document.getElementById('notgoing');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    // Enable or disable buttons based on name input
    function setButtonsEnabled(enabled) {
      goingBtn.disabled = !enabled;
      notGoingBtn.disabled = !enabled;
    }
  
    // Handle name input changes
    nameInput.addEventListener('input', () => {
      const name = nameInput.value.trim();
      setButtonsEnabled(name.length > 0);
      
      // Clear previous confirmation on new input
      confirmationMessage.textContent = '';
      confirmationMessage.style.color = '';
      removeButtonActiveState();
    });
  
    // Remove active state from buttons
    function removeButtonActiveState() {
      goingBtn.classList.remove('active');
      notGoingBtn.classList.remove('active');
    }
  
    // Handle response confirmation
    function confirmResponse(response) {
      const name = nameInput.value.trim();
      if (!name) return;
      
      removeButtonActiveState();
      
      if (response === 'going') {
        goingBtn.classList.add('active');
        confirmationMessage.style.color = '#d4af37'; // Gold color
        confirmationMessage.textContent = `Thank you, ${name}! We look forward to celebrating with you.`;
      } else if (response === 'notgoing') {
        notGoingBtn.classList.add('active');
        confirmationMessage.style.color = '#c08081'; // Old rose color
        confirmationMessage.textContent = `Thank you for letting us know, ${name}. You will be missed!`;
      }
    }
  
    // Event listeners for buttons
    goingBtn.addEventListener('click', () => {
      confirmResponse('going');
    });
  
    notGoingBtn.addEventListener('click', () => {
      confirmResponse('notgoing');
    });
  
    // Add focus effect for input field
    nameInput.addEventListener('focus', () => {
      nameInput.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.5)';
    });
  
    nameInput.addEventListener('blur', () => {
      if (!nameInput.value.trim()) {
        nameInput.style.boxShadow = '';
      }
    });
  
    // Add subtle card animation
    const card = document.querySelector('.card');
    
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
      
      // Don't apply this effect on mobile
      if (window.innerWidth > 768) {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    });
  
    document.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });