import { useState, useEffect } from 'react';
import { allPackages } from '../data/packages';

export function usePackageDetails(id) {
  const [packageData, setPackageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use mock data
        const parsedId = parseInt(id, 10);
        const selectedPackage = allPackages.find((p) => p.id === parsedId);

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