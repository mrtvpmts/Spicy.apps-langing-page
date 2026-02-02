export const SpicyLogo = ({ className = "", size = 32 }: { className?: string; size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3333" />
                <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
        </defs>
        {/* Pepper body */}
        <path
            d="M50 20 C30 25, 25 40, 30 65 C32 75, 40 85, 50 85 C60 85, 68 75, 70 65 C75 40, 70 25, 50 20Z"
            fill="url(#fireGradient)"
            className="drop-shadow-[0_0_10px_rgba(255,51,51,0.5)]"
        />
        {/* Pepper stem */}
        <path
            d="M50 20 Q45 15, 48 10 Q50 5, 52 10 Q55 15, 50 20"
            fill="#4CAF50"
        />
        {/* Flame effect */}
        <path
            d="M50 30 C45 35, 42 45, 45 55 C46 58, 48 60, 50 60 C52 60, 54 58, 55 55 C58 45, 55 35, 50 30Z"
            fill="#FFEB3B"
            opacity="0.6"
            className="animate-pulse"
        />
    </svg>
)

export const PepperIcon = SpicyLogo
