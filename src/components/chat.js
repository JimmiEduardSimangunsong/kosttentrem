import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../style/tailwind.css';

const Chat = () => {
  const phoneNumber = '8126515295';
  const message = encodeURIComponent(
    'Hallo Kost Tentrem, saya ingin menyewa kamar kos, bisa minta informasi lebih lanjut?'
  );

  return (
    <div className="chat-container">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        <span className="whatsapp-text">Hubungi Kami di WhatsApp</span>
      </a>
    </div>
  );
};

export default Chat;
