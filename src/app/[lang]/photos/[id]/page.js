import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = ({ params: { id,lang } }) => {
  return (
    <section className="">
      <PhotoDetails id={id} />
    </section>
  );
};
export default PhotoDetailsPage;
