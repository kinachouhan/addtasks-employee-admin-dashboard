

const admin = [
    {
        "id": "a001",
        "email": "admin@company.com",
        "password": "12345"
    }
]


const employees = [
  {
    "id": "e001",
    "name": "Aarav Sharma",
    "email": "employee1@company.com",
    "password": "12345",
    "taskCounts": {
      "active": 1,
      "accepted": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "UI Bug Fix",
        "taskDescription": "Fix alignment issues on dashboard page",
        "taskDate": "2025-01-15",
        "taskAssignTo": "employee1@company.com",
        "category": "Frontend",
        "active": true,
        "accepted": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Navbar Enhancement",
        "taskDescription": "Improve navbar responsiveness",
        "taskDate": "2025-01-18",
        "taskAssignTo": "employee1@company.com",
        "category": "UI/UX",
        "active": false,
        "accepted": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Theme Color Update",
        "taskDescription": "Apply dark theme to dashboard",
        "taskDate": "2025-01-20",
        "taskAssignTo": "employee1@company.com",
        "category": "Frontend",
        "active": false,
        "accepted": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": "e002",
    "name": "Rohit Verma",
    "email": "employee2@company.com",
    "password": "12345",
    "taskCounts": {
      "active": 1,
      "accepted": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "API Integration",
        "taskDescription": "Integrate employee list API",
        "taskDate": "2025-01-16",
        "taskAssignTo": "employee2@company.com",
        "category": "Backend",
        "active": false,
        "accepted": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Auth Middleware",
        "taskDescription": "Create JWT authentication middleware",
        "taskDate": "2025-01-21",
        "taskAssignTo": "employee2@company.com",
        "category": "Backend",
        "active": true,
        "accepted": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "e003",
    "name": "Priya Singh",
    "email": "employee3@company.com",
    "password": "12345",
    "taskCounts": {
      "active": 1,
      "accepted": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Database Cleanup",
        "taskDescription": "Remove unused employee records",
        "taskDate": "2025-01-17",
        "taskAssignTo": "employee3@company.com",
        "category": "Database",
        "active": false,
        "accepted": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Index Optimization",
        "taskDescription": "Optimize database indexes for faster queries",
        "taskDate": "2025-01-22",
        "taskAssignTo": "employee3@company.com",
        "category": "Database",
        "active": true,
        "accepted": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": "e004",
    "name": "Neha Patel",
    "email": "employee4@company.com",
    "password": "12345",
    "taskCounts": {
      "active": 0,
      "accepted": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Testing",
        "taskDescription": "Perform unit testing on employee module",
        "taskDate": "2025-01-19",
        "taskAssignTo": "employee4@company.com",
        "category": "Testing",
        "active": false,
        "accepted": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Bug Regression",
        "taskDescription": "Verify bug fixes after deployment",
        "taskDate": "2025-01-23",
        "taskAssignTo": "employee4@company.com",
        "category": "Testing",
        "active": false,
        "accepted": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin }
}