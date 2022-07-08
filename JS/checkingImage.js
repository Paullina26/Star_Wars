export const checkingImage = (arrayImage, arrayAPI, element, params) => {
  // filter - znajduje wszystko co pasuję i zwraca tablice
  // find - znajduje jeden konkretny element i zwraca obiekt
  const image = arrayImage.find(
    img => img[params.first] === arrayAPI[params.second]
  );

  if (image) {
    element.setAttribute('src', image.img);
  } else {
    element.setAttribute('src', 'img/noPicture.jpg');
  }
};
