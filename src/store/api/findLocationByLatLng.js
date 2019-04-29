import "isomorphic-fetch";

const findLocationByLatLong = async(latitude, longitude) => {
  const latlon = [latitude, longitude].join(",");
  // Using the create-react-app's proxy for CORS issues
  const response = await fetch(`https://react-assessment-api.herokuapp.com/api/weather/location/search/?lattlong=${latlon}`);
  if (!response.ok) {
    return {
      error: {
        code: response.status
      }
    };
  }
  const json = await response.json();
  return {data: json};
};

// findLocationByLatLong('29.76328, -95.36327')   .then(data =>
// console.log(data.data))   .catch(response => console.log(response.message));

export default findLocationByLatLong;
