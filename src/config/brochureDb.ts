import mongoose from 'mongoose';

const db_uri = process.env.NEXT_PUBLIC_ATLAS_DB_BROCHURE as string;

class BrochureDBConnection {
    private uri: string;
    private isConnected: boolean = false;
    private static instance: BrochureDBConnection | null = null;

    constructor(db_uri: string) {
        this.uri = db_uri;
        this.isConnected = false;
    }

    public static getInstance(db_uri: string) {
        if(!this.instance) {
            this.instance = new BrochureDBConnection(db_uri);
        }
        else {
            throw new Error('Only one connection can exist');
        }

        return this.instance;
    }

    async connect() {
        if(this.isConnected) {
            throw new Error('DB is already connected');
        }
        else {
            await mongoose.connect(this.uri);
            this.isConnected = true;
        }
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

const brochureDb = BrochureDBConnection.getInstance(db_uri);

export default brochureDb;