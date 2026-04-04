function setFormIdle(){
  formSubmissionPending = false;

  if(formSubmissionTimer){
    clearTimeout(formSubmissionTimer);
    formSubmissionTimer = null;
  }

  if(contactSubmit){
    contactSubmit.disabled = false;
    contactSubmit.style.opacity = '';
    // Align with initial button label in HTML
    contactSubmit.textContent = 'Obtenir une première analyse';
  }
}
