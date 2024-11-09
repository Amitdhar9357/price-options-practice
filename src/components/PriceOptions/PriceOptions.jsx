import PriceOption from "../PriceOpiton/PriceOption";

const PriceOptions = () => {

  const priceOption = [
    {
      "id": 1,
      "name": "Basic",
      "price": 29.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 guest pass per month",
        "Free Wi-Fi",
        "Standard support",
        "Access during staffed hours only"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 49.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "5 guest passes per month",
        "Access to sauna",
        "Discount on personal training sessions",
        "Towel service",
        "Extended hours access"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 69.99,
      "features": [
        "All Standard plan features",
        "Unlimited guest passes",
        "Personal training session (1 per month)",
        "Nutrition consultation (1 per month)",
        "Priority customer support",
        "Access to all group classes including yoga and pilates",
        "Free fitness assessment",
        "Premium locker room access with amenities"
      ]
    },
   
  ]

  return (
    <div className="m-10">
      <h2 className="text-4xl">Best Price in the town</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {
          priceOption.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;