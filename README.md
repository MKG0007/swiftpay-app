# SwiftPay 💸

> **A secure, enterprise-grade cross-border remittance platform built with React 18 and ASP.NET Core 8, enabling international money transfers with robust authentication, KYC verification, FX quote management, settlement, reconciliation, and role-based access control.**

---

## 🚀 Overview

SwiftPay is a full-stack remittance management platform designed to streamline international money transfers while ensuring security, compliance, and operational efficiency.

The platform allows customers to initiate cross-border remittances and provides dedicated portals for internal teams—including Compliance, Operations, Treasury, Agents, and Administrators—to manage the complete remittance lifecycle, from KYC verification and FX quote generation to settlement, reconciliation, and audit tracking.

---

## ✨ Key Highlights

- 🔐 Secure JWT-based Authentication & Authorization
- 👥 Role-Based Access Control (RBAC) across 6 user roles
- 🪪 Multi-step KYC Verification Workflow
- 💱 FX Quote Management with Rate Locking & Fee Rules
- 💸 End-to-End Remittance Lifecycle Management
- 📦 Settlement Batch Processing & Reconciliation
- 🔔 Real-time Notification System
- 📜 Comprehensive Audit Logging
- 🗑️ Soft Delete Support with Global Query Filters
- 📚 RESTful API with Swagger Documentation

---

# 🏗️ Tech Stack

## Frontend

- React 18
- Vite
- React Router v6
- Tailwind CSS
- Axios
- Context API
- React Hot Toast
- Lucide React Icons

## Backend

- ASP.NET Core 8 Web API
- Entity Framework Core
- SQL Server
- JWT Bearer Authentication
- BCrypt.Net
- AutoMapper
- Swagger / OpenAPI

---

# 🏛️ Architecture

The application follows a layered architecture to maintain clean separation of concerns.

```
Presentation Layer
        │
        ▼
Controllers
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
Entity Framework Core
        │
        ▼
SQL Server
```

### Design Principles

- Repository Pattern
- Service Layer Pattern
- DTO-based API Design
- Dependency Injection
- RESTful Architecture
- Clean Separation of Concerns

---

# 👥 User Roles

| Role | Responsibilities |
|------|------------------|
| **Customer** | Register, complete KYC, create remittances, track transactions |
| **Agent** | Assist customers and manage transaction approvals |
| **Compliance** | Review KYC documents and perform compliance verification |
| **Operations** | Handle settlement, reconciliation, amendments, and refunds |
| **Treasury** | Manage FX quotes, exchange rates, rate locks, and fee rules |
| **Administrator** | Manage users, roles, reports, configurations, and audit logs |

---

# ✨ Core Features

## 🔐 Authentication & Authorization

- JWT Bearer Authentication
- BCrypt password hashing
- Role-Based Access Control (RBAC)
- Protected API endpoints
- Route Guards on frontend

---

## 🪪 KYC Verification

- Multi-step verification workflow
- Document upload
- Compliance approval process
- KYC status tracking

---

## 💱 FX Quote Management

- Multi-currency support
- Exchange rate management
- Margin calculation
- Fee Rules
- Rate Lock functionality

---

## 💸 Remittance Management

- Create international transfers
- Beneficiary management
- Transaction tracking
- Status updates
- Amendment support
- Refund processing

---

## 📦 Settlement & Reconciliation

- Settlement batch generation
- Batch status management
- Reconciliation workflow
- Mismatch detection
- Settlement reports

---

## 🔔 Notifications

- KYC updates
- Transaction alerts
- Settlement notifications
- Compliance notifications
- Refund updates

---

## 📜 Audit Logging

Every critical action performed within the system is logged with:

- User
- Resource
- Action
- Timestamp
- Previous & Updated Values

---

## 🗑️ Soft Delete Support

Instead of permanently deleting records, entities are marked using an `IsDeleted` flag, ensuring:

- Data recovery
- Audit history preservation
- Safer database operations

---

# 📂 Project Structure

```text
SwiftPay/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── SwiftPay/
    ├── Controllers/
    ├── Services/
    ├── Repositories/
    ├── Models/
    ├── DTOs/
    ├── Config/
    ├── Middleware/
    ├── Migrations/
    ├── Constants/
    ├── Enums/
    ├── Program.cs
    └── appsettings.json
```

---

# 🔐 Authentication Flow

```text
User Login/Register
        │
        ▼
Credentials Validation
        │
        ▼
Password Verification (BCrypt)
        │
        ▼
JWT Token Generation
        │
        ▼
Token Stored (Frontend)
        │
        ▼
Axios Interceptor
        │
        ▼
Protected API Request
        │
        ▼
[Authorize] Validation
        │
        ▼
Role-Based Access Granted
```

---

# ⚙️ Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/SwiftPay.git
cd SwiftPay
```

---

## Backend Setup

```bash
cd SwiftPay

dotnet restore

# Configure SQL Server connection string
# Update appsettings.json

dotnet ef database update

dotnet run
```

Backend runs at:

```
https://localhost:5001
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📖 API Documentation

After running the backend, Swagger is available at:

```
https://localhost:5001/swagger
```

---

# 🗄️ Database

**Database:** SQL Server

### Entity Framework Core Features

- Code-First Migrations
- Global Query Filters
- Soft Delete Support
- Filtered Unique Indexes
- Fluent API Configurations
- Cascade & Restrict Delete Behaviors

---

# 🛡️ Security Features

- JWT Authentication
- Password Hashing (BCrypt)
- Role-Based Authorization
- Secure API Endpoints
- Protected Client Routes
- Audit Logging
- Soft Delete Mechanism

---

# 📈 Future Enhancements

- Email Notifications
- SMS OTP Verification
- Live Exchange Rate Integration
- Payment Gateway Integration
- Multi-Factor Authentication (MFA)
- Docker Deployment
- CI/CD Pipeline
- Unit & Integration Testing

---

# 👨‍💻 Author

**Mayank Kumar Gupta**

Built during a Full-Stack .NET internship to demonstrate enterprise application development using modern web technologies, clean architecture principles, and scalable backend design with ASP.NET Core 8 and React 18.

---

## ⭐ If you found this project helpful, consider giving it a star!
