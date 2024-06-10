import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
// import Shimmer from './Shimmer';
import ShimmerMenu from './ShimmerMenu';
import RestaurantCategory from './RestaurentCategory';
import { useState } from 'react';
// import { CDN_URL } from '../utils/constants';
// import { MENU_API } from '../utils/constants';
// import { FiClock } from 'react-icons/fi';
// import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  
  const dummy = 'Dummy Data';

  const showItems = 'true';

  const [showIndex, setShowIndex] = useState(null)

  // console.log(resInfo);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    // console.log(categories)

  return (
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p>{cuisines.join(', ')} - {costForTwoMessage}</p>

      {categories.map((category, index) => (
        <RestaurantCategory 
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={index === showIndex ? () => setShowIndex(null) : () => setShowIndex(index)}
        dummy={dummy}

      />
      ))}
    </div>
  );
};

export default RestaurantMenu;
