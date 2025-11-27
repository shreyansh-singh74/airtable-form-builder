# folder strcutre
backend/
├── src/
│   ├── index.ts            ← main server file
│   ├── routes/
│   │   └── user.routes.ts  ← all routes for “user”
│   ├── controllers/
│   │   └── user.controller.ts ← logic for user endpoints
│   ├── services/
│   │   └── user.service.ts ← business logic (optional but clean)
│   ├── models/
│   │   └── user.model.ts   ← DB schema (Mongo, SQL etc.)
│   ├── config/
│   │   └── db.ts           ← database connection
│   └── utils/
│       └── helper.ts       ← helper functions
├── package.json
└── tsconfig.json
