export const filterAreasByPostcode = (areas, postcode) => {
  const filteredAreas = areas.filter((area) => {
    return area.postcode === postcode;
  });

  return filteredAreas;
};

export const checkPostcodeInCache = (areas, postcode) => {
  for (let i = 0; i < areas.length; i++) {
    if (areas[i].postcode === postcode) {
      return true;
    }
  }
};
