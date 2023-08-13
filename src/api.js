import axios from 'axios';

const searchObjects = async (term) => {
  try {
    const responseSearchObjects = await axios.get(
      'https://collectionapi.metmuseum.org/public/collection/v1/search',
      {
        params: {
          q: term,
          hasImages: 'true',
          isPublicDomain: 'true',
        },
      }
    );

    const objectIDs = responseSearchObjects.data.objectIDs;

    const objectDataPromises = objectIDs.map(fetchObjectData);
    const objectData = await Promise.all(objectDataPromises);

    return objectData;
  } catch (error) {
    if (error.response && error.response.status === 404) return [];
  }

  async function fetchObjectData(id) {
    try {
      const result = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id
      );
      return result.data;
    } catch (error) {
      return [];
    }
  }

  // const searchImages = async (term) => {
  //   const responseSearchImages = await axios.get(
  //     'https://collectionapi.metmuseum.org/public/collection/v1/search',
  //     {
  //       params: {
  //         q: term,
  //         hasImages: 'true',
  //         isPublicDomain: 'true',
  //       },
  //     }
  //   );
  //   const objectIDs = responseSearchImages.data.objectIDs;
  //   console.log(objectIDs);

  //   objectIDs.map(fetchImageData);

  //   async function fetchImageData(id) {
  //     const result = await axios.get(
  //       'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id,
  //       { validateStatus: false }
  //     );
  //     console.log(result);
  //   }

  // -----------------------------

  // fetchImageData().catch((err) => {
  //   console.log('in catch');
  // });

  // const getImageID = () => {
  //   return new Promise(resolve, reject) => {

  //   }
  // }

  // const resultsSearchImages = await responseSearchImages.data.objectIDs.map(
  //   fetchImageData
  // );

  // async function fetchImageData(id) {
  //   // console.log(id + 'hello');
  // const responseImageData = await axios.get(
  //   `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  //   );
  //   console.log(responseImageData.data);
  // }
};

export default searchObjects;
