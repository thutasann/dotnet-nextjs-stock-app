# Dotnet-Core Nextjs Stock Market FullStack App

This is the Stock Market Social Media Platoform FullStack App with DotnetCore and Nextjs.

## Tech Stacks

- Dotnet Core 7
- Nextjs
- MySQL
- Entity Framework Core

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
