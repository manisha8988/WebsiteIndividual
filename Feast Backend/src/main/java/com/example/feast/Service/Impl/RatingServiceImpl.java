
package com.example.feast.Service.Impl;

import com.example.feast.Entity.Rating;
import com.example.feast.Pojo.RatingPojo;
import com.example.feast.Repo.RatingRepo;
import com.example.feast.Service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService {

    private final RatingRepo ratingRepository;

    @Override
    public Rating saveRating(RatingPojo ratingPojo) {
        Rating rating = new Rating();
        rating.setUserId(ratingPojo.getUserId());
        rating.setValue(ratingPojo.getValue());
        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    @Override
    public Rating getRateByUser(Long userId) {
        return ratingRepository.findRatingByUserId(userId);
    }
}
