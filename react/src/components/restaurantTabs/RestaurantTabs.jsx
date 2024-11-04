import { Tab } from "../tab/Tab.jsx";
import Link from "next/link";

const RestaurantTabs = ({ children, restaurants, topic = "Restaurants" }) => {
  return (
    <div>
      <h1>{topic}</h1>
      {restaurants.map(({ id, name }) => (
        <Link href={`/restaurants/${id}`} key={id}>
          <Tab key={id} tabTopic={name} id={id} />
        </Link>
      ))}
      {children}
    </div>
  );
};
export default RestaurantTabs;
