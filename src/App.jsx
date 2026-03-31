import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ComponentPage from "./pages/ComponentPage";
import ComponentMisconceptionsPage from "./pages/ComponentMisconceptionsPage";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <Link
            to="/"
            className="text-lg font-semibold tracking-wide text-white"
          >
            NIHSS Learning Platform
          </Link>
          <p className="text-xs text-slate-400">
            Stroke assessment education and visual review
          </p>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link to="/" className="transition hover:text-sky-400">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400">
        <p>NIHSS Learning Platform • Educational prototype</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Generic NIHSS component pages */}
          <Route path="/item/:slug" element={<ComponentPage />} />

          {/* 🔥 UNIFIED misconceptions system */}
          <Route
            path="/item/:slug/misconceptions"
            element={<ComponentMisconceptionsPage />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
