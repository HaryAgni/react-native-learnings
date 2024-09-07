const API_KEY = "AIzaSyDIH0CvTXQpBFOG6KSLAPNiv1nP3GZ0e0k";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
&key=${API_KEY}`;

  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=edcb7a21a35142a8bc2da6a48f2021fc`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch address!");
    }
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const address = data.features[0].properties.formatted;
      return address;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}
