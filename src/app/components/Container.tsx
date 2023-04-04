'use client';

interface ContatinerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContatinerProps> = ({ children }) => {
    return (
        <div
            className="max-w-[2520px]
                        mx-auto
                        xl:px-20
                        md:px-10
                        sm:px-2
                        px-4">
            {children}
        </div>);
}

export default Container;