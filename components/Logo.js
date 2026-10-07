"use client";

import React from "react";

export function LogoIcon({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="StartupCo Logo Amblemi"
    >
      {/* Precision Geometric Outer Frame - Hexagonal Robotic Precision */}
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="10"
        fill="url(#logoBgGrad)"
        stroke="url(#logoBorderGrad)"
        strokeWidth="1.5"
      />

      {/* Kinetic Hardware Joint Segment (Upper Left to Center) */}
      <path
        d="M 14 16 L 24 24 L 14 32"
        stroke="url(#hardwareGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Neural Software Converging Node (Upper Right to Center) */}
      <path
        d="M 34 16 L 24 24 L 34 32"
        stroke="url(#softwareGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Deterministic Fusion Core */}
      <circle cx="24" cy="24" r="4.5" fill="#0F2B5C" />
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" />

      {/* Precision Micro-Joint Alignment Dots */}
      <circle cx="14" cy="16" r="2.2" fill="#0F2B5C" />
      <circle cx="14" cy="32" r="2.2" fill="#0F2B5C" />
      <circle cx="34" cy="16" r="2.2" fill="#0284C7" />
      <circle cx="34" cy="32" r="2.2" fill="#0284C7" />

      {/* Gradients */}
      <defs>
        <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <linearGradient id="logoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="hardwareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F2B5C" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="softwareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0F2B5C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ size = 32, withText = true, className = "" }) {
  return (
    <div className={`clean-corporate-brand ${className}`}>
      <LogoIcon size={size} />
      {withText && (
        <div className="brand-text-block">
          <span className="brand-primary-text">
            Startup<span className="brand-accent-text">Co</span>
          </span>
          <span className="brand-tagline">ROBOTICS & AI SYSTEMS</span>
        </div>
      )}
    </div>
  );
}
