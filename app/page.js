"use client";

import React from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import StudioRoboticArmVisual from "@/components/StudioRoboticArmVisual";
import MinimalContactForm from "@/components/MinimalContactForm";
import {
  Cpu,
  Boxes,
  Eye,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
  ChevronRight,
  Activity,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="clean-landing-page">
      {/* 1. HERO SECTION */}
      <section className="clean-hero-section">
        <div className="clean-hero-grid">
          {/* Left Hero Narrative */}
          <FadeUp delay={0.1}>
            <div className="clean-hero-badge">
              <span className="badge-dot-navy"></span>
              <span>B2B OTONOM SİSTEMLER // ENDÜSTRİYEL MÜHENDİSLİK</span>
            </div>

            <h1 className="clean-hero-title">
              Fiziksel Donanımı ve Akıllı Yazılımı{" "}
              <span className="navy-highlight">Aynı Çekirdekte</span> Bütünleştiriyoruz.
            </h1>

            <p className="clean-hero-desc">
              StartupCo; otomotiv, savunma ve hassas üretim hatları için mikrosaniye
              deterministik mikroçekirdekler ile yüksek hassasiyetli 6-eksenli robotik
              manipülatörler tasarlar. Karmaşık teknolojiyi sade, şeffaf ve güvenilir
              mühendislikle sunuyoruz.
            </p>

            <div className="clean-btn-row">
              <Link href="/urunler" className="clean-btn-primary">
                <span>Çözümlerimizi İnceleyin</span>
                <ArrowRight size={16} />
              </Link>
              <a href="#iletisim-bolumu" className="clean-btn-secondary">
                <span>B2B İletişim & Demo</span>
              </a>
            </div>
          </FadeUp>

          {/* Right Studio Visual */}
          <FadeUp delay={0.25}>
            <StudioRoboticArmVisual />
          </FadeUp>
        </div>
      </section>

      {/* 2. ENTERPRISE METRICS STRIP */}
      <section className="clean-metrics-bar" aria-label="Temel Metrikler">
        <div className="clean-metrics-inner">
          <FadeUp delay={0.1} className="clean-metric-item">
            <span className="metric-number">&lt; 0.25 ms</span>
            <span className="metric-title">Döngü Tepki Süresi</span>
            <span className="metric-sub">SynapseOS Mikroçekirdek Gecikmesi</span>
          </FadeUp>

          <FadeUp delay={0.2} className="clean-metric-item">
            <span className="metric-number">99.999%</span>
            <span className="metric-title">Operasyonel Güvenilirlik</span>
            <span className="metric-sub">Endüstriyel 7/24 Sürekli Çalışma</span>
          </FadeUp>

          <FadeUp delay={0.3} className="clean-metric-item">
            <span className="metric-number">± 0.02 mm</span>
            <span className="metric-title">Tekrarlanabilir Hassasiyet</span>
            <span className="metric-sub">Havacılık Sınıfı Titanyum-Karbon Gövde</span>
          </FadeUp>

          <FadeUp delay={0.4} className="clean-metric-item">
            <span className="metric-number">ASIL-D</span>
            <span className="metric-title">Fonksiyonel Güvenlik</span>
            <span className="metric-sub">ISO-26262 ve CE Standartları</span>
          </FadeUp>
        </div>
      </section>

      {/* 3. CORE PILLARS / ÇÖZÜMLER */}
      <section className="clean-content-section alabaster-bg">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">TEMEL MÜHENDİSLİK ÇÖZÜMLERİ</span>
            <h2 className="clean-section-title">
              Otonom Üretim İçin Modüler Teknoloji Mimarisi
            </h2>
            <p className="clean-section-desc">
              Sistemlerimiz tek tek bağımsız modüller olarak çalışabildiği gibi,
              birbirleriyle sıfır gecikmeli veri hatları üzerinden kusursuz entegre olur.
            </p>
          </FadeUp>
        </div>

        <div className="clean-cards-grid-3">
          {/* Pillar 1: ApexArm */}
          <FadeUp delay={0.1} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Boxes size={22} />
            </div>
            <h3 className="pillar-title">ApexArm-7 Manipülatör</h3>
            <p className="pillar-desc">
              Hafifletilmiş titanyum-karbon alaşım iskelet ve 6 eksende bağımsız tork
              sensörleriyle donatılmış, yüksek hassasiyetli endüstriyel robotik kol.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> 15.0 kg Nominal Yük Kapasitesi</li>
              <li><span className="spec-check-dot"></span> 1,450 mm Erişim Yarıçapı</li>
              <li><span className="spec-check-dot"></span> Dahili EtherCAT / CAN-FD Arayüzü</li>
            </ul>
            <div className="mt-4">
              <Link href="/urunler" className="clean-nav-link" style={{ fontWeight: 600 }}>
                Teknik Şartnameyi İnceleyin →
              </Link>
            </div>
          </FadeUp>

          {/* Pillar 2: SynapseOS */}
          <FadeUp delay={0.2} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Cpu size={22} />
            </div>
            <h3 className="pillar-title">SynapseOS Mikroçekirdek</h3>
            <p className="pillar-desc">
              Sert gerçek zamanlı (hard real-time) kontrol için geliştirilmiş, mikrosaniye
              seviyesinde deterministik gecikme sunan robotik işletim sistemi.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> Garantili &lt; 250 µs Yanıt Süresi</li>
              <li><span className="spec-check-dot"></span> Sıfır Kopyalama (Zero-Copy) Bellek</li>
              <li><span className="spec-check-dot"></span> ROS2 / DDS Doğal Entegrasyonu</li>
            </ul>
            <div className="mt-4">
              <Link href="/urunler" className="clean-nav-link" style={{ fontWeight: 600 }}>
                Mimari Detayları →
              </Link>
            </div>
          </FadeUp>

          {/* Pillar 3: CyberVision */}
          <FadeUp delay={0.3} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Eye size={22} />
            </div>
            <h3 className="pillar-title">CyberVision SDK</h3>
            <p className="pillar-desc">
              Stereo kameralar ve LiDAR sensörlerinden gelen veriyi uç donanımda
              mikrosaniyede 3D nokta bulutuna dönüştüren nöral SLAM motoru.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> 120 FPS @ 4K Derinlik Analizi</li>
              <li><span className="spec-check-dot"></span> NPU ve FPGA Donanım Hızlandırma</li>
              <li><span className="spec-check-dot"></span> Dinamik Çarpışma Önleme Algoritması</li>
            </ul>
            <div className="mt-4">
              <Link href="/urunler" className="clean-nav-link" style={{ fontWeight: 600 }}>
                SDK Dökümantasyonu →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 4. HARDWARE + SOFTWARE CONVERGENCE SECTION */}
      <section className="clean-content-section">
        <div className="clean-hero-grid">
          <FadeUp delay={0.1}>
            <span className="clean-section-tag">MÜHENDİSLİK FELSEFESİ</span>
            <h2 className="clean-section-title">
              Yazılım Donanıma Uydurulmaz; <br />
              <span className="navy-highlight">Birlikte Doğar.</span>
            </h2>
            <p className="clean-hero-desc">
              Geleneksel endüstride mekanik kol bir üreticiden, kontrol yazılımı bir
              başkalarından alınır; bu durum katmanlar arası gecikmelere yol açar.
              StartupCo&apos;da donanımın redüktör dişlisinden işletim sisteminin bellek
              adresine kadar her şey tek bir deterministik vizyonla tasarlanır.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle2 size={20} style={{ color: "#0f2b5c", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ color: "#0f172a", display: "block" }}>Donanımsal Bellek İzolasyonu</strong>
                  <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                    ASIL-D sertifikalı donanım koruması sayesinde arızalar izole edilir.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <CheckCircle2 size={20} style={{ color: "#0f2b5c", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <strong style={{ color: "#0f172a", display: "block" }}>Kestirimci Bakım Algoritmaları</strong>
                  <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                    Aktüatör titreşimleri mikro seviyede sürekli analiz edilerek arıza öncesi uyarır.
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "32px" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f2b5c", letterSpacing: "0.05em", marginBottom: "16px" }}>
                ENDÜSTRİYEL ENTEGRASYON KATMANI
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "14px 18px", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }}>01 // Mekanik Aktüatör Katmanı</div>
                  <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Fırçasız motorlar, harmonik redüktörler ve haptik sensörler.</div>
                </div>

                <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "14px 18px", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f2b5c" }}>02 // Gömülü Deterministik Çekirdek (SynapseOS)</div>
                  <div style={{ fontSize: "0.82rem", color: "#1e40af" }}>&lt; 250 µs çevrim, sıfır kopyalama ve donanım hızlandırma.</div>
                </div>

                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "14px 18px", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }}>03 // Bulut Mesh & Dijital İkiz</div>
                  <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Tüm fabrika filosu için merkezi telemetri ve OTA güncellemeleri.</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 5. MINIMALIST B2B CONTACT & INVESTOR RELATIONS SECTION */}
      <section id="iletisim-bolumu" className="clean-contact-section">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">KURUMSAL İLETİŞİM & YATIRIMCI İLİŞKİLERİ</span>
            <h2 className="clean-section-title">Teknik Ekibimizle Doğrudan İletişime Geçin</h2>
            <p className="clean-section-desc">
              Seri A yatırım turu dökümantasyonu, pilot fabrika entegrasyonu veya teknik demo
              talepleriniz için formu doldurabilirsiniz.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="clean-contact-card">
            <MinimalContactForm />
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
