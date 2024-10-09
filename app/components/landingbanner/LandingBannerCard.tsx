import React from 'react'

interface LandingBannerCardProps {
    title: string;
    description: string;
    onClick?: (title: string, description: string) => void;
}

const LandingBannerCard: React.FC<LandingBannerCardProps> = ({ title, description, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick(title, description);
        }
    };


    return (
        <div className="bannerboxWrapper" onClick={handleClick}>
            <h2 className="bannerboxcardh4">{title}</h2>
            <p className="bannerboxcardPara">{description}</p>
        </div>
    )
}

export default LandingBannerCard
