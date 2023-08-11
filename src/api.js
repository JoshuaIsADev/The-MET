import axios from 'axios';

const searchImages = async (term) => {
  const responseSearchImages = await axios.get(
    'https://collectionapi.metmuseum.org/public/collection/v1/search',
    {
      params: {
        q: term,
        hasImages: 'true',
      },
    }
  );

  const searchImageData = await responseSearchImages.data.objectIDs.map(
    fetchImageData
  );

  async function fetchImageData(id) {
    // console.log(id + 'hello');
    const responseImageData = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    const resultSearchImages = responseImageData.data;
    console.log(resultSearchImages);
  }
};

export default searchImages;
