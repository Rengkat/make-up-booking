<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:074456,50:c86011,100:dd6f1d&height=220&section=header&text=Fullbeauty&fontSize=62&fontColor=ffffff&fontAlignY=38&desc=Beauty%20%26%20Wellness%20Booking%20Platform%20%E2%80%94%20Next.js%2014&descAlignY=58&descSize=17&animation=fadeIn" width="100%"/>
</div>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js%2014-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React%2018-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux%20Toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>
</div>

<br/>

---

## 📌 Overview

**Fullbeauty** is a full-stack beauty and wellness e-commerce + appointment booking platform built with **Next.js 14** and **TypeScript**. Customers can browse and purchase beauty products, book spa and beauty appointments, manage their orders and wishlist, and leave product reviews — all from one polished, responsive interface.

The platform is powered by a dedicated REST API backend at `make-up-app-backend.onrender.com`.

---

## 🗂️ Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Features](#-pages--features)
- [State Management](#-state-management)
- [Services & Pricing](#-services--pricing)
- [Authentication](#-authentication)
- [Design System](#-design-system)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [React 18](https://react.dev/) | UI library |
| [TypeScript 5](https://www.typescriptlang.org/) | Static typing |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Data fetching, caching, and cache invalidation |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling with custom brand colours |
| [Flowbite React](https://flowbite-react.com/) | UI component library (Tailwind-based) |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [React Simple Star Rating](https://www.npmjs.com/package/react-simple-star-rating) | Interactive star rating for product reviews |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [date-fns](https://date-fns.org/) | Date formatting for orders and appointments |
| [js-cookie](https://www.npmjs.com/package/js-cookie) | Cookie management for auth |
| [Cloudinary](https://cloudinary.com/) | Product image hosting and CDN |
| [Google Fonts via `next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Roboto, Montserrat Alternates, Bubblegum Sans, Dancing Script |

---

## 📁 Project Structure

```
make-up-booking/
│
├── next.config.js                    # Cloudinary remote image domain config
├── tailwind.config.ts                # Custom brand colours + font families + plugins
├── tsconfig.json
│
├── utilities/
│   └── extras.ts                     # Global types, formatters, static data (services, pricing, fonts)
│
├── redux/
│   ├── Provider.tsx                  # Redux store Provider wrapper
│   ├── Hook.tsx                      # Typed useAppSelector / useAppDispatch hooks
│   ├── localStorage.tsx              # User persistence helpers (get/set/remove from localStorage)
│   ├── store/
│   │   └── store.tsx                 # Redux configureStore (9 slices/APIs)
│   └── services/
│       ├── ApiSlice.tsx              # RTK Query base URL + fetchBaseQuery config
│       ├── AppSlice.tsx              # UI state (sidebar, cart drawer, shop grid, shipping fee)
│       ├── AuthSlice.tsx             # Auth state (user object, isLogin flag + localStorage sync)
│       ├── AuthApiSlice.tsx          # Auth endpoints (register, login, logout, verify, reset)
│       ├── UserApiSlice.tsx          # User profile + address management endpoints
│       ├── ProductApiSlice.tsx       # Product listing, filtering, and detail endpoints
│       ├── CartApiSlice.tsx          # Cart CRUD endpoints
│       ├── WishlistApiSlice.tsx      # Wishlist CRUD endpoints
│       ├── OrderApiSlice.tsx         # Order creation, payment verification, and history
│       ├── AppointmentApiSlice.tsx   # Appointment booking and management
│       └── ReviewApiSlice.tsx        # Product reviews — fetch and submit
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout — fonts, Redux Provider, Toastify
│   │   ├── globals.css               # Global styles
│   │   ├── not-found.tsx             # Custom 404 page
│   │   │
│   │   ├── (auth)/                   # Auth pages (no nav/footer)
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── auth/
│   │   │       ├── verify-email/
│   │   │       ├── forgot-password/
│   │   │       └── reset-password/
│   │   │
│   │   └── (App)/                    # Main app layout (with Nav + Footer)
│   │       ├── page.tsx              # Homepage
│   │       ├── about-us/             # About page
│   │       ├── shop/                 # Product listing with filters
│   │       │   └── [productId]/      # Product detail + reviews
│   │       ├── price-plan/           # Services pricing page
│   │       │   └── makeups/          # Makeup pricing subcategory
│   │       │
│   │       └── (Private)/            # Auth-protected routes
│   │           ├── appointment/      # Book an appointment
│   │           ├── cart/             # Shopping cart
│   │           ├── checkout/         # Order checkout + address selection
│   │           ├── payment/          # Payment processing + verification
│   │           └── account/          # User dashboard
│   │               ├── page.tsx
│   │               ├── edit-detail/
│   │               ├── addresses/
│   │               │   ├── add-address/
│   │               │   └── [addressId]/
│   │               ├── orders/
│   │               │   └── [orderId]/  # Order detail + product review
│   │               ├── appointments/
│   │               │   └── [appointmentId]/
│   │               └── wishlist/
│   │
│   ├── components/                   # Shared UI components
│   │   ├── Nav.tsx / NavMenu.tsx / HoveredNav.tsx
│   │   ├── SideBar.tsx               # Mobile navigation drawer
│   │   ├── CartMenu.tsx / CartModal.tsx  # Sliding cart drawer
│   │   ├── Hero.tsx / HeroComp.tsx   # Homepage hero + reusable page banner
│   │   ├── Footer.tsx
│   │   ├── CircledWords.tsx          # Decorative animated text element
│   │   └── ActiveLink.tsx            # Active nav link highlighter
│   │
│   └── lib/
│       └── data.ts                   # Static content data
│
└── public/                           # Static assets (images, SVGs, webp files)
```

---

## 📄 Pages & Features

### 🏠 Homepage (`/`)
- Full-screen **Hero** section with brand imagery
- **Featured Products** grid — fetches up to 8 featured products from the API (polls every 50 seconds)
- **"Look Good" section** — brand lifestyle visual
- **Services overview** — highlights of available beauty services
- **Best Selling Products** — separate API query for bestseller-flagged items
- **Newsletter signup** section

### 🛍️ Shop (`/shop`)
- Full product grid with **search**, **sort**, and **filter** controls
- **Debounced search** (500ms delay to avoid excessive API calls)
- **Sidebar filters**: Category list + Price range slider
- **Sort options**: Popularity, Price High–Low, Price Low–High, Rating, Latest
- **Adjustable grid layout**: 1, 2, 3, or 4 columns (preference persisted in `localStorage`)
- **Pagination** support

### 📦 Product Detail (`/shop/[productId]`)
- Full product image, description, price, and category
- **Add to Cart** and **Add to Wishlist** actions
- **Product Reviews** — list of existing reviews + star rating form to submit a new one

### 💅 Appointment Booking (`/appointment`)
- **Working hours** display (Mon–Fri: 10am–3pm, Sat: 10am–5pm, Sunday: Closed)
- **Service selector** — dropdown with 40+ services across massage, facials, spa, manicure/pedicure, and makeup categories
- **Booking Modal** — collects date, time, service type, and optionally a home service address
- Submits to `POST /appointments` via RTK Query mutation

### 💰 Price Plan (`/price-plan`)
- **Massage & Therapy pricing** — 7 individual services with prices (₦7,000–₦15,000)
- **Executive Spa Plans** — 3 tiers: Comfort Spa (₦18K), Home Service (₦20K), Ceremonials (Negotiable)
- **Spa Therapy Packages** — 3 tiers: Comfortable Spa (₦30K), Premium Spa (₦45K), Luxury Spa (₦60K)
- **Makeup pricing** subcategory at `/price-plan/makeups`

### 🛒 Cart (`/cart`)
- View all cart items with quantities, subtotals, and product images
- Update quantity or remove items
- **Sliding cart drawer** accessible from any page via the nav cart icon
- Fixed shipping fee: ₦1,500 per item

### 💳 Checkout (`/checkout`)
- Protected — redirects to `/cart` if not accessed via the cart flow
- Displays cart items with total calculation (items + shipping)
- Address selection from saved user addresses
- Additional order notes input
- Terms & conditions checkbox
- Submits to `POST /orders` → redirects to payment page

### 💰 Payment (`/payment`)
- Payment processing page
- `/payment/verify` — verifies payment status via `POST /orders/verify/:orderId`

### 👤 Account Dashboard (`/account`)
- **Edit Profile** — update personal details and change password
- **Address Book** — add, edit, and delete multiple saved addresses
- **Order History** — list of all past orders with status; detail page includes product review form
- **Appointments** — view all booked appointments and their statuses
- **Wishlist** — manage saved products

### 🔐 Auth Pages (`/login`, `/register`, `/auth/*`)
- Registration with email verification flow
- Login with persistent session (user stored in `localStorage`)
- Forgot password + reset password via email token
- Re-send verification email option

---

## 🗄️ State Management

The Redux store is configured in `redux/store/store.tsx` with **9 slices/APIs**:

| Slice / API | Manages |
|---|---|
| `appSlice` | UI state — sidebar open, cart drawer open, shop grid columns, shipping fee, checkout flow flag |
| `authSlice` | Auth state — current user object, `isLogin` flag; synced to `localStorage` on change |
| `authApiSlice` | Auth mutations: register, login, logout, verifyEmail, reverifyEmail, forgotPassword, resetPassword |
| `userApiSlice` | User profile, password change, address CRUD |
| `productApiSlice` | Product listing (with filters), featured/bestselling query, single product |
| `cartApiSlice` | Cart CRUD — add, remove, update quantity, get cart |
| `wishlistApiSlice` | Wishlist CRUD — add, remove, get list |
| `orderApiSlice` | Create order, verify payment, get all orders, get single order, update order |
| `appointmentApiSlice` | Book appointment, get user appointments, get single appointment, update status |
| `reviewApiSlice` | Get product reviews, submit review |

All API slices share a single **base query** configured in `redux/services/ApiSlice.tsx` pointing to `https://make-up-app-backend.onrender.com/api` with `credentials: "include"` for cookie-based auth.

---

## 💆 Services & Pricing

All service and pricing data is statically defined in `utilities/extras.ts`:

### Appointment Services (40+ options)
Massages, Facials, Spa treatments, Manicure/Pedicure, Makeup, and more — all selectable from the appointment booking dropdown.

### Price Plan

**Individual Services**
| Service | Price |
|---|---|
| Fullbeauty Customers | ₦7,000 |
| Nutritionist | ₦9,000 |
| Sauna Relax | ₦8,000 |
| Hot Stone Massage | ₦10,000 |
| Body Mud Masks | ₦11,000 |
| Oxygen Facials | ₦13,000 |
| LED Facials | ₦15,000 |

**Executive Massage Plans**
| Plan | Price | Includes |
|---|---|---|
| Comfort Spa | ₦18,000 | Hand manicure, toe manicure, facials |
| Home Service | ₦20,000 | All above + VIP treats |
| Ceremonials | Negotiable | All above + multiple persons |

**Spa Therapy Packages**
| Package | Price | Includes |
|---|---|---|
| Comfortable Spa | ₦30,000 | Day Spa, Oil Therapy, Manicure & Pedicure, Sauna |
| Premium Spa | ₦45,000 | All above + Relaxing Facials |
| Luxury Spa | ₦60,000 | All above + Back & Foot Massage, Signature Body Scrub |

---

## 🔐 Authentication

- Sessions are managed via **httpOnly cookies** set by the backend.
- On login, the user object is stored in `authSlice` state and persisted to `localStorage` for hydration on page refresh.
- On logout, `localStorage` is cleared and the Redux auth state is reset.
- Protected routes live under the `(Private)` route group.

---

## 🎨 Design System

### Brand Colours

| Token | Hex | Usage |
|---|---|---|
| `dark-green` | `#074456` | Primary headings, accents |
| `dark-gold` | `#c86011` | CTAs, highlights, interactive elements |
| `yellowish-orange` | `#dd6f1d` | Gradient accents |
| `lighter-gold` | `#fffbf1` | Background tints |

### Typography

| Font | Variable | Usage |
|---|---|---|
| Bubblegum Sans | `--bubblegum` | Display headings (`font-bubblegum`) |
| Dancing Script | `--dancing` | Decorative/script text (`font-dancing`) |
| Montserrat Alternates | `--montserrat` | Subheadings (`font-montserrat`) |
| Roboto | `--roboto` | Body copy (`font-roboto`) |

All fonts are loaded via `next/font/google` for optimal performance and are exposed as CSS variables applied through Tailwind's `fontFamily` extension.

### Utilities
- **`formatter`** — Nigerian Naira (NGN) currency formatter via `Intl.NumberFormat`
- **`convertDate()`** — Full date format: `"15 March, 2024"`
- **`convertDateFormat()`** — Datetime format: `"15 Mar 2024 by 2:30 pm"`

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- The backend API running (locally or on Render)

### Installation

```bash
# Clone the repository
git clone https://github.com/Rengkat/make-up-booking.git
cd make-up-booking

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔑 Environment Variables

Create a `.env.local` file in the root:

```env
# Backend API base URL (used in redux/services/ApiSlice.tsx)
NEXT_PUBLIC_API_URL=https://make-up-app-backend.onrender.com/api
```

> The base URL is currently hardcoded in `redux/services/ApiSlice.tsx`. Move it to an env variable for environment flexibility.

---

## 📜 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

---

## 👨‍💻 Author

**Alexander Rengkat** — Full-Stack Developer

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/rengkatalex)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/alexander-rengkat-b2293b1a3)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rengkat)

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:dd6f1d,50:c86011,100:074456&height=100&section=footer" width="100%"/>
</div>
