import { ReactNode } from "react";

interface IProps {
    headline?: string;
    children: ReactNode;
}

export const LayoutPrimary: React.FC<IProps> = ({ headline, children }) => (
    <div className="overflow-hidden tracking-wider">{children}</div>
);
