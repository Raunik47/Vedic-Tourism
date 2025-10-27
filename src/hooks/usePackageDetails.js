import { useState, useEffect } from 'react';

export function usePackageDetails(id) {
  const [packageData, setPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use mock data
        const mockPackages = {
          1: {
            id: 1,
            name: "Char Dham Yatra",
            duration: "12 Days",
            price: "₹45,999",
            originalPrice: "₹52,999",
            image: "/src/assets/chardham.jpg",
            description: "Complete pilgrimage to four sacred shrines in the Himalayas",
            detailedDescription: "Embark on the ultimate spiritual journey to the four abodes of God. This sacred yatra takes you through the majestic Himalayas to Badrinath, Kedarnath, Gangotri, and Yamunotri.",
            highlights: [
              "Badrinath Temple Darshan",
              "Kedarnath Helicopter Access",
              "Gangotri Source Visit",
              "Yamunotri Holy Dip",
              "Expert Spiritual Guide",
              "Comfortable Accommodations"
            ],
            includes: ["Accommodation", "Meals", "Transport", "Guide", "Rituals"],
            discount: "13% OFF",
            rating: 4.9,
            reviews: 1247
          },
          2: {
            id: 2,
            name: "Varanasi Spiritual Retreat",
            duration: "5 Days",
            price: "₹22,999",
            originalPrice: "₹27,999",
            image: "/src/assets/varanasi.jpg",
            description: "Immerse in the spiritual capital of India",
            detailedDescription: "Experience the eternal city of Varanasi with its ancient ghats, sacred Ganga rituals, and profound spiritual energy. Witness life, death, and liberation in one place.",
            highlights: [
              "Sunrise Boat Ride Ganga",
              "Evening Ganga Aarti",
              "Kashi Vishwanath Darshan",
              "Sarnath Buddhist Tour",
              "Traditional Puja Participation",
              "Spiritual Discourse"
            ],
            includes: ["Hotel Stay", "Vegetarian Meals", "Local Transport", "Guide", "Puja Materials"],
            discount: "18% OFF",
            rating: 4.8,
            reviews: 892
          },
          3: {
            id: 3,
            name: "Rishikesh Yoga Journey",
            duration: "7 Days",
            price: "₹28,999",
            originalPrice: "₹32,999",
            image: "/src/assets/rishikesh.jpg",
            description: "Yoga and meditation in the world's yoga capital",
            detailedDescription: "Transform your mind, body, and soul in the serene environment of Rishikesh. Daily yoga sessions, meditation by the Ganges, and adventure activities.",
            highlights: [
              "Daily Yoga & Meditation",
              "Ganga Aarti Participation",
              "Beatles Ashram Visit",
              "White Water Rafting",
              "Ayurvedic Treatments",
              "Nature Walks & Trekking"
            ],
            includes: ["Yoga Resort", "All Meals", "Yoga Classes", "Activities", "Guide"],
            discount: "12% OFF",
            rating: 4.7,
            reviews: 756
          },
          4: {
            id: 4,
            name: "Prayagraj Sangam Pilgrimage",
            duration: "4 Days",
            price: "₹17,499",
            originalPrice: "₹21,999",
            image: "/src/assets/prayagraj.jpg",
            description: "Spiritual journey to the Triveni Sangam",
            detailedDescription: "Experience the divine confluence of the Ganga, Yamuna, and Saraswati at the holy Triveni Sangam in Prayagraj. Take a sacred dip to purify your soul.",
            highlights: [
              "Holy Dip at Triveni Sangam",
              "Attend Evening Ganga Aarti",
              "Visit Bade Hanuman Temple",
              "Explore Akshayavat Tree",
              "Anand Bhavan Museum Tour",
              "Spiritual Walk Along Ghats"
            ],
            includes: ["Hotel Stay", "Meals", "AC Transport", "Guide", "Boat Rides"],
            discount: "20% OFF",
            rating: 4.8,
            reviews: 582
          }
        };

        const parsedId = parseInt(id);
        const selectedPackage = mockPackages[parsedId];
        
        if (!selectedPackage) {
          throw new Error('Package not found');
        }

        setPackageData(selectedPackage);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPackageDetails();
    }
  }, [id]);

  return { packageData, isLoading, error };
}