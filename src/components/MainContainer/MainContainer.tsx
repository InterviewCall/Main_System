import { FC, ReactNode } from 'react';

interface MainContainerProps {
    children: ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <>
            <div className='pt-20 bg-white'>
                {children}
            </div>
        </>
    );
};

export default MainContainer;