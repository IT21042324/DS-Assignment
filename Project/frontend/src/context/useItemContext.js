import { useContext, useEffect } from "react";
import { ItemContext } from "./itemContext";
import axios from "axios";

export const UseItemContext = () => {
  const itemContext = useContext(ItemContext);
  const { dispatch, items } = itemContext;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:8081/api/product/");
        dispatch({
          type: "SetItems",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function hasUserReviewedItem(itemId, userId) {
    const item = items.find((item) => item.id === itemId);

    const hasReviewed = item.reviews.some((review) => review.userId === userId);

    return hasReviewed;
  }
  return { itemContext, dispatch, items, hasUserReviewedItem };
};
