"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="clean-footer">
      <div className="clean-footer-container">
        {/* Brand & Mission Column */}
        <div className="footer-col-brand">
          <Link href="/" className="clean-brand">
            <Logo size={36} />
          </Link>
          <p className="footer-mission-text">
            Yüksek hassasiyetli robotik sistemler, mikrosaniye deterministik mikroçekirdekler
            ve otonom filo mimarileri geliştiren derin teknoloji (Deep Tech) şirketi.
          </p>
          <div className="footer-cert-tags">
            <span className="clean-cert-badge">
              <ShieldCheck size={14} /> ISO-26262 ASIL-D
            </span>
            <span className="clean-cert-badge">
              <ShieldCheck size={14} /> EN-ISO 10218-1
            </span>
          </div>
        </div>

        {/* Links: Ürünler */}
        <div className="footer-col-links">
          <h4 className="footer-heading">Çözümler</h4>
          <ul className="footer-list">
            <li><Link href="/urunler">ApexArm-7 Manipülatör</Link></li>
            <li><Link href="/urunler">SynapseOS Mikroçekirdek</Link></li>
            <li><Link href="/urunler">CyberVision Nöral SLAM</Link></li>
            <li><Link href="/urunler">OmniFleet Filo Yönetimi</Link></li>
          </ul>
        </div>

        {/* Links: Teknoloji & Kurumsal */}
        <div className="footer-col-links">
          <h4 className="footer-heading">Kurumsal</h4>
          <ul className="footer-list">
            <li><Link href="/teknoloji">Mühendislik & Ar-Ge</Link></li>
            <li><Link href="/hakkimizda">Hakkımızda & Ekip</Link></li>
            <li><Link href="/iletisim">Yatırımcı İlişkileri</Link></li>
            <li><Link href="/iletisim">Kariyer & İletişim</Link></li>
          </ul>
        </div>

        {/* Global Locations */}
        <div className="footer-col-links">
          <h4 className="footer-heading">Ar-Ge Merkezleri</h4>
          <div className="footer-address-block">
            <strong>Ankara // Ar-Ge Çekirdeği</strong>
            <span>ODTÜ Teknokent Bilişim Vadisi, No: 14</span>
          </div>
          <div className="footer-address-block mt-3">
            <strong>Frankfurt // Mühendislik Ofisi</strong>
            <span>Tech Quartier, Mainzer Landstraße 180</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="clean-footer-bottom">
        <div className="clean-footer-bottom-inner">
          <span>© {new Date().getFullYear()} StartupCo Robotik ve Yapay Zeka Teknolojileri A.Ş.</span>
          <div className="footer-bottom-links">
            <a href="#gizlilik">Gizlilik Politikası</a>
            <a href="#kosullar">Kullanım Şartları</a>
            <a href="#kvkk">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
