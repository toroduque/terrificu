import React from "react";
import iconsSvg from './iconsSvg'

const Icon = ({ glyph, size="32", color, onClick }) => (
    <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 32 32"
        fill={color}
        stroke={color}
        onClick={onClick}
    >
        {iconsSvg[glyph]}
    </svg>
);

export default Icon
