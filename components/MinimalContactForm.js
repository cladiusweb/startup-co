"use client";

import React, { useState } from "react";
import ToastNotification from "./ToastNotification";

export default function MinimalContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    interest: "B2B Entegrasyon & Robotik Çözümler",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToastMsg(data.message || "Talebiniz alınmıştır. Ekibimiz en kısa sürede iletişime geçecektir.");
        setShowToast(true);
        // Reset form fields
        setFormData({
          fullName: "",
          companyName: "",
          workEmail: "",
          interest: "B2B Entegrasyon & Robotik Çözümler",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Form iletilemedi. Lütfen bilgilerinizi kontrol ediniz.");
      }
    } catch (err) {
      setErrorMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="clean-b2b-form">
        <div className="form-grid-two">
          <div className="clean-form-field">
            <label htmlFor="fullName" className="clean-field-label">
              Ad Soyad <span className="req-dot">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              placeholder="Örn. Selin Yılmaz"
              value={formData.fullName}
              onChange={handleChange}
              className="clean-input"
              disabled={isLoading}
            />
          </div>

          <div className="clean-form-field">
            <label htmlFor="companyName" className="clean-field-label">
              Şirket / Kurum Adı <span className="req-dot">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              required
              placeholder="Örn. Borusan Endüstri A.Ş."
              value={formData.companyName}
              onChange={handleChange}
              className="clean-input"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="form-grid-two">
          <div className="clean-form-field">
            <label htmlFor="workEmail" className="clean-field-label">
              Kurumsal E-posta <span className="req-dot">*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              name="workEmail"
              required
              placeholder="ad.soyad@sirket.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="clean-input"
              disabled={isLoading}
            />
          </div>

          <div className="clean-form-field">
            <label htmlFor="interest" className="clean-field-label">
              İlgi Alanı & Ortaklık Modeli
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="clean-input clean-select"
              disabled={isLoading}
            >
              <option value="B2B Entegrasyon & Robotik Çözümler">B2B Entegrasyon & Robotik Çözümler</option>
              <option value="Seri A Yatırımcı İlişkileri">Seri A Yatırımcı İlişkileri</option>
              <option value="SynapseOS İşletim Sistemi Lisansı">SynapseOS İşletim Sistemi Lisansı</option>
              <option value="Ortak Ar-Ge & Akademik Konsorsiyum">Ortak Ar-Ge & Akademik Konsorsiyum</option>
              <option value="Özel Donanım Tasarımı (Custom 6-DOF)">Özel Donanım Tasarımı (Custom 6-DOF)</option>
            </select>
          </div>
        </div>

        <div className="clean-form-field">
          <label htmlFor="message" className="clean-field-label">
            Mesaj / Proje Kapsamı
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Planlanan entegrasyon hacmi, teslim takvimi veya teknik spesifikasyonlar..."
            value={formData.message}
            onChange={handleChange}
            className="clean-input clean-textarea"
            disabled={isLoading}
          ></textarea>
        </div>

        {errorMessage && (
          <div className="clean-form-error" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="form-actions-bar">
          <p className="form-security-note">
            Kurumsal bilgileriniz ISO 27001 gizlilik standartlarına uygun olarak korunur.
          </p>
          <button
            type="submit"
            className="clean-btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="clean-btn-spinner" aria-hidden="true"></span>
                <span>Gönderiliyor...</span>
              </>
            ) : (
              <span>Talebi İletin</span>
            )}
          </button>
        </div>
      </form>

      {/* Floating Bottom-Right Toast */}
      <ToastNotification
        show={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
