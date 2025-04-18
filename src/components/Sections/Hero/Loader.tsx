import { FC } from 'react';

const Loader: FC = () => {
    return (
        <div className='absolute z-50 left-[50%] bottom-[53%] backdrop-blur-sm'>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;