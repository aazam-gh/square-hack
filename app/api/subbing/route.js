import { NextResponse } from "next/server";
import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";


const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCiAhEBIbrUaPGJKhJP_v7Hn2LotZJyCy8";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


export async function POST(req, res) {
    const { snacks, answer } = req.body 
    const prompt = "Based on the user answer that they prefer" + answer +"choose 1 snack from the following list of snacks:" + snacks;
    const question = await client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    })
    const data = await question.json()
   
    return data[0].candidates[0].output
  }