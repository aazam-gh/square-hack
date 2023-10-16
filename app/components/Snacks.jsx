import { Client, Databases } from "appwrite";
import Image from "next/image";

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6496196ac8399fe06737') // Your project ID
;


export default async function Snacks(){
    const snacks = await databases.listDocuments('652c94392548cbc325c6', '652c947007db32e2adce');
    

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