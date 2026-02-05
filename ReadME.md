# Consultancy Website (Django + React)<br>

A full-stack consultancy web application built with **Django REST Framework** and **React**.<br>

## 🚀 Tech Stack <br>

### Backend<br>
- Django<br>
- Django REST Framework<br>
- JWT Authentication<br>
- SQLite (dev)<br>
- django-cors-headers<br>

### Frontend<br>
- React<br>
- Axios<br>
- React Router<br>
-npm with vite<br>
-tailwindcss<br>
-lucide-react<br>
-react-router-dom<br>
-npm i react-scroll<br>
-yup,formik<br>
-reat-hot-toast<br>


---

## 🔐 Features

- User Signup & Login (JWT)<br>
- Protected API routes<br>
- Role-based access (planned)<br>
- Consultancy services management (planned)<br>

---

## ⚙️ Backend Setup<br>

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
