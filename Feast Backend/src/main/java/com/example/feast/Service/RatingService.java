package com.example.feast.Service;

import com.example.feast.Entity.Rating;
import com.example.feast.Repo.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public Rating saveRating(Rating rating) {
        Long ratingId = rating.getId(); // unique ID for each rating

        if (ratingId != null) {
            Optional<Rating> existingRatingOptional = ratingRepository.findById(ratingId);

            if (existingRatingOptional.isPresent()) {
                Rating existingRating = existingRatingOptional.get();
                existingRating.setValue(rating.getValue());
                return ratingRepository.save(existingRating);
            } else {

                throw new RuntimeException("Rating not found with ID: " + ratingId);
            }
        } else {

            return ratingRepository.save(rating);
        }
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }


}
