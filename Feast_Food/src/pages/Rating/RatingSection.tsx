import React, { useState} from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import "../../css/RatingSection.css";

const RatingSection: React.FC = () => {
    const [rating, setRating] = useState<number>(0);

    const useApiCall = useMutation({
        mutationKey: ['POST_RATING'],
        mutationFn: async (payload: { value: number; userId: number; itemId: number }) => {
            try {
                const response = await axios.post('http://localhost:8080/api/ratings/submit', payload);
                return response.data; // Assuming the backend responds with data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data?.message || 'Failed to submit rating');
                } else {
                    throw new Error('Failed to submit rating');
                }
            }
        },
    });

    const handleRating = async (value: number) => {
        try {
            const userId = 1; // Replace with actual user ID
            const itemId = 1; // Replace with actual item ID

            await useApiCall.mutateAsync({ value, userId, itemId });
            setRating(value);
        } catch (error) {
            console.error('Failed to submit rating:', error);
        }
    };

    const renderStars = () => {
        const stars: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= rating ? 'star active' : 'star'}
                    onClick={() => handleRating(i)}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="rating">
            <div className="rate">
                <h2>Rate this product</h2>
                <div className="stars">
                    {renderStars()}
                </div>
                <p className="selected-rating">{rating} out of 5 stars</p>
            </div>
        </div>
    );
};

export default RatingSection;
