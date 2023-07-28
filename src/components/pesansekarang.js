import React from 'react';

function pesansekarang() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890';
    const message = 'Halo, saya ingin pesan kamar.';

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* Konten komponen lainnya */}
      <button
        style={{
          backgroundColor: '#25D366',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleWhatsAppClick}
      >
        <img
          src="path/to/whatsapp-logo.png"
          alt="WhatsApp"
          style={{ marginRight: '10px' }}
        />
        Pesan Sekarang
      </button>
      {/* Konten komponen lainnya */}
    </div>
  );
}

export default pesansekarang;
