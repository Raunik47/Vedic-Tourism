import { useState, useEffect } from 'react';

export function usePackages() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
       
        const mockPackages = [
          {
            id: 1,
            name: "Char Dham Yatra",
            duration: "12 Days",
            price: "₹45,999",
            originalPrice: "₹52,999",
            image: "/src/assets/chardham.jpg",
            rating: 4.9,
            reviews: 1247,
            description: "Complete pilgrimage to four sacred shrines in the Himalayas",
            highlights: [
              "Badrinath Temple Darshan",
              "Kedarnath Helicopter Access",
              "Gangotri Source Visit",
              "Yamunotri Holy Dip",
              "Expert Spiritual Guide",
              "Comfortable Accommodations"
            ],
            includes: ["Accommodation", "Meals", "Transport", "Guide", "Rituals"]
          },
          {
            id: 2,
            name: "Varanasi Spiritual Retreat",
            duration: "5 Days",
            price: "₹22,999",
            originalPrice: "₹27,999",
            image: "/src/assets/varanasi.jpg",
            rating: 4.8,
            reviews: 892,
            description: "Immerse in the spiritual capital of India",
            highlights: [
              "Sunrise Boat Ride Ganga",
              "Evening Ganga Aarti",
              "Kashi Vishwanath Darshan",
              "Sarnath Buddhist Tour",
              "Traditional Puja Participation",
              "Spiritual Discourse"
            ],
            includes: ["Hotel Stay", "Vegetarian Meals", "Local Transport", "Guide", "Puja Materials"]
          },
          {
            id: 3,
            name: "Rishikesh Yoga Journey",
            duration: "7 Days",
            price: "₹28,999",
            originalPrice: "₹32,999",
            image: "/src/assets/rishikesh.jpg",
            rating: 4.7,
            reviews: 756,
            description: "Yoga and meditation in the world's yoga capital",
            highlights: [
              "Daily Yoga & Meditation",
              "Ganga Aarti Participation",
              "Beatles Ashram Visit",
              "White Water Rafting",
              "Ayurvedic Treatments",
              "Nature Walks & Trekking"
            ],
            includes: ["Yoga Resort", "All Meals", "Yoga Classes", "Activities", "Guide"]
          },
          {
            id: 4,
            name: "Prayagraj Sangam Pilgrimage",
            duration: "4 Days",
            price: "₹17,499",
            originalPrice: "₹21,999",
            image: "/src/assets/prayagraj.jpg",
            rating: 4.8,
            reviews: 582,
            description: "Spiritual journey to the Triveni Sangam",
            highlights: [
              "Holy Dip at Triveni Sangam",
              "Attend Evening Ganga Aarti",
              "Visit Bade Hanuman Temple",
              "Explore Akshayavat Tree",
              "Anand Bhavan Museum Tour",
              "Spiritual Walk Along Ghats"
            ],
            includes: ["Hotel Stay", "Meals", "AC Transport", "Guide", "Boat Rides"]
          }
        ];

        setPackages(mockPackages);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return { packages, isLoading, error };
}