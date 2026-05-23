import { C } from ".././theme";

/**
 * Triangle — brand mark.
 * Used as logo element, list bullet, section label indicator, and hover cue.
 * Keep size small and intentional; never use as a decorative blob.
 */
const Triangle = ({ size = 8, color = C.accent }) => (
    <svg
        width={size}
        height={size * 0.87}
        viewBox="0 0 8 7"
        fill="none"
        aria-hidden="true"
    >
        <polygon points="4,0 8,7 0,7" fill={color} />
    </svg>
);

export default Triangle;
