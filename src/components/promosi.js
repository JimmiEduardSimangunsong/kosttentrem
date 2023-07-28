import Toast from 'react-bootstrap/Toast';
import '../style/tailwind.css';

function ContextualExample() {
    return (
        <div className="toast-center">
            <>
                {[

                    'Success',
                ].map((variant, idx) => (
                    <Toast
                        className="d-inline-block m-1"
                        bg={variant.toLowerCase()}
                        key={idx}
                    >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Kost Tentrem</strong>
                            <small>Sekarang</small>
                        </Toast.Header>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            Lagi di Medan ?,Kuliah di USU dan sekitarnya ?,Kerja di Medan ?,Kost Tentrem solusinya
                        </Toast.Body>
                        <Toast.Body className={variant === 'Dark' && 'text-white'}>
                            Senangnya, di Tentrem Kost, Anda akan menemukan:<br></br>

                            1.Fasilitas yang lengkap dan layak untuk memenuhi kebutuhan Anda.<br></br>
                            2.Pemilik kost yang ramah dan hangat, siap membantu menjadikan tinggal Anda nyaman.<br></br>
                            3.Lingkungan kost yang nyaman, aman, dan menenangkan, memberikan Anda ketenangan dan privasi yang Anda butuhkan.<br></br>
                            4.Harga sewa kost yang terjangkau dan sesuai dengan kualitas serta fasilitas yang disediakan.<br></br>
                            5.Kebersihan yang terjaga dengan baik, sehingga Anda bisa merasa nyaman dan bersih di setiap sudut kost.<br></br>
                            6.Kami berkomitmen untuk memberikan pengalaman tinggal yang menyenangkan dan memenuhi harapan Anda di Kost Tentrem.<br></br>
                        </Toast.Body>
                    </Toast>

                ))}

            </>
        </div>
    );
}

export default ContextualExample;