import React from 'react'

interface LandingBannerCard2Props {
    title: string;
    description: string;
    onClick?: (title: string, description: string) => void;
}

const LandingBannerCard2: React.FC<LandingBannerCard2Props> = ({ title, description, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick(title, description);
        }
    };


    return (
        <div className="bannerboxWrapper2" onClick={handleClick}>
            <h2 className="bannerboxcardh4">{title}</h2>
            <p className="bannerboxcardPara">{description}</p>
        </div>
    )
}

export default LandingBannerCard2
