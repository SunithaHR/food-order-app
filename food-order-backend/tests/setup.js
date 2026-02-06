import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

// For tests, we'll use MongoDB Memory Server
// But for now, we'll skip this and use a test database
// Let's use a simpler approach first