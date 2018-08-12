import React from 'react';

const IconsSvg = {
    drag: (
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(3.000000, 3.000000)">
                <circle cx="4.5" cy="4.5" r="4.5" />
                <circle cx="4.5" cy="22.5" r="4.5" />
                <circle cx="22.5" cy="4.5" r="4.5" />
                <circle cx="22.5" cy="22.5" r="4.5" />
            </g>
        </g>
    ),
    options: (
        <g fillRule="evenodd">
            <g transform="translate(13.000000, 0.000000)">
                <circle cx="3.5" cy="3.5" r="3.5" />
                <circle cx="3.5" cy="15.5" r="3.5" />
                <circle cx="3.5" cy="28.5" r="3.5" />
            </g>
        </g>
    ),
    tick: (
        <g fill="none" fillRule="evenodd">
            <polyline strokeWidth="6" points="2 16.8 8.10526316 28 21.800958 13.6431337 31 4"/>
        </g>
    ),
    x:(
        <g fill="none" fillRule="evenodd" strokeLinecap="square">
            <g strokeWidth="3">
                <g transform="translate(15.500000, 16.000000) rotate(-315.000000) translate(-15.500000, -16.000000) translate(-4.000000, -4.000000)">
                    <path d="M19.8734499,0.889226656 L19.8734499,38.2367462" />
                    <path d="M38.3256689,19.9186771 L0.978149321,19.9186771" />
                </g>
            </g>
        </g>
    ),
};

export default IconsSvg;
