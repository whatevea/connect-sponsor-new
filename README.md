# Monorepo Project with Next.js, React, and Material UI

## Overview

This project follows a **monorepo** structure, which is a single repository containing multiple related projects or packages. This setup allows us to easily share code between different parts of the project while keeping everything organized in one place.

We use **Turborepo** to manage our monorepo efficiently, and **pnpm** for dependency management across packages. **Material UI** is used as the main UI framework.

## Project Structure

connect-sponsors/
├── apps/
│ ├── app/ # React admin dashboard
│ ├── web/ # Next.js website
│
├── packages/
│ ├── eslint-config/ # Shared ESLint configuration
│ ├── typescript-config/ # Shared TypeScript configuration
│ ├── ui/ # Material UI setup and shared components
│
├── .gitignore
├── .npmrc
├── package.json # pnpm workspaces setup
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json

### Breakdown of Packages

1. **apps/app/**  
   This package serves as the **React** admin dashboard. It provides the administrative interface with features like user management, analytics, and more.

2. **apps/web/**  
   This package is the **Next.js** website. It handles server-side rendering, routing, and static generation, ideal for building performant, SEO-friendly pages.

3. **packages/ui/**  
   The **UI** package contains shared Material UI components, themes, and design constants. It ensures UI consistency across both the **admin dashboard** and **Next.js website**.

4. **packages/eslint-config/**  
   A shared ESLint configuration package to maintain consistent coding standards across all apps and packages.

5. **packages/typescript-config/**  
   A shared TypeScript configuration package, providing consistent TypeScript settings for all apps and packages.

## Available Scripts

In the root directory, you can run the following commands:

### 🔧 Install Dependencies

To get started, you'll need to install all the dependencies for the entire monorepo using **pnpm**. This command will automatically install dependencies for each package and link them where necessary.

### `pnpm install`

### 🌟 Start the Monorepo

To start the monorepo, run the following command:

### `pnpm run dev`

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 📞 Contact

For any questions or support, please reach out to [your-email@example.com].
