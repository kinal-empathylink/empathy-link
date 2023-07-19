import { Document, Schema, model, models } from "mongoose";

// Interface for User document
export interface IGrade extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for User
const gradeSchema = new Schema<IGrade>(
  {
    name: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create and export the User model
const Grade = models.Grade || model<IGrade>("Grade", gradeSchema);

export default Grade;
