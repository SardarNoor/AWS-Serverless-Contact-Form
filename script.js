document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector(".submit-btn");
  const responseDiv = document.getElementById("responseMessage");
  
  // Get form data
  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  // Validate
  if (!formData.name || !formData.email || !formData.message) {
    showResponse("Please fill all fields", "error");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    showResponse("Please enter a valid email", "error");
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.classList.add("loading");
  responseDiv.classList.add("hidden");

  try {
    const response = await fetch(
      "https://56mu5x8lwd.execute-api.us-east-1.amazonaws.com/dev/contact", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();
    
    if (response.ok) {
      showToast("Message sent successfully!");  // Corrected: show Toast
      form.reset();
    } else {
      throw new Error(result.error || "Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
    showResponse(error.message, "error"); // Still use showResponse for errors
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});

// For error message inside form
function showResponse(message, type) {
  const responseDiv = document.getElementById("responseMessage");
  responseDiv.textContent = message;
  responseDiv.className = type;
  responseDiv.classList.remove("hidden");
}

// For floating success Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'show';

  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}
