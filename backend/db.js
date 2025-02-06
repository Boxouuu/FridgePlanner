import { connect } from 'mongoose';

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/fridge_app';

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("🟢 Connected to MongoDB"))
.catch(err => console.error("🔴 MongoDB connection error:", err));