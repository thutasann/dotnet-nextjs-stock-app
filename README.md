# Dotnet-Core Nextjs Stock FullStack App

This is the Stock FullStack App with DotnetCore and Nextjs and This app will be mainly focused on the `dotnet` backend.

## Tech Stacks

- Dotnet Core 7
- MySQL
- Entity Framework Core
- Nextjs (will be page router as app router not working properly w/ c# project :3)
- Typescript

## Features

- Stock CRUD
- Comment CRUD
- one-many relations
- Data Validation
- Sorting
- Filtering
- Pagination
- API Identity JWT
- Register
- Token Service

## Scripts

### Create Dotnet project

```bash
dotnet new webapi -o api
```

### Dotnet Watch Run

```bash
cd api
```

```bash
dotnet watch run
```

### EF Database Migration

```bash
dotnet tool install --global dotnet-ef --version 7.*
```

```bash
dotnet ef migrations add init
```

```bash
dotnet ef database update
```
