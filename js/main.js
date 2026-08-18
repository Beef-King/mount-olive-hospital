// Mount Olive Hospital — shared front-end behaviour
// NOTE: This is a static demo site. Forms below do not send data anywhere;
// they simulate success states so the client can see the intended flow.
// Wiring these up to a real backend (Flask + database) is a later phase.

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  /* ---------- Appointment form (mock submit) ---------- */
  const apptForm = document.getElementById('appointment-form');
  if (apptForm) {
    apptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('full-name').value.trim();
      const successBox = document.getElementById('appointment-success');
      const nameSpan = document.getElementById('success-name');
      if (!apptForm.checkValidity()) {
        apptForm.reportValidity();
        return;
      }
      if (nameSpan) nameSpan.textContent = name;
      apptForm.style.display = 'none';
      if (successBox) successBox.classList.add('visible');
    });
  }

  /* ---------- Staff login (mock auth) ---------- */
  const loginForm = document.getElementById('staff-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const staffId = document.getElementById('staff-id').value.trim();
      const errorBox = document.getElementById('login-error');
      if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
      }
      // Demo-only "auth": any non-empty ID/password combination succeeds.
      // A real deployment would verify credentials against a backend.
      sessionStorage.setItem('mo_staff_name', staffId);
      if (errorBox) errorBox.style.display = 'none';
      window.location.href = 'staff-dashboard.html';
    });
  }

  /* ---------- Staff dashboard guard + greeting ---------- */
  const dashGreeting = document.getElementById('dash-staff-name');
  if (dashGreeting) {
    const stored = sessionStorage.getItem('mo_staff_name');
    if (!stored) {
      window.location.href = 'staff-login.html';
    } else {
      dashGreeting.textContent = stored;
    }
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('mo_staff_name');
      window.location.href = 'staff-login.html';
    });
  }

  /* ---------- Contact form (mock submit) ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      const successBox = document.getElementById('contact-success');
      contactForm.style.display = 'none';
      if (successBox) successBox.classList.add('visible');
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
