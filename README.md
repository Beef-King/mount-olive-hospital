# Mount Olive Hospital & Maternity — Website (Demo)

Static, responsive multi-page site built to show Mount Olive Hospital (Uyo)
what a booking-enabled website could look like. No backend yet — this is a
front-end demo you can host free on GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — About the hospital
- `services.html` — Services offered
- `doctors.html` — Doctor/staff profiles (sample data — replace before launch)
- `appointments.html` — Appointment request form (mock submit, no backend)
- `contact.html` — Contact form + hospital details
- `staff-login.html` — Staff login (demo auth: any ID/password works)
- `staff-dashboard.html` — Mock dashboard showing sample appointment requests

## Notes before showing the hospital
- All doctor names, and the appointments table in the staff dashboard, are
  **placeholder data** — swap in the real names/details once approved.
- Address and phone numbers were pulled from public directory listings —
  double-check them with the hospital directly.
- Forms don't send data anywhere yet (no backend). That's the next phase —
  likely Flask + a database, deployed on AWS, per your cloud engineering plan.

## Hosting on GitHub Pages
1. Create a new GitHub repo (e.g. `mount-olive-hospital`).
2. Push this folder's contents to the repo's `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mount-olive-hospital.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from branch → main / (root)**.
4. Your site will be live at `https://<your-username>.github.io/mount-olive-hospital/`.
