import Image from "next/image";
import { snacks } from "../appwrite"


export default async function Snacks(){

    return (
        <div className="flex justify-center items-center">
               {snacks.documents.map(snack => (
                <div key={snack.$id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <h2 className="text-4xl pb-4">{snack.Name}</h2>
                    <Image src={snack.Image} alt={snack.Name} width={300} height={300} />
                </div>
                ))}
        </div>
    )
    
}