function ImageShow({ image }) {
  return (
    <div>
      <img src={image.primaryImageSmall} alt={image.title} />
    </div>
  );
}

export default ImageShow;
