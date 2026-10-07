"use client";

import React from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import StudioRoboticArmVisual from "@/components/StudioRoboticArmVisual";
import { Boxes, Cpu, Eye, Radio, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function UrunlerPage() {
  return (
    <main className="subpage-wrapper">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-inner">
          <FadeUp>
            <span className="clean-section-tag">ÜRÜN PORTFÖYÜ & ÇÖZÜMLER</span>
            <h1 className="subpage-title">Endüstriyel Robotik ve Gömülü Yazılım Sistemleri</h1>
            <p className="subpage-desc">
              Hassas montajdan fabrika geneli otonom filo yönetimine kadar;
              en zorlu endüstriyel standartları karşılamak üzere tasarlanmış tescilli teknolojilerimiz.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Product 1: ApexArm-7 */}
      <section className="clean-content-section">
        <div className="clean-hero-grid">
          <FadeUp delay={0.1}>
            <div className="clean-hero-badge">
              <span className="badge-dot-navy"></span>
              <span>DONANIM // ROBOTİK MANİPÜLATÖR</span>
            </div>
            <h2 className="clean-section-title">ApexArm-7 Manipülatör</h2>
            <p className="clean-hero-desc">
              Ağır endüstriyel montaj ve mikro hassasiyet gerektiren operasyonlar için
              geliştirilmiş 6 serbestlik dereceli (6-DOF) robotik manipülatör. Hafifletilmiş
              titanyum-karbon alaşımlı yapısı ile yüksek dinamik ivmelenme ve milimetrik doğruluk sunar.
            </p>

            <div className="table-responsive-wrapper">
              <table className="clean-specs-table">
                <thead>
                  <tr>
                    <th>Parametre</th>
                    <th>Değer</th>
                    <th>Standart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nominal Taşıma Kapasitesi</td>
                    <td>15.0 kg</td>
                    <td>ISO 9283</td>
                  </tr>
                  <tr>
                    <td>Tekrarlanabilir Hassasiyet</td>
                    <td>± 0.02 mm</td>
                    <td>Lazer İnterferometre Ölçümlü</td>
                  </tr>
                  <tr>
                    <td>Erişim Yarıçapı</td>
                    <td>1,450 mm</td>
                    <td>360° Küresel Çalışma Alanı</td>
                  </tr>
                  <tr>
                    <td>Haberleşme Bus</td>
                    <td>EtherCAT / CAN-FD</td>
                    <td>8 kHz Döngü Frekansı</td>
                  </tr>
                  <tr>
                    <td>Fonksiyonel Güvenlik</td>
                    <td>ASIL-D / Kat. 4 PL e</td>
                    <td>ISO 13849-1 / ISO 26262</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <Link href="/iletisim" className="clean-btn-primary">
                <span>ApexArm-7 Şartnamesini Talep Edin</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <StudioRoboticArmVisual />
          </FadeUp>
        </div>
      </section>

      {/* Product 2: SynapseOS */}
      <section className="clean-content-section alabaster-bg">
        <div className="clean-hero-grid">
          <FadeUp delay={0.1}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "36px" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f2b5c", marginBottom: "16px" }}>
                SYNAPSE MİKROÇEKİRDEK MİMARİSİ
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ borderLeft: "3px solid #0f2b5c", paddingLeft: "14px" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>Zero-Copy IPC (Süreçler Arası İletişim)</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                    Sensör sürücülerinden yapay zeka çıkarımına veri kopyalama olmadan 0.04 ms sürede aktarım.
                  </div>
                </div>
                <div style={{ borderLeft: "3px solid #94a3b8", paddingLeft: "14px" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>Donanımsal Bellek Koruma (MPU/MMU)</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                    Kritik güvenlik süreçleri kullanıcı alanı uygulamalarından fiziksel olarak yalıtılır.
                  </div>
                </div>
                <div style={{ borderLeft: "3px solid #0f2b5c", paddingLeft: "14px" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>Doğal ROS2 / DDS Desteği</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                    Mevcut endüstriyel robotik kod tabanlarıyla sıfır eforla entegrasyon imkanı.
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="clean-hero-badge">
              <span className="badge-dot-navy"></span>
              <span>YAZILIM // GERÇEK ZAMANLI RTOS</span>
            </div>
            <h2 className="clean-section-title">SynapseOS Mikroçekirdek</h2>
            <p className="clean-hero-desc">
              Robotik aktüatörler ve sensörler için özel olarak tasarlanmış, sert gerçek zamanlı
              (hard real-time) mikroçekirdek. Deterministik çalışma garantisi vererek sistemin
              hiçbir koşulda beklenmeyen gecikmelere girmesine izin vermez.
            </p>

            <div className="table-responsive-wrapper">
              <table className="clean-specs-table">
                <thead>
                  <tr>
                    <th>Mimari Özellik</th>
                    <th>Değer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maksimum Döngü Gecikmesi</td>
                    <td>&lt; 250 mikrosaniye (Garanti Edilmiş)</td>
                  </tr>
                  <tr>
                    <td>Çekirdek Boyutu</td>
                    <td>&lt; 350 KB Mikro-imaj</td>
                  </tr>
                  <tr>
                    <td>Desteklenen İşlemciler</td>
                    <td>ARM Cortex-R52 / A78, RISC-V RV64GC, x86-64</td>
                  </tr>
                  <tr>
                    <td>Güvenlik Standartları</td>
                    <td>ISO 26262 ASIL-D, IEC 61508 SIL 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <Link href="/iletisim" className="clean-btn-primary">
                <span>Geliştirici SDK Lisansı İsteyin</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Product 3 & 4: CyberVision SDK & OmniFleet */}
      <section className="clean-content-section">
        <div className="clean-section-header">
          <FadeUp>
            <span className="clean-section-tag">TAMAMLAYICI YAZILIM KATMANLARI</span>
            <h2 className="clean-section-title">Görüş ve Sürü Zekası Çözümleri</h2>
            <p className="clean-section-desc">
              Fabrika genelinde sensör füzyonu ve çoklu ajan koordinasyonunu sağlayan uç yazılımlarımız.
            </p>
          </FadeUp>
        </div>

        <div className="cards-grid-two">
          <FadeUp delay={0.1} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Eye size={22} />
            </div>
            <h3 className="pillar-title">CyberVision SDK</h3>
            <p className="pillar-desc">
              Stereo kameralardan gelen yüksek çözünürlüklü görüntüleri 120 FPS hızında
              3D haritaya dönüştürür. Dinamik insan hareketlerini mikrosaniyeler içinde kestirerek
              iş güvenliği sağlar ve çarpışmaları sıfıra indirir.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> 120 FPS @ 4K Stereo Derinlik Analizi</li>
              <li><span className="spec-check-dot"></span> &lt; 1.5 mm SLAM Doğruluk Payı</li>
              <li><span className="spec-check-dot"></span> NPU / TPU / GPU Donanım Hızlandırma</li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.2} className="clean-pillar-card">
            <div className="pillar-icon-box">
              <Radio size={22} />
            </div>
            <h3 className="pillar-title">OmniFleet Mesh</h3>
            <p className="pillar-desc">
              Yüzlerce bağımsız robotik ünitenin merkezi bir sunucu kilitlenmesi yaşamadan,
              dağıtık konsensüs algoritmalarıyla senkronize çalıştığı endüstriyel sürü ağı orkestratörü.
            </p>
            <ul className="pillar-spec-list">
              <li><span className="spec-check-dot"></span> 2,048 Aktif Düğüm Kapasitesi</li>
              <li><span className="spec-check-dot"></span> Dinamik Çakışmasız Rota Planlama</li>
              <li><span className="spec-check-dot"></span> Uçtan Uca Kriptografik Güvenlik Tüneli</li>
            </ul>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
