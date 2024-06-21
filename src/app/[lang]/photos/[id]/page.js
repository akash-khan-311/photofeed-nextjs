import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = ({ params: { id,lang } }) => {
  return (
    <section className="">
      <PhotoDetails id={id} lang={lang} />
    </section>
  );
};
export default PhotoDetailsPage;
