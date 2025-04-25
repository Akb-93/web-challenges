import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && data.reviews.length > 0 && (
        <ReviewsSection>
          <h3>Reviews</h3>
          {data.reviews.map((review) => (
            <ReviewCard key={review._id}>
              <h4>{review.title}</h4>
              <p>{review.text}</p>
              <Rating>Rating: {review.rating}/5</Rating>
            </ReviewCard>
          ))}
        </ReviewsSection>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const ReviewsSection = styled.section`
  margin-top: 2rem;
`;

const ReviewCard = styled.article`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--color-granite);
  border-radius: 4px;
`;

const Rating = styled.p`
  color: var(--color-nemo);
  font-weight: bold;
`;
