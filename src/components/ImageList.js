import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const validImages = images.filter((image) => image !== null);
  const renderedImages = validImages.map((image) => {
    return <ImageShow key={image.objectID + 'b'} image={image} />;
  });

  return <div className='image-list'>{renderedImages}</div>;
}

export default ImageList;
