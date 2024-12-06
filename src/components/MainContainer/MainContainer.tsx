import { FC, ReactNode } from 'react';

interface MainContainerProps {
    children: ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <>
            <div className='pt-20 bg-black'>
                {children}
            </div>
        </>
    );
};

export default MainContainer;