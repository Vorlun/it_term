# 📘 IT Terms API

A RESTful API for managing a dictionary of IT terms. This project supports full CRUD (Create, Read, Update, Delete) operations.

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM for schema management
- **Joi** – Data validation
- **ES Modules** – Using `type: module` in package.json

## 📁 Project Structure

project-root/
│
├── config/ # MongoDB connection setup
├── controllers/ # API logic and request handlers
├── services/ # Business logic layer
├── models/ # Mongoose schemas
├── routes/ # Express route definitions
├── validations/ # Joi validation schemas
├── middlewares/ # Custom middlewares (error handling, validation)
├── app.js # Express app configuration
├── server.js # Entry point to start the server
└── .env # Environment variables

bash
Копировать
Редактировать

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/yourusername/it_terms.git
cd it_terms
npm install
Create a .env file in the root directory and add:

env
Копировать
Редактировать
PORT=3000
MONGO_URI=mongodb://localhost:27017/it_terms
▶️ Running the App
bash
Копировать
Редактировать
npm start
Or in development mode (with nodemon):

bash
Копировать
Редактировать
npm run dev
📌 API Endpoints
🔹 POST /api/dict
Create a new term

json
Копировать
Редактировать
Request Body:
{
  "term": "API",
  "letter": "A"
}
🔹 GET /api/dict
Retrieve all terms

🔹 GET /api/dict/:id
Retrieve a single term by ID

🔹 PUT /api/dict/:id
Update an existing term

json
Копировать
Редактировать
Request Body:
{
  "term": "Application Programming Interface"
}
🔹 DELETE /api/dict/:id
Delete a term by ID

✅ Validation
All inputs are validated using Joi. If validation fails, a 400 Bad Request error is returned.

⚠️ Error Handling
Centralized error handling using a custom middleware that catches and formats errors in a consistent structure.

📃 License
This project is licensed under the MIT License.

🤝 Contributing
Fork this repository

Create your feature branch: git checkout -b feature/my-feature

Commit your changes: git commit -m 'Add my feature'

Push to the branch: git push origin feature/my-feature

Open a Pull Request

👨‍💻 Author
Your Name

yaml
Копировать
Редактировать

---

Let me know if you want me to:
- Add badge icons (e.g., build status, license)
- Include Postman collection/export
- Tailor the "Author" section with your name and GitHub profile
- Add usage examples with screenshots or `curl` commands

Happy coding!