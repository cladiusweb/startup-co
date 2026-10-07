"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ToastNotification({
  show,
  message = "Talebiniz alınmıştır. Ekibimiz en kısa sürede iletişime geçecektir.",
  onClose,
  duration = 5000,
}) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="clean-toast-card"
          role="status"
          aria-live="polite"
        >
          <div className="toast-icon-wrapper">
            <Check size={16} className="toast-check-icon" />
          </div>
          <div className="toast-content">
            <span className="toast-title">Başarılı Gönderim</span>
            <p className="toast-message">{message}</p>
          </div>
          <button
            type="button"
            className="toast-close-btn"
            onClick={onClose}
            aria-label="Kapat"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
