import { useState, useEffect } from "react";

const getWidth = (): number =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

const useWindowWitdh = (): number => {
    let [width, setWidth] = useState<number>(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setWidth(getWidth());
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return width;
};

export { useWindowWitdh };
