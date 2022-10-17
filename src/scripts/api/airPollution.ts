type pollutionFields =
  | "loc"
  | "place"
  | "periods"
  | "periods.aqi"
  | "periods.category"
  | "periods.dominant"
  | "periods.pollutants"
  | "profile.tz";

// example usage: getAirPollutionData(45.24, -93.99, 44.86, -93);
export const getAirPollutionData = async (
  topLat: number,
  leftLng: number,
  bottomLat: number,
  rightLng: number,
  limit?: number,
  fields?: pollutionFields[]
) => {
  // note: format can also be geojson
  const clientId = "AcxJ7pqDEeRA8kcDUOTPS";
  const clientSecret = "NvtR5tTAtiQqTkHyFejDTirsbaUlHllXMjImNLYi";
  const defaultFields = ["loc", "periods.aqi", "periods.pollutants"];
  const response = await fetch(
    `https://api.aerisapi.com/airquality/within?p=${topLat},${leftLng},${bottomLat},${rightLng}&format=json&limit=${
      limit || 100
    }&fields=${
      (fields && fields.join(",")) || defaultFields.join(",")
    }&client_id=${clientId}&client_secret=${clientSecret}`
  );
  const data = await response.json();
  console.log(data);
};
