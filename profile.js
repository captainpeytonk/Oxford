function saveProfile() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const profile = { name, email };
  localStorage.setItem('userProfile', JSON.stringify(profile));
  alert('Profile saved!');
}

window.onload = function () {
  const stored = localStorage.getItem('userProfile');
  if (stored) {
    const profile = JSON.parse(stored);
    document.getElementById('name').value = profile.name || '';
    document.getElementById('email').value = profile.email || '';
  }
};
