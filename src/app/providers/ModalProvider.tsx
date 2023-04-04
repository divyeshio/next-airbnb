'use client';

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

const ModalsProvider = () => {
    return (
        <>
            <LoginModal />
            <RegisterModal />
        </>
    );
}

export default ModalsProvider;