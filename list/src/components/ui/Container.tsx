import React, { ReactNode, CSSProperties } from "react";

export interface ContainerProps {
    children: ReactNode,
    className?: string,
    styles?: CSSProperties | undefined
}
 
const Container: React.SFC<ContainerProps> = ({ children, styles, className='pagination-box'}) => {
    return ( 
        <div className={className} style={{ ...styles }}>
            {children}
        </div>
    );
}
 
export default Container;