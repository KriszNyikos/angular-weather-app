export interface CitySelectorVM {
  availableCities: CitySelectorProps[];
}

export interface CitySelectorProps {
  name: string;
  country: string;
  coordinates: string; // It will be a string like "51.50851,-0.12572". You can use this for the weather requests.
}

export function mapWeatherApiCitiesToCitySelectorVM(
  apiResponse: any[]
): CitySelectorVM | null {
  if (apiResponse.length === 0) {
    return null;
  }

  return {
    availableCities: apiResponse.map((city) => {
      return {
        name: city.name,
        country: city.country,
        coordinates: `${city.lat},${city.lon}`,
      };
    }),
  };
}
