import React, { useState, useEffect } from "react";
import { useWindowWitdh } from "./useWindowWidth";

export interface NavbarReturnerData {
    toggleClick: () => void;
    isOpen: boolean;
}

export interface NavbarServiceProps {
    render: (data: NavbarReturnerData) => JSX.Element | null;
}

const NavbarService: React.FC<NavbarServiceProps> = ({ render }) => {
    let width = useWindowWitdh();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isOpen && width > 700) {
            setIsOpen(!isOpen);
        }
    }, [width]);

    return render({
        isOpen: isOpen,
        toggleClick: () => setIsOpen(!isOpen)
    });
};

export default NavbarService;
