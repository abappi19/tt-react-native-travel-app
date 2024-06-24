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
    
    description:
      "Hotel Paradise offers luxurious accommodations with stunning views of the city. Located in the heart of Banani, it provides easy access to shopping centers, restaurants, and entertainment venues. The hotel features elegantly appointed rooms and suites, each equipped with modern amenities to ensure a comfortable stay. Guests can enjoy a range of dining options, including fine international cuisine at the on-site restaurant. Other amenities include a fitness center, spa, and swimming pool. Whether you're traveling for business or leisure, Hotel Paradise offers the perfect blend of comfort, convenience, and luxury.",
    reviewList: [
      {
        userId: 101,
        name: "John Doe",
        rating: 5,
        reviewDate: "2024-01-15",
        review:
          "Excellent service and great amenities. The staff was very friendly and helpful throughout my stay.",
      },
      {
        userId: 102,
        name: "Jane Smith",
        rating: 4,
        reviewDate: "2024-02-20",
        review:
          "I had a wonderful experience at Hotel Paradise. The rooms were spacious and clean, and the breakfast buffet was delicious.",
      },
    ],
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
    
    description:
      "Sunset Inn offers comfortable accommodation in the heart of Gulshan. Situated within walking distance of popular attractions, shopping centers, and restaurants, the hotel provides an ideal base for exploring the city. The guest rooms are tastefully decorated and feature modern amenities to ensure a pleasant stay. Guests can enjoy a range of facilities, including a rooftop swimming pool, fitness center, and business center. The hotel's restaurant serves a variety of local and international dishes, catering to all tastes. Whether you're traveling for business or leisure, Sunset Inn offers a convenient and comfortable stay.",
    reviewList: [
      {
        userId: 103,
        name: "Michael Johnson",
        rating: 5,
        reviewDate: "2024-03-10",
        review:
          "The location of Sunset Inn is perfect, and the staff is very attentive. I would highly recommend this hotel to anyone visiting Dhaka.",
      },
      {
        userId: 104,
        name: "Emily Brown",
        rating: 4,
        reviewDate: "2024-04-05",
        review:
          "I had a pleasant stay at Sunset Inn. The rooms were clean and cozy, and the breakfast spread was impressive.",
      },
    ],
  },
  {
    id: 3,
    name: "City Lights Hotel",
    rating: 4.6,
    reviews: "210 reviews",
    location: {
      lat: 23.7845128,
      long: 90.4263016,
      name: "Bashundhara, Dhaka",
    },
    image: require(`@/assets/images/hotel/hotel3.jpg`),
    
    description:
      "City Lights Hotel offers modern accommodations with a touch of luxury in the vibrant Bashundhara area. The hotel is conveniently located near major shopping malls, business centers, and entertainment venues, making it an ideal choice for both business and leisure travelers. Each room is designed with contemporary decor and equipped with all the necessary amenities to ensure a comfortable and enjoyable stay. Guests can unwind at the rooftop bar, enjoy a meal at the hotel's restaurant, or relax in the spa and wellness center. City Lights Hotel is dedicated to providing exceptional service and a memorable experience for all its guests.",
    reviewList: [
      {
        userId: 105,
        name: "Sarah Connor",
        rating: 5,
        reviewDate: "2024-01-25",
        review:
          "City Lights Hotel exceeded my expectations. The staff were professional and the facilities were top-notch.",
      },
      {
        userId: 106,
        name: "Tom Hardy",
        rating: 4,
        reviewDate: "2024-02-28",
        review:
          "I had a fantastic stay at City Lights Hotel. The room was comfortable and the location was perfect for my needs.",
      },
    ],
  },
  {
    id: 4,
    name: "Grand Central Hotel",
    rating: 4.7,
    reviews: "320 reviews",
    location: {
      lat: 23.7840128,
      long: 90.4268016,
      name: "Uttara, Dhaka",
    },
    image: require(`@/assets/images/hotel/hotel4.jpg`),
    
    description:
      "Grand Central Hotel offers an elegant and sophisticated stay in the bustling Uttara area. The hotel is renowned for its exceptional service, luxurious accommodations, and convenient location. Guests can choose from a variety of rooms and suites, each beautifully furnished and equipped with modern amenities. The hotel boasts multiple dining options, including a fine dining restaurant, a casual cafe, and a stylish bar. Additional amenities include a fitness center, swimming pool, and business facilities. Grand Central Hotel is committed to making every guest's stay as enjoyable and comfortable as possible.",
    reviewList: [
      {
        userId: 107,
        name: "Alice Johnson",
        rating: 5,
        reviewDate: "2024-03-15",
        review:
          "Grand Central Hotel provided an amazing experience. The staff were friendly and the amenities were excellent.",
      },
      {
        userId: 108,
        name: "Robert Downey",
        rating: 4,
        reviewDate: "2024-04-10",
        review:
          "I highly recommend Grand Central Hotel. The rooms were luxurious and the service was impeccable.",
      },
    ],
  },
  {
    id: 5,
    name: "Riverside Hotel",
    rating: 4.4,
    reviews: "190 reviews",
    location: {
      lat: 23.7841128,
      long: 90.4266016,
      name: "Dhanmondi, Dhaka",
    },
    image: require(`@/assets/images/hotel/hotel5.jpg`),
    
    description:
      "Riverside Hotel is a charming boutique hotel located in the scenic Dhanmondi area. The hotel offers a peaceful retreat from the hustle and bustle of the city, with beautiful views of the nearby lake. Each room is elegantly decorated and equipped with all the necessary amenities for a relaxing stay. Guests can enjoy a range of facilities, including a rooftop terrace, a fitness center, and a cozy restaurant serving local and international cuisine. Riverside Hotel is perfect for travelers looking for a tranquil and comfortable stay in Dhaka.",
    reviewList: [
      {
        userId: 109,
        name: "Emma Watson",
        rating: 5,
        reviewDate: "2024-05-05",
        review:
          "Riverside Hotel is a hidden gem. The location is beautiful and the hotel itself is very comfortable.",
      },
      {
        userId: 110,
        name: "Chris Evans",
        rating: 4,
        reviewDate: "2024-06-01",
        review:
          "I enjoyed my stay at Riverside Hotel. The staff were attentive and the views were stunning.",
      },
    ],
  },
];

export default hotels;
