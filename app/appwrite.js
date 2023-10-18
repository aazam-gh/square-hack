import { Client, Account, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6496196ac8399fe06737'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export const snacks = await databases.listDocuments('652c94392548cbc325c6', '652c947007db32e2adce');    
