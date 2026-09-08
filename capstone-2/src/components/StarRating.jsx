const MAX = 5

/**
 * Accessible 5-star rating. Stars are decorative glyphs; the rating is exposed
 * once via role="img" + aria-label rather than five literal "★" in the a11y tree.
 */
export default function StarRating({ value = 5, max = MAX }) {
  return (
    <span
      className="star-rating"
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < value ? 'star star--filled' : 'star'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  )
}
