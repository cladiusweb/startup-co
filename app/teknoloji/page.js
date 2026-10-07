"use client";

import React from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { ShieldCheck, Cpu, Layers, Award, FileText, CheckCircle2 } from "lucide-react";

export default function TeknolojiPage() {
  return (
    <main className="subpage-wrapper">
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <FadeUp>
            <span className="clean-section-tag">MÜHENDİSLİK & AR-GE</span>
            <h1 className="subpage-title">Deterministik Mimari ve Güvenilir Teknoloji</h1>
            <p className="subpage-desc">
              Sıfır toleranslı endüstriyel üretim hatları için tasarlanan derin teknoloji
              altyapımız; mekanik mükemmellik ile mikrosaniye yazılım determinizmini buluşturur.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="clean-content-section">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">TEMEL MÜHENDİSLİK İLKELERİ</span>
            <h2 className="clean-section-title">StartupCo Mühendislik Manifestosu</h2>
            <p className="clean-section-desc">
              Karmaşık algoritmaları sadeleştirerek sahadaki arıza olasılıklarını matematiksel olarak minimize ediyoruz.
            </p>
          </FadeUp>
        </div>

        <div className="clean-cards-grid-3">
          <FadeUp delay={0.1} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Cpu size={22} />
            </div>
            <h3 className="pillar-title">Determinizm İlkesi</h3>
            <p className="pillar-desc">
              İşletim sistemimiz &quot;en iyi ihtimalle hızlı&quot; değil, &quot;her koşulda garantili zamanında&quot;
              çalışır. Hiçbir aktüatör komutu 250 mikrosaniyeden daha geç yürütülemez.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> Deterministik zamanlama kanıtı</li>
              <li><span className="spec-check-dot"></span> Öncelik terslemesine karşı kilit koruması</li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.2} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Layers size={22} />
            </div>
            <h3 className="pillar-title">Katman İzolasyonu</h3>
            <p className="pillar-desc">
              Her bir donanım sensörü ve yapay zeka çıkarım görevi izole bellek bölgelerinde koşar.
              Üçüncü parti bir eklenti veya model çökse bile fiziksel robot acil durum güvenliğine geçer.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> MPU donanımsal koruma bariyeri</li>
              <li><span className="spec-check-dot"></span> Sıfır çökme yayılımı (Fault Isolation)</li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.3} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <ShieldCheck size={22} />
            </div>
            <h3 className="pillar-title">Sıfır Tolerans Güvenlik</h3>
            <p className="pillar-desc">
              Otomotiv ve cerrahi standartları baz alınarak geliştirilen çift kanallı gözetleme
              sayesinde insan-robot işbirliği (Cobot operasyonları) %100 güvenle gerçekleştirilir.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> ISO-26262 ASIL-D Uyumluluğu</li>
              <li><span className="spec-check-dot"></span> Çift kanallı donanımsal acil durdurma</li>
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="clean-content-section alabaster-bg">
        <div className="clean-hero-grid">
          <FadeUp delay={0.1}>
            <span className="clean-section-tag">SERTİFİKASYON VE UYUMLULUK</span>
            <h2 className="clean-section-title">Uluslararası Endüstri Standartları</h2>
            <p className="clean-hero-desc">
              Teknolojimiz, Avrupa ve Kuzey Amerika pazarlarının en katı güvenlik ve kalite
              yönetmeliklerine uygun olarak bağımsız denetim kuruluşları tarafından onaylanmıştır.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Award size={22} style={{ color: "#0f2b5c", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0f172a" }}>ISO-26262 ASIL-D</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "2px 0 0" }}>
                    Karayolu araçları ve otonom endüstriyel mobilite için en yüksek güvenlik seviyesi.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Award size={22} style={{ color: "#0f2b5c", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0f172a" }}>EN-ISO 10218-1 & CE İşareti</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "2px 0 0" }}>
                    Endüstriyel robotlar ve robotik cihazlar için güvenlik gereksinimleri.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Award size={22} style={{ color: "#0f2b5c", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#0f172a" }}>IEC 61508 SIL-3</strong>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: "2px 0 0" }}>
                    Elektrikli/elektronik programlanabilir güvenlik sistemleri fonksiyonel standardı.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "32px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
                Fikri Mülkiyet & Patent Portföyü
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: 1.65, marginBottom: "20px" }}>
                StartupCo Ar-Ge ekibi tarafından tescil edilen ve incelemede olan patentlerimiz:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ padding: "12px 14px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f2b5c" }}>TR-PAT-2024-00892</div>
                  <div style={{ fontSize: "0.8rem", color: "#334155" }}>Çok Eksenli Robotik Aktüatörlerde Doğrudan Gömülü Tork Geri Bildirim Algoritması</div>
                </div>
                <div style={{ padding: "12px 14px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f2b5c" }}>PCT/EP2025/014920</div>
                  <div style={{ fontSize: "0.8rem", color: "#334155" }}>Gerçek Zamanlı Mikroçekirdeklerde Sıfır Kopyalamalı DMA Senkronizasyon Mimarisi</div>
                </div>
                <div style={{ padding: "12px 14px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f2b5c" }}>US-PAT-PENDING-4819</div>
                  <div style={{ fontSize: "0.8rem", color: "#334155" }}>Stereo Görüş Tabanlı Düşük Gecikmeli Nöral SLAM Tahmin Yöntemi</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
