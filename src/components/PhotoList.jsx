import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <section className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </section>
  );
};
export default PhotoList;
