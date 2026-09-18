# DatTechGee Library

Self-development & personal growth book platform. Browse classic self-help books, add to cart, complete a demo checkout, and download real EPUB/TXT files from Project Gutenberg.

**Live demo:** [dattechgee-library.vercel.app](https://dattechgee-library.vercel.app) (deploy after build)

---

## How It Works

### 1. Login
- Enter **any email and password** — no real account needed
- Creates a demo user instantly, saved in your browser
- Pre-filled with demo credentials (`demo@dattechgee.com` / `password123`)

### 2. Browse Books
- 12 classic self-development titles from Project Gutenberg
- Categories: Personal Growth, Productivity, Stoicism, Psychology, Success, Leadership
- Click any book to see full details, description, and available formats

### 3. Add to Cart
- Click "Add to Cart" on any book
- Cart count shows in the navbar
- View cart from the navbar or dashboard

### 4. Checkout (Demo)
- Click "Pay" on the checkout page
- Fake Paystack processing animation (4 steps, ~3 seconds)
- No real payment is processed — fully demo

### 5. Download Books
- After checkout, books appear in **Dashboard → My Books**
- Click **EPUB** or **TXT** to download the actual free book file from Project Gutenberg
- Downloads work offline once saved

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS v4 |
| State | Zustand (localStorage) |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Books | Project Gutenberg (free public domain) |
| Covers | Open Library API |

---

## Local Development

```bash
# Clone
git clone https://github.com/DatTechGee/dattechgee-library.git
cd dattechgee-library

# Install
npm install

# Run
npm run dev
# Open http://localhost:5173

# Build for production
npm run build
# Upload dist/ folder to any static host
```

---

## Deploy

**Vercel (recommended):**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repo
4. Deploy — done

**Netlify / GitHub Pages:**
1. Run `npm run build`
2. Upload the `dist/` folder

---

## Project Structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer, CartModal
│   ├── sections/     Homepage sections (Hero, Categories, Trending, etc.)
│   ├── shared/       BookCover, animations, skeletons
│   └── ui/           Reusable UI primitives (Button, Card, Input)
├── pages/
│   ├── auth/         Login, OTP, Forgot/Reset Password
│   ├── dashboard/    User dashboard with purchased books
│   ├── admin/        Admin panel
│   ├── HomePage      Landing page
│   ├── LibraryPage   Full book catalog
│   ├── BookDetailPage  Book info + download
│   └── CheckoutPage  Demo payment flow
├── stores/
│   ├── authStore     Login/logout (accepts any credentials)
│   ├── cartStore     Shopping cart (localStorage)
│   └── libraryStore  Purchased books (localStorage)
├── data/             Book data with Gutenberg download links
└── config/           Site configuration
```

---

## Books Included

| # | Title | Author | Category |
|---|-------|--------|----------|
| 1 | Think and Grow Rich | Napoleon Hill | Success |
| 2 | Meditations | Marcus Aurelius | Stoicism |
| 3 | The Art of War | Sun Tzu | Leadership |
| 4 | The Republic | Plato | Psychology |
| 5 | The Wealth of Nations | Adam Smith | Success |
| 6 | Self-Reliance and Other Essays | Ralph Waldo Emerson | Personal Growth |
| 7 | How to Solve It | George Polya | Productivity |
| 8 | On War | Carl von Clausewitz | Leadership |
| 9 | Ethics | Baruch Spinoza | Psychology |
| 10 | As a Man Thinketh | James Allen | Personal Growth |
| 11 | The Enchiridion | Epictetus | Stoicism |
| 12 | The Art of Public Speaking | Dale Carnegie | Productivity |

All books are free public domain titles from [Project Gutenberg](https://www.gutenberg.org).

---

## License

MIT
