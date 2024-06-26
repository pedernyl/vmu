import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Social = () => {
    return (
        <div className='social'>
            <Link href="https://www.facebook.com/profile.php?id=61560288061445">
            <span target="_blank" aria-label="Facebook" style={{ cursor: 'pointer', color: '#4267B2', display: 'inline-flex', alignItems: 'center' }}>
                <FaFacebook size={30} />
            </span>
        </Link>
        </div>
    );
};

export default Social;''