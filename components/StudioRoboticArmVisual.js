"use client";

import React from "react";

export default function StudioRoboticArmVisual({ className = "" }) {
  return (
    <div className={`studio-visual-card ${className}`}>
      <div className="studio-visual-header">
        <div className="studio-tag">TEKNİK ŞEMATİK // CAD DOKÜMANI</div>
        <div className="studio-spec">ÖLÇEK: 1:10 // REV 4.2</div>
      </div>

      <div className="studio-svg-viewport">
        <svg
          viewBox="0 0 700 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="studio-arm-svg"
        >
          {/* Subtle Technical Grid Lines */}
          <line x1="50" y1="420" x2="650" y2="420" stroke="#E2E8F0" strokeWidth="1.5" />
          <line x1="120" y1="60" x2="120" y2="420" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="260" y1="60" x2="260" y2="420" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="420" y1="60" x2="420" y2="420" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="580" y1="60" x2="580" y2="420" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />

          {/* Precision Dimension Guidelines */}
          <path d="M 120 440 L 460 440" stroke="#94A3B8" strokeWidth="1" />
          <line x1="120" y1="435" x2="120" y2="445" stroke="#94A3B8" strokeWidth="1" />
          <line x1="460" y1="435" x2="460" y2="445" stroke="#94A3B8" strokeWidth="1" />
          <text x="290" y="455" fill="#64748B" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
            ÇALIŞMA YARIÇAPI: 1,450 mm
          </text>

          {/* Base Mount (Plinth & Ground Joint J1) */}
          <rect x="80" y="390" width="120" height="30" rx="4" fill="#0F172A" />
          <rect x="100" y="360" width="80" height="30" rx="3" fill="#1E293B" stroke="#0F2B5C" strokeWidth="1.5" />
          <circle cx="140" cy="375" r="8" fill="#0F2B5C" />
          <circle cx="140" cy="375" r="4" fill="#FFFFFF" />

          {/* Link 1 (Lower Articulated Segment - Titanium Carbon) */}
          <path
            d="M 130 360 L 190 220 L 230 225 L 150 360 Z"
            fill="#334155"
            stroke="#1E293B"
            strokeWidth="1.5"
          />
          {/* Joint J2 Actuator Rotor Housing */}
          <circle cx="210" cy="222" r="28" fill="#FFFFFF" stroke="#0F2B5C" strokeWidth="2.5" />
          <circle cx="210" cy="222" r="16" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
          <circle cx="210" cy="222" r="6" fill="#0F2B5C" />

          {/* Link 2 (Upper Carbon Forearm Segment) */}
          <path
            d="M 210 222 L 390 140 L 415 155 L 225 240 Z"
            fill="#475569"
            stroke="#1E293B"
            strokeWidth="1.5"
          />

          {/* Joint J3 & J4 Elbow Housing */}
          <circle cx="400" cy="148" r="22" fill="#FFFFFF" stroke="#0F2B5C" strokeWidth="2" />
          <circle cx="400" cy="148" r="12" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
          <circle cx="400" cy="148" r="4" fill="#0F2B5C" />

          {/* Link 3 (Wrist Extension Assembly) */}
          <path
            d="M 400 148 L 520 180 L 530 195 L 405 165 Z"
            fill="#64748B"
            stroke="#334155"
            strokeWidth="1.5"
          />

          {/* Joint J5/J6 Wrist Gimbal & Flange */}
          <rect x="520" y="175" width="28" height="28" rx="4" fill="#0F2B5C" />
          <circle cx="534" cy="189" r="6" fill="#FFFFFF" />

          {/* 2-Finger Precision End-Effector / Micro Gripper */}
          <path d="M 548 182 L 585 174 L 595 186" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 548 196 L 585 204 L 595 192" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="600" cy="189" r="5" fill="#0F2B5C" />

          {/* Technical Spec Callout Overlays */}
          {/* Callout 1: Joint J1 */}
          <line x1="140" y1="375" x2="60" y2="330" stroke="#0F2B5C" strokeWidth="1.2" />
          <circle cx="60" cy="330" r="3" fill="#0F2B5C" />
          <text x="50" y="318" fill="#0F172A" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            J1: 360° Taban Dönüşü
          </text>
          <text x="50" y="332" fill="#64748B" fontSize="10" fontFamily="sans-serif">
            180 Nm Tork Kapasitesi
          </text>

          {/* Callout 2: Joint J2 & J3 */}
          <line x1="210" y1="222" x2="210" y2="120" stroke="#0F2B5C" strokeWidth="1.2" />
          <circle cx="210" cy="120" r="3" fill="#0F2B5C" />
          <text x="210" y="98" fill="#0F172A" fontSize="11" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">
            J2-J3: Karbon Kompozit Mafsal
          </text>
          <text x="210" y="112" fill="#64748B" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
            0.01mm Mutlak Enkoder
          </text>

          {/* Callout 3: End-Effector */}
          <line x1="595" y1="189" x2="640" y2="130" stroke="#0F2B5C" strokeWidth="1.2" />
          <circle cx="640" cy="130" r="3" fill="#0F2B5C" />
          <text x="640" y="112" fill="#0F172A" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            6-DOF Haptik Algılama
          </text>
          <text x="640" y="126" fill="#64748B" fontSize="10" fontFamily="sans-serif">
            ±0.02 mm Tekrarlanabilirlik
          </text>
        </svg>
      </div>

      <div className="studio-visual-footer">
        <div className="footer-spec-item">
          <span className="spec-name">GÖVDE MATERYALİ:</span>
          <span className="spec-val">Havacılık Tipi Titanyum-Karbon</span>
        </div>
        <div className="footer-spec-item">
          <span className="spec-name">TAŞIMA KAPASİTESİ:</span>
          <span className="spec-val">15.0 kg Nominal</span>
        </div>
        <div className="footer-spec-item">
          <span className="spec-name">SERİ HABERLEŞME:</span>
          <span className="spec-val">EtherCAT / CAN-FD @ 8 kHz</span>
        </div>
      </div>
    </div>
  );
}
