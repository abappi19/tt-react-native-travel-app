const hotels = [
  {
    id: 1,
    name: "Hotel Paradise",
    rating: 4.5,
    reviews: "230 reviews",
    location: {
      lat: 23.7843128,
      long: 90.4267016,
      name: "Banani, Dhaka",
    },
    image: require(`@/assets/images/hotel/hotel1.jpg`),
    description: "Hotel Paradise offers luxurious accommodations with stunning views of the city. Located in the heart of Banani, it provides easy access to shopping centers, restaurants, and entertainment venues. The hotel features elegantly appointed rooms and suites, each equipped with modern amenities to ensure a comfortable stay. Guests can enjoy a range of dining options, including fine international cuisine at the on-site restaurant. Other amenities include a fitness center, spa, and swimming pool. Whether you're traveling for business or leisure, Hotel Paradise offers the perfect blend of comfort, convenience, and luxury.",
    reviewList: [
      {
        name: "John Doe",
        review: "Excellent service and great amenities. The staff was very friendly and helpful throughout my stay."
      },
      {
        name: "Jane Smith",
        review: "I had a wonderful experience at Hotel Paradise. The rooms were spacious and clean, and the breakfast buffet was delicious."
      }
    ]
  },
  {
    id: 2,
    name: "Sunset Inn",
    rating: 4.3,
    reviews: "180 reviews",
    location: {
      lat: 23.7839128,
      long: 90.4270016,
      name: "Gulshan, Dhaka",
    },
    image: require(`@/assets/images/hotel/hotel2.jpg`),
    description: "Sunset Inn offers comfortable accommodation in the heart of Gulshan. Situated within walking distance of popular attractions, shopping centers, and restaurants, the hotel provides an ideal base for exploring the city. The guest rooms are tastefully decorated and feature modern amenities to ensure a pleasant stay. Guests can enjoy a range of facilities, including a rooftop swimming pool, fitness center, and business center. The hotel's restaurant serves a variety of local and international dishes, catering to all tastes. Whether you're traveling for business or leisure, Sunset Inn offers a convenient and comfortable stay.",
    reviewList: [
      {
        name: "Michael Johnson",
        review: "The location of Sunset Inn is perfect, and the staff is very attentive. I would highly recommend this hotel to anyone visiting Dhaka."
      },
      {
        name: "Emily Brown",
        review: "I had a pleasant stay at Sunset Inn. The rooms were clean and cozy, and the breakfast spread was impressive."
      }
    ]
  },
  // Add descriptions for other hotels here
];

export default hotels;
