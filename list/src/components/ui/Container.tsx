import React, { ReactNode, CSSProperties } from "react";

export interface ContainerProps {
    children: ReactNode;
    className?: string;
    styles?: CSSProperties | undefined;
    handleClick?: () => void;
}

const Container: React.FC<ContainerProps> = ({
    children,
    styles,
    className = "pagination-box",
    handleClick = undefined
}) => {
    return (
        <div onClick={handleClick} className={className} style={{ ...styles }}>
            {children}
        </div>
    );
};

export default Container;
