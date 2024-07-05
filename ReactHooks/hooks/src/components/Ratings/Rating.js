import React, {useState} from "react";
import './Rating.css';

const Star = React.memo(({active, onClick, onMouseOver, onMouseOut}) => (
    <span
        className={`star ${active ? 'active' : ''}`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
    >
    </span>
))
export const Rating = React.memo(({length}) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleMouseOver = (rating) => {
        setHoveredRating(rating);
    };

    const handleMouseOut = () => {
        setHoveredRating(selectedRating);
    };

    const handleClicked = (rating) => {
        setSelectedRating(rating);
    };
    const fillStars = () => {
        return stars.map(starRating => (
            <Star
                active={starRating < (hoveredRating || selectedRating)}
                onMouseOver={handleMouseOver.bind(null, starRating + 1)}
                onMouseOut={handleMouseOut}
                onClick={handleClicked.bind(null, starRating + 1)}
                key={starRating}
            />
        ))
    }
    const stars = Array.from(Array(Number(length)).keys());
    return (
        <div className="rating">
            {fillStars()}
            <div id="ratingDisplay">{selectedRating > 0 ? `you have rated ${selectedRating}` : ''}</div>
        </div>
    );
});
