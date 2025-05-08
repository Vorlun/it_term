# 📘 IT Terms API

A RESTful API for managing a dictionary of IT terminology. This project supports full CRUD operations and follows a clean architecture using services, validation, and centralized error handling.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-green)
![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

---

## 📌 Features

- ✅ Create, Read, Update, Delete IT terms
- ✅ Validation with Joi
- ✅ Mongoose schema modeling
- ✅ RESTful API structure with services and controllers
- ✅ Centralized error handling
- ✅ Modular folder structure
- ✅ `.env` environment config support

---

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Joi** – Data validation
- **ES Modules** – Modern JavaScript syntax

---

## 📁 Project Structure

```

project-root/
├── config/          # MongoDB connection setup
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Mongoose schemas
├── routes/          # Express route definitions
├── validations/     # Joi schemas
├── middlewares/     # Error handling, validation
├── screenshots/     # (optional) Screenshots of the API/UI
├── app.js           # Express app setup
├── server.js        # Main entry point
└── .env             # Environment variables (not committed)

````

---

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/yourusername/it_terms.git
cd it_terms
npm install
````

### 🌐 Create `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/it_terms
```

### ▶️ Run the Server

```bash
# Production
npm start

# Development (with nodemon)
npm run dev
```

---

## 📌 API Endpoints

All requests/responses are in JSON format.

### 🔹 Create a new term

`POST /api/dict`

```json
Request Body:
{
  "term": "API",
  "letter": "A"
}
```

---

### 🔹 Get all terms

`GET /api/dict`

---

### 🔹 Get a single term by ID

`GET /api/dict/:id`

---

### 🔹 Update an existing term

`PUT /api/dict/:id`

```json
Request Body:
{
  "term": "Application Programming Interface"
}
```

---

### 🔹 Delete a term

`DELETE /api/dict/:id`

---

## ✅ Validation

All incoming data is validated using **Joi**. On validation failure, a `400 Bad Request` error is returned with detailed message.

---

## ⚠️ Error Handling

* All unexpected errors are caught using a centralized error-handling middleware.
* Errors follow a consistent JSON structure for easier debugging.

```json
{
  "status": 400,
  "message": "Validation error",
  "details": { ... }
}
```

---

## 🧪 Testing (Optional)

Coming soon — or use Postman collection for manual testing.

---

## 📸 Screenshots

*Add sample screenshots of Postman or frontend interface if available.*
Example (if using Swagger or Postman UI):

```
screenshots/
└── postman-example.png
```

---

## 📃 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to your branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Your Name**
GitHub: [@yourusername](https://github.com/yourusername)

---

## 📮 Contact

Have questions, suggestions, or feedback?
Reach out at **[your-email@example.com](mailto:your-email@example.com)** or create an [issue](https://github.com/yourusername/it_terms/issues).

---

```

---

### Yordam kerakmi?

Agar xohlasangiz:
- ✅ Badge linklar `yourusername` bo‘yicha to‘g‘rilab beraman
- ✅ `.env.example` faylni ham yaratib beraman
- ✅ Postman collection `.json` faylga APIlaringizni eksport qilib, tayyor holatda beraman

Qaysi biridan boshlaylik?
```
