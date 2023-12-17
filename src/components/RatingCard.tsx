import * as React from "react";

const MAX_RATING = 5;

type RatingProps = {
  rating: number;
  platform?: string;
  logo?: string;
};

export function RatingCard({ rating, platform, logo }: RatingProps) {
  // Create an array of
  // - filled stars of length Math.floor(rating)
  // - empty stars of length MAX_RATING - Math.floor(rating)
  const filledStarArray = Array(Math.floor(rating)).fill(undefined);
  const emptyStarArray = Array(MAX_RATING - Math.floor(rating)).fill(undefined);

  return (
    <div className="flex flex-col items-center border border-border max-sm:p-5 p-8 rounded-lg">
      <div className="flex items-center max-md:flex-col max-md:gap-3">
        <div className="flex flex-row">
          {/* Render filled stars */}
          {filledStarArray.map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-primary me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          {/* Render empty stars */}
          {emptyStarArray.map((_, index) => (
            <svg
              key={index + filledStarArray.length} // ensure unique keys
              className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
        <div className="flex flex-row">
          <p className="ms-1 text-sm font-medium text-foreground">{rating}</p>
          <p className="ms-1 text-sm font-medium text-foreground">out of</p>
          <p className="ms-1 text-sm font-medium text-foreground">
            {MAX_RATING}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mt-3 gap-2">
        <img className="h-6 w-6" src={logo} alt={platform} />
        <p className="max-sm:text-xs text-xl">on {platform}</p>
      </div>
    </div>
  );
}
