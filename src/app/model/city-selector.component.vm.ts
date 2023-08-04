export interface CitySelectorVm {
    availableCities: CitySelectorProps[];
}

interface CitySelectorProps {
    name: string;
    country: string
    coordinates: string; // It will be a string like "51.50851,-0.12572". You can use this for the weather requests.
}