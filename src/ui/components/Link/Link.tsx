import Link from "next/link";
import React from "react";

export type LinkProps = {
    children: React.ReactNode;
    url: string;
}

export const LinkComponent : React.FC<LinkProps> = ({ children, url }) => {
    return (
        <Link
            className="product-link"
            href = {url}
        >
            {children}
        </Link>
    );
}
