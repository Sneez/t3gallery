import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id
  const idAsNumber = Number(photoId)
  if (Number.isNaN(idAsNumber)) throw new Error ("Invalid photo id")

  return <FullPageImageView id={idAsNumber} /> 
}