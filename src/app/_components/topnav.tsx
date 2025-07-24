'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing"

export function TopNav() {
  return(
    <nav className="flex items-center justify-between w-full p-4 text-xl 
      border-b font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UploadButton endpoint="imageUploader" />
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}