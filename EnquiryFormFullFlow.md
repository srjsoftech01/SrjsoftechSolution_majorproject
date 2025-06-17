# 📬 Enquiry Form – Full Stack Implementation (React + Express + MySQL)

This project is a complete full-stack implementation of an **Enquiry Form**, where the frontend is built using **React.js**, and the backend is handled by **Node.js with Express.js** and **MySQL** as the database. This document explains the step-by-step flow of how data moves from the user interface to the database.

---

## 🌐 Frontend (React)

### ✅ Component: `InputForm.jsx`

This is the main UI component for collecting user inquiries. It uses React hooks and Tailwind CSS for state handling and styling respectively.

### 🔧 Key Functionalities

- **State Management**

  ```js
  const [form, setForm] = useState({ name: '', contact: '', ... });
  const [captcha, setCapture] = useState(null);
  ```

  Holds the form data and reCAPTCHA status.

- **Form Fields** Includes input fields for:

  - Full Name
  - Contact Number
  - Email Address
  - Dropdown for Services
  - Textarea for Message
  - Checkbox for Terms & Conditions
  - Google reCAPTCHA for bot protection

- **Styling** Tailwind CSS is used to style the form elements for responsiveness and UI consistency.

- **Validation**

  - All fields are required
  - reCAPTCHA must be completed
  - User must agree to terms before submission

- **Form Submission (Currently)**

  ```js
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) return alert("Please verify reCAPTCHA");
    console.log("Form Data:", form);
  };
  ```

  Currently, it logs the data; you can integrate Axios/fetch to send it to the backend (described below).

---

## 🚀 Backend (Express.js + MySQL)

### 📄 File: `db.js`

Establishes a connection to a MySQL database using credentials from `.env`:

```js
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
```

### 🛠️ File: `routes/ambeytech_contact_routes.js`

Defines the API route that receives and processes the enquiry form data.

#### Endpoint: `POST /submit-form`

- **Input**: JSON body with name, contact, email, service, message, agreed
- **Database Query**: Prepared `INSERT` query to store inquiry data

```sql
INSERT INTO inquiries (name, contact, email, service, message, agreed)
VALUES (?, ?, ?, ?, ?, ?)
```

- **Response**: JSON indicating success or failure

### 🔐 Security

- Uses **parameterized queries** to prevent SQL injection
- You can add backend validation and sanitization for improved security

---

## 🔗 Full Data Flow

1. **User Interface (React)**

   - User fills out the form and completes reCAPTCHA.
   - On clicking submit, the form is validated.

2. **Form Submission (Frontend)**

   - (To be added) Axios `POST` request sends `form` data to the API:
     ```js
     await axios.post("/api/submit-form", form);
     ```

3. **API Endpoint (Express)**

   - `/submit-form` receives the request.
   - Extracts data from `req.body`.
   - Executes an `INSERT` statement into MySQL.

4. **Database (MySQL)**

   - Data is inserted into the `inquiries` table.
   - Example structure:
     ```sql
     CREATE TABLE inquiries (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       contact VARCHAR(20),
       email VARCHAR(100),
       service VARCHAR(100),
       message TEXT,
       agreed BOOLEAN,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

5. **Response Handling**

   - Backend returns JSON with success or failure message.
   - Frontend can show a toast or alert on success.

---

## 🛡️ Security & Best Practices

- ✅ reCAPTCHA to prevent bot submissions
- ✅ Server-side validation recommended
- ✅ Escape user inputs with parameterized queries
- 🚧 CSRF tokens can be added if deploying to production

---

## 🧩 Future Improvements

- Integrate Axios call in `InputForm.jsx`
- Add form-level error messages
- Show loading spinner on submit
- Send confirmation email using `nodemailer`
- Deploy frontend and backend to platforms like Vercel/Render + Railway

---

## 📫 Contact

For queries or contributions, contact: `info@yoursite.com`

---

> This project demonstrates a practical full-stack implementation of a user enquiry system using modern technologies like React and Express with secure data handling and structured design.

