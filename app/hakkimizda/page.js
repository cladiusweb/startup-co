"use client";

import React from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { Building2, Users, Compass, Globe, CheckCircle2, ArrowRight } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Eren Demir",
    role: "Kurucu & CEO",
    bio: "ODTÜ ve ETH Zürih Mekatronik mezunu. 14 yılı aşkın 6-DOF endüstriyel manipülatör tasarımı ve tork aktüatörleri araştırma deneyimi.",
  },
  {
    name: "Dr. Selin Yılmaz",
    role: "Kurucu Ortak & CTO",
    bio: "Münih Teknik Üniversitesi (TUM) Bilgisayar Mühendisliği doktoralı. Sert gerçek zamanlı mikroçekirdekler ve deterministik RTOS mimarı.",
  },
  {
    name: "Murat Kaya",
    role: "Baş Donanım Mühendisi",
    bio: "Savunma ve havacılık sektörlerinde 12 yıllık yapısal kompozit şasi ve fırçasız motor mekaniği uzmanlığı.",
  },
  {
    name: "Alexandre Müller",
    role: "Baş Yazılım Mimarı",
    bio: "Eski ROS2 ve mikroçekirdek çekirdek geliştiricisi. Zero-copy IPC ve sürü zekası algoritmaları lideri.",
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="subpage-wrapper">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <FadeUp>
            <span className="clean-section-tag">HAKKIMIZDA & MİSYON</span>
            <h1 className="subpage-title">Derin Teknoloji ve Mühendislik Mükemmelliği</h1>
            <p className="subpage-desc">
              StartupCo; fiziksel makineler ile nöromorfik yazılımlar arasındaki yapay sınırları kaldırarak
              endüstriyel dünyaya deterministik, güvenilir ve otonom bir gelecek inşa etmek amacıyla kuruldu.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="clean-content-section">
        <div className="clean-hero-grid">
          <FadeUp delay={0.1}>
            <span className="clean-section-tag">HİKAYEMİZ</span>
            <h2 className="clean-section-title">Laboratuvardan Endüstriyel Fabrikalara</h2>
            <p className="clean-hero-desc">
              2022 yılında robotik ve işletim sistemleri alanında uzman mühendisler tarafından
              ODTÜ Teknokent bünyesinde temelleri atılan StartupCo, geleneksel endüstrideki
              entegrasyon problemlerini kökten çözmeyi hedefledi.
            </p>
            <p className="clean-hero-desc">
              Bugün Ankara ve Frankfurt&apos;taki Ar-Ge laboratuvarlarımızda geliştirdiğimiz
              donanımlar ve SynapseOS mikroçekirdeği; otomotiv ana sanayi, batarya üretim tesisleri
              ve hassas medikal cihaz hatlarında 7/24 güvenle çalışmaktadır.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "36px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "18px" }}>
                Kurumsal Değerlerimiz
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <strong style={{ color: "#0f2b5c", fontSize: "0.95rem" }}>01. Mühendislik Şeffaflığı</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Tüm şartnamelerimiz ve gecikme metriklerimiz bağımsız laboratuvar testleriyle teyit edilir; pazarlama abartılarına yer verilmez.
                  </p>
                </div>
                <div>
                  <strong style={{ color: "#0f2b5c", fontSize: "0.95rem" }}>02. Determinizm ve Güven</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Sistemlerimiz en zorlu endüstriyel gürültü altında dahi mikrosaniye hassasiyetinden ödün vermez.
                  </p>
                </div>
                <div>
                  <strong style={{ color: "#0f2b5c", fontSize: "0.95rem" }}>03. Sürdürülebilirlik & Verimlilik</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "4px 0 0" }}>
                    Düşük enerji tüketimli mikroişlemciler ve yüksek verimli fırçasız aktüatörlerle karbon ayak izini azaltırız.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="clean-content-section alabaster-bg">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">LİDERLİK KADROSU</span>
            <h2 className="clean-section-title">Mühendislik Çekirdeğimiz</h2>
            <p className="clean-section-desc">
              Dünyanın önde gelen robotik enstitüleri ve havacılık şirketlerinde kritik görevler almış deneyimli liderler.
            </p>
          </FadeUp>
        </div>

        <div className="team-cards-grid">
          {TEAM.map((member, idx) => (
            <FadeUp key={idx} delay={idx * 0.1} className="clean-pillar-card" style={{ padding: "28px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  color: "#0f2b5c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "16px",
                }}
              >
                {member.name.split(" ")[1]?.charAt(0) || "S"}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                {member.name}
              </h3>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0f2b5c", marginBottom: "12px" }}>
                {member.role}
              </div>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
                {member.bio}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Global R&D Locations */}
      <section className="clean-content-section">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">AR-GE MERKEZLERİ</span>
            <h2 className="clean-section-title">Global Mühendislik Altyapısı</h2>
            <p className="clean-section-desc">
              Donanım testlerimiz ve yazılım doğrulama simülasyonlarımız iki ana merkezde eşzamanlı yürütülür.
            </p>
          </FadeUp>
        </div>

        <div className="cards-grid-two">
          <FadeUp delay={0.1} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Building2 size={22} />
            </div>
            <h3 className="pillar-title">Ankara // Ar-Ge & Üretim Çekirdeği</h3>
            <p className="pillar-desc">
              ODTÜ Teknokent Bilişim Vadisi yerleşkesinde yer alan 1,800 m² laboratuvarımızda;
              lazer interferometre kalibrasyon istasyonları, titreşim test kuleleri ve pilot montaj hatları yer alır.
            </p>
            <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
              ODTÜ Teknokent Bilişim Vadisi, B Blok No: 14, Çankaya / Ankara
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Globe size={22} />
            </div>
            <h3 className="pillar-title">Frankfurt // AB Entegrasyon & Müşteri Operasyonları</h3>
            <p className="pillar-desc">
              Tech Quartier bünyesindeki ofisimiz; Avrupalı Tier-1 otomotiv üreticileriyle ortak saha
              entegrasyonu, telemetri izleme ve teknik destek operasyonlarını koordine eder.
            </p>
            <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Tech Quartier, Mainzer Landstraße 180, 60327 Frankfurt am Main, Almanya
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
