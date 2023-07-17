import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../style/tailwind.css';

const Chat = () => {
  const phoneNumber = '8126515295'; // Ganti dengan nomor WhatsApp yang ingin Anda tuju

  return (
    <div className="chat-container">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link" // Menambahkan kelas CSS untuk tautan WhatsApp
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> {/* Menambahkan kelas CSS untuk ikon WhatsApp */}
        <span className="whatsapp-text">Hubungi Kami di WhatsApp</span> {/* Menambahkan kelas CSS untuk teks WhatsApp */}
      </a>
    </div>
  );
};

export default Chat;
