## Zedny 1st Task – React Front-End Structure

This project is a React front-end built to demonstrate a **clean, standard, and scalable project structure** for the Zedny internship task.  
The focus is on **architecture and organization**, not on complex UI.

---

### 1. Tech Stack

- **Vite** – build tool and dev server
- **React 18 (JavaScript)** – UI library
- **React Router DOM v7** – client-side routing
- **Axios** – HTTP client for API layer

---

### 2. Getting Started

From the project root (`zedny-1st-task`):

```bash
npm install
npm run dev
```

- Dev server will start at the URL shown in the terminal (by default `http://localhost:5173`).

To build for production:

```bash
npm run build
```

---

### 3. Project Structure (src/)

```text
src
  assets/
    images/
    icons/
    styles/
      global.css
  components/
    common/
      Button/
        Button.jsx
        Button.module.css
      Loader/
        Loader.jsx
    layout/
      Navbar/
        Navbar.jsx
        Navbar.module.css
      MainLayout/
        MainLayout.jsx
  pages/
    Home/
      Home.jsx
    Login/
      Login.jsx
    NotFound/
      NotFound.jsx
  services/
    api.js
    auth.service.js
  hooks/
    useAuth.js
  context/
    AuthContext.jsx
  routes/
    AppRoutes.jsx
  utils/
    constants.js
    validators.js

  main.jsx
```

**Key ideas:**

- **Each page and core component** lives in its own folder (e.g. `Home/Home.jsx`, `Button/Button.jsx`).
- **Reusable UI pieces** go in `components/common`.
- **Layout-related components** go in `components/layout`.
- **Routing** is centralized in `routes/AppRoutes.jsx`.
- **API access** is encapsulated in `services/` (never directly inside components/pages).
- **State sharing and logic** reuse use `context/` (e.g. auth) and `hooks/`.
- **Utility logic** (constants, validators) lives in `utils/`.

---

### 4. Routing

All routes are defined in `routes/AppRoutes.jsx` using `react-router-dom`:

- `/` → `Home` page
- `/login` → `Login` page
- `*` → `NotFound` page

`main.jsx` wraps the app in:

- `BrowserRouter` – handles client-side routing
- `AuthProvider` – provides authentication context

This keeps routing **centralized and easy to extend** (add new pages by updating `AppRoutes.jsx`).

---

### 5. Layout & Reusable Components

- **`MainLayout`** (`components/layout/MainLayout/MainLayout.jsx`)
  - Wraps all pages with a shared layout.
  - Renders the `Navbar` and a `<main>` area for route content.

- **`Navbar`** (`components/layout/Navbar/Navbar.jsx`)
  - Simple navigation bar with links to `Home` and `Login`.
  - Styled using a CSS Module (`Navbar.module.css`).

- **`Button`** (`components/common/Button/Button.jsx`)
  - Generic, reusable button supporting a `variant` prop (`primary`, `secondary`, etc.).
  - Styled using a CSS Module (`Button.module.css`).

- **`Loader`** (`components/common/Loader/Loader.jsx`)
  - Minimal loading indicator, used from the `Login` form.

This structure encourages **reusability** and **separation of layout vs. content**.

---

### 6. Pages

- **Home** (`pages/Home/Home.jsx`)
  - Simple placeholder page for the main route.

- **Login** (`pages/Login/Login.jsx`)
  - Controlled inputs for `email` and `password`.
  - Uses the `useAuth` hook to trigger the login flow.
  - Uses `Button` and `Loader` components.
  - Uses `validators.js` to validate email before submitting.

- **NotFound** (`pages/NotFound/NotFound.jsx`)
  - Fallback route for unknown URLs (404).

Pages contain **presentation and minimal page-level logic only**, with business logic pulled into hooks/context/services.

---

### 7. Services (API Layer)

The **API layer** is centralized under `src/services`:

- **`api.js`**
  - Configures a shared Axios instance with a base URL (`API_BASE_URL`) and JSON headers.

- **`auth.service.js`**
  - Defines an example `loginRequest(email, password)` function using the shared Axios instance.
  - This is where real authentication requests would live.

**Important:** Components and pages **do not call Axios directly**.  
They would call service functions (e.g. `loginRequest`) to keep data access **separate from UI**.

---

### 8. Auth Context & Custom Hook

**Context** lives in `src/context/AuthContext.jsx`:

- Holds `user` state and exposes:
  - `login(email, password)` – mock login (simulates API + stores a basic user object).
  - `logout()` – clears the user.
  - `isAuthenticated` – boolean flag.

**Custom hook** `useAuth` (`src/hooks/useAuth.js`):

- Wraps `useContext(AuthContext)` so components can easily access auth state and actions.
- Example usage: `const { login, user, isAuthenticated } = useAuth();`

This pattern demonstrates:

- **Centralized auth logic**
- Clean separation between auth **state/logic** and **UI**

---

### 9. Utils & Styles

- **`utils/constants.js`**
  - Contains app-wide constants like `APP_NAME` and `API_BASE_URL`.

- **`utils/validators.js`**
  - Contains helper functions such as `isEmailValid(email)`.

- **Global styles** (`assets/styles/global.css`)
  - Resets margins/padding.
  - Applies a simple layout and typography base.
  - Styles form and input basics.

- **CSS Modules**
  - Used for `Button`, `Navbar`, and all three pages (`Home`, `Login`, `NotFound`) for **scoped, maintainable styles**.

---

### 10. Naming Conventions

- **Components & pages**: `PascalCase` for file and component names  
  - Examples: `Home.jsx`, `Login.jsx`, `Navbar.jsx`, `MainLayout.jsx`, `Button.jsx`, `Loader.jsx`.
- **Hooks**: `camelCase` starting with `use`  
  - Example: `useAuth.js` exporting `useAuth`.
- **Context**: `PascalCase` for context and provider  
  - Example: `AuthContext.jsx` exporting `AuthContext` and `AuthProvider`.
- **Services & utils**: `camelCase` or dotted file names  
  - Examples: `api.js`, `auth.service.js`, `constants.js`, `validators.js`.

This keeps the codebase **predictable**, so it’s easy to find components, hooks, and services by name.

---

### 11. How This Meets the Task Requirements

- **Folder structure**: Matches the required hierarchy (assets, components, pages, services, hooks, context, routes, utils).
- **Reusable components**: `Button`, `Loader`, and `Navbar` are generic and reusable.
- **Centralized routing**: All routes defined in `routes/AppRoutes.jsx`.
- **Services/API layer**: Axios instance and auth service in `services/`, no API calls directly in components.
- **Custom hook**: `useAuth` for consuming authentication context.
- **Context**: `AuthContext` + `AuthProvider` for app-wide auth state (used by `Login` and `Navbar`).
- **Separation of concerns**:
  - UI in `components` and `pages`
  - Data access in `services`
  - Shared state in `context`
  - Shared logic in `hooks` and `utils`

This makes the app **easy to understand, extend, and maintain**, which is the main goal of the internship task.


