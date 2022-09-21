import { MongoClient } from "mongodb";
import { disconnect } from "process";


export const MongoHelper = {
    client: null as MongoClient,

    async connect (uri: string): Promise<void> {
        this.client = await MongoClient.connect(uri); 
    },
    async disconnect (): Promise<void>  {
        await this.client.close();
    }
};