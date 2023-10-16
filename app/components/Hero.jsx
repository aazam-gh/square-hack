import Image from "next/image"
import "@appwrite.io/pink";



export default function Hero() {
    return (
        <div className="flex justify-between items-center bg-pink-800">
            <div className="flex flex-col items-start gap-4 px-4">
                <div className="text-5xl font-bold">Subscribe to our Snacks</div>
                <div className="text-xl">Let AI recommend you every month!</div>
            </div>
            <Image  src="/hero.webp" width={500} height={500} alt="banner" />
        </div>
    )
}