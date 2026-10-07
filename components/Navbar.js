"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/urunler", label: "Ürünler & Çözümler" },
    { href: "/teknoloji", label: "Teknoloji & Ar-Ge" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim & Yatırımcı" },
  ];

  return (
    <header className={`clean-navbar ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="clean-nav-container">
        {/* Corporate Brand Logo */}
        <Link href="/" className="clean-brand" onClick={() => setMobileMenuOpen(false)}>
          <Logo size={36} />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="clean-nav-links" aria-label="Ana Menü">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`clean-nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Action */}
        <div className="clean-nav-actions">
          <Link href="/iletisim" className="clean-btn-nav">
            <span>Demo Talep Edin</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="clean-mobile-menu">
          <div className="mobile-links-wrapper">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="clean-btn-primary full-width mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo Talep Edin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
