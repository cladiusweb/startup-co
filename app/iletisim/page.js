"use client";

import React from "react";
import FadeUp from "@/components/FadeUp";
import MinimalContactForm from "@/components/MinimalContactForm";
import { Mail, Phone, MapPin, Building, ShieldCheck, Clock } from "lucide-react";

export default function IletisimPage() {
  return (
    <main className="subpage-wrapper">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <FadeUp>
            <span className="clean-section-tag">KURUMSAL İLETİŞİM & YATIRIM</span>
            <h1 className="subpage-title">B2B Ortaklık ve Yatırımcı İlişkileri</h1>
            <p className="subpage-desc">
              Endüstriyel tesisleriniz için teknik fizibilite analizi, Seri A yatırım dökümanları
              veya özel yazılım entegrasyonu talepleriniz için doğrudan mühendislik ve yönetim ekibimize ulaşın.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Form & Contact Channels Grid */}
      <section className="clean-content-section">
        <div className="clean-hero-grid" style={{ alignItems: "start", maxWidth: "1280px" }}>
          {/* Left Column: Direct Communication Channels & Info */}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <span className="clean-section-tag">DİREKT PROTOKOLLER</span>
                <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
                  Kurumsal Masalarımız
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  Talepleriniz doğrudan ilgili birim direktörüne iletilir ve ortalama 12 iş saati
                  içerisinde teknik geri bildirim sağlanır.
                </p>
              </div>

              {/* Direct channels cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "18px 20px", borderRadius: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <Building size={16} style={{ color: "#0f2b5c" }} />
                    <strong style={{ color: "#0f172a", fontSize: "0.92rem" }}>Seri A Yatırımcı İlişkileri</strong>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>investors@startupco.tech</div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "18px 20px", borderRadius: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <Mail size={16} style={{ color: "#0f2b5c" }} />
                    <strong style={{ color: "#0f172a", fontSize: "0.92rem" }}>B2B Satış & Endüstriyel Entegrasyon</strong>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>b2b@startupco.tech</div>
                </div>

                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "18px 20px", borderRadius: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <ShieldCheck size={16} style={{ color: "#0f2b5c" }} />
                    <strong style={{ color: "#0f172a", fontSize: "0.92rem" }}>Ar-Ge & Akademik İşbirlikleri</strong>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>labs@startupco.tech</div>
                </div>
              </div>

              {/* SLA & Security note */}
              <div style={{ padding: "16px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0f2b5c", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                  <Clock size={16} />
                  <span>Kurumsal SLA Garantisi</span>
                </div>
                <div style={{ fontSize: "0.82rem", color: "#1e40af", lineHeight: 1.5 }}>
                  Alınan tüm kurumsal B2B talepleri, Gizlilik Sözleşmesi (NDA) kapsamında değerlendirilir.
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Minimalist B2B Contact Form */}
          <FadeUp delay={0.25}>
            <div className="clean-contact-card">
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
                Kurumsal Talep Formu
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#64748b", marginBottom: "24px" }}>
                Lütfen şirket e-postanızı ve ilgilendiğiniz sistem kapsamını belirtiniz.
              </p>
              <MinimalContactForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
