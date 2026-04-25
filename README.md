# Node Asset Management

## 📋 Project Overview

**Node Asset Management** is a simple yet powerful Asset Management API built with **Fastify**, **TypeScript**, and **MySQL**. This project provides a RESTful API for managing company assets, tracking inventory, and maintaining asset records efficiently.

### What is this project?
This is a backend API that allows you to:
- Create, read, update, and delete assets
- Track asset information in a centralized database
- Manage asset categories and statuses
- Generate asset reports

### Tech Stack
- **Backend Framework**: Fastify (fast and low-overhead web framework)
- **Language**: TypeScript (strongly typed JavaScript)
- **Database**: MySQL (relational database)
- **Runtime**: Node.js (16+)

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **MySQL** (version 5.7 or higher)
- **npm** or **yarn** (package manager)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Girdhari007/Node_Asset_Management.git
   cd Node_Asset_Management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the project root and add the following:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=asset_management
   PORT=3000
   ```

4. **Run the project**
   
   For development (with auto-reload):
   ```bash
   npm run dev
   ```

   For production:
   ```bash
   npm run build
   npm start
   ```

---

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Response Format
All API responses follow this standard format:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "error": null
}
```

### Asset Endpoints

#### 1. Get All Assets
- **Method**: `GET`
- **Endpoint**: `/assets`
- **Description**: Retrieve a list of all assets
- **Response Example**:
  ```json
  {
    "success": true,
    "message": "Assets fetched successfully",
    "data": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "status": "Active",
        "createdAt": "2026-04-25T10:00:00Z"
      }
    ]
  }
  ```

#### 2. Get Asset by ID
- **Method**: `GET`
- **Endpoint**: `/assets/:id`
- **Description**: Retrieve a specific asset by its ID
- **Parameters**: 
  - `id` (required): Asset ID
- **Response Example**:
  ```json
  {
    "success": true,
    "message": "Asset fetched successfully",
    "data": {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "status": "Active"
    }
  }
  ```

#### 3. Create New Asset
- **Method**: `POST`
- **Endpoint**: `/assets`
- **Description**: Create a new asset in the system
- **Request Body**:
  ```json
  {
    "name": "Laptop",
    "category": "Electronics",
    "status": "Active",
    "description": "Dell Latitude 5520"
  }
  ```
- **Response Example**:
  ```json
  {
    "success": true,
    "message": "Asset created successfully",
    "data": {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics"
    }
  }
  ```

#### 4. Update Asset
- **Method**: `PUT`
- **Endpoint**: `/assets/:id`
- **Description**: Update an existing asset
- **Parameters**: 
  - `id` (required): Asset ID
- **Request Body**:
  ```json
  {
    "status": "Inactive"
  }
  ```

#### 5. Delete Asset
- **Method**: `DELETE`
- **Endpoint**: `/assets/:id`
- **Description**: Delete an asset from the system
- **Parameters**: 
  - `id` (required): Asset ID

---

## 📁 Project Structure

```
Node_Asset_Management/
├── src/
│   ├── config/
│   │   └── db.ts           # Database connection pool configuration
│   ├── controllers/        # API request handlers
│   ├── routes/            # API route definitions
│   ├── models/            # Database models
│   ├── middleware/        # Custom middleware
│   └── server.ts          # Main server file
├── .env                   # Environment variables (create this)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Development

### Key Technologies Explained
- **Fastify**: A fast web framework with excellent performance
- **TypeScript**: Adds type safety to JavaScript
- **MySQL Connection Pool**: Manages database connections efficiently (see `src/config/db.ts`)

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

---

## ⚙️ Configuration

### Database Configuration
The project uses a MySQL connection pool for efficient database management. Connection settings are loaded from your `.env` file.

### Environment Variables
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DB_HOST` | Database server host | Yes | - |
| `DB_PORT` | Database server port | Yes | - |
| `DB_USER` | Database username | Yes | - |
| `DB_PASSWORD` | Database password | Yes | - |
| `DB_NAME` | Database name | Yes | - |
| `PORT` | Server port | No | 3000 |

---

## 📝 Important Notes

- All responses follow the standard format: `{ success: boolean, message: string, data?: any, error?: any }`
- The project uses a MySQL connection pool for optimal performance
- Always ensure your `.env` file is added to `.gitignore`
- Make sure MySQL is running before starting the server

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Support

If you encounter any issues or have questions, please create an issue in the GitHub repository.

---

**Last Updated**: 2026-04-25 14:21:36