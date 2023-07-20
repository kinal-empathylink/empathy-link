import { Document, Schema, model, models } from "mongoose";

// Interface for Report document
export interface IReport extends Document {
  age: number;
  incidentDate?: Date;
  description: string;
  witnesses?: string;
  incidentType?: string;
  injuries?: string;
  aggressor?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for Report
const reportSchema = new Schema<IReport>(
  {
    age: {
      type: Number,
      required: [true, "El dato es requerido."],
    },
    incidentDate: {
      type: Date,
    },
    description: {
      type: String,
      required: [true, "El dato es requerido."],
    },
    witnesses: {
      type: String,
    },
    incidentType: {
      type: String,
    },
    injuries: {
      type: String,
    },
    aggressor: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pendiente", "Solucionado"],
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

// Create and export the Report model
const Report = models.Report || model<IReport>("Report", reportSchema);

export default Report;
