import mongoose from 'mongoose';

const db_uri = process.env.NEXT_PUBLIC_ATLAS_DB_APPLY as string;

class ApplyDBConnection {
    private uri: string;
    private isConnected: boolean = false;
    private static instance: ApplyDBConnection | null = null;

    constructor(db_uri: string) {
        this.uri = db_uri;
        this.isConnected = false;
    }

    public static getInstance(db_uri: string) {
        // if(!this.instance) {
        //     this.instance = new ApplyDBConnection(db_uri);
        // }
        // else {
        //     throw new Error('Only one connection can exist');
        // }

        this.instance = new ApplyDBConnection(db_uri);

        return this.instance;
    }

    async connect() {
        // if(this.isConnected) {
        //     throw new Error('DB is already connected');
        // }
        // else {
        //     await mongoose.connect(this.uri);
        //     this.isConnected = true;
        // }

        await mongoose.connect(this.uri);
    }

    async disconnect() {
        if(this.isConnected) {
            await mongoose.disconnect();
            this.isConnected = false;
        }
        else {
            throw new Error('Db is not connected');
        }
    }
}

const applyDb = ApplyDBConnection.getInstance(db_uri);

export default applyDb;