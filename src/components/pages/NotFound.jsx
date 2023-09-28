
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>
                <div className="not-found text-center m-10">
                    <div className='flex justify-center'>
                    <img className="w-25" src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png" alt="404" />
                    
                    </div>
                    <Link to="/" className="mt-10 btn btn-error">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;