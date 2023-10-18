import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { snacks } from "../appwrite";
import Sub from "./Sub";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCiAhEBIbrUaPGJKhJP_v7Hn2LotZJyCy8";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

function getSnacks(input) {
    const teen = snacks.documents.map(snack => (
        input = input + "\n" + snack.Description
        ))
    }


export default async function AI() {
    const prompt = "Based on the given information of different snacks, return a string asking 2 to 3 questions relating to the given snacks on what type of snacks does the user like to eat";
    getSnacks(prompt)
    const question = await client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    })
    const asks = question[0].candidates[0].output

        return (
            <div className="px-10 text-4xl">
                <div id="ques"> {asks} </div>
                <Sub />
            </div>
            
        )
}