# Dotnet-Core Nextjs Stock Market FullStack App

## Tech Stacks

- Dotnet Core
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

### Entity Framework Migration

```bash
dotnet tool install --global dotnet-ef --version 7.*
```

```bash
dotnet ef migrations add init
```

```bash
dotnet ef database update
```