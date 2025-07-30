'use client'
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { deleteImage } from "~/server/queries";


export const DeleteImageButton = ({ imageId }: { imageId: number }) => {
  const router = useRouter();

  async function handleDelete(id: number) {
    await deleteImage(id);
    
    router.push('/');
  }

  return (
    <div>
        <Button variant="destructive" type="submit" className="cursor-pointer" onClick={() => handleDelete(imageId)}>
            Delete
        </Button>
    </div>
  )
}