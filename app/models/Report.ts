import { Document, Schema, model, models } from "mongoose";

// Interface for Report document
export interface IReport extends Document {
  grade?: string;
  incidentDate: Date;
  description: string;
  witnesses?: string;
  incidentType: string;
  injuries: string;
  aggressor: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for Report
const reportSchema = new Schema<IReport>(
  {
    grade: {
      type: String,
    },
    incidentDate: {
      type: Date,
      required: true
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
      required: true
    },
    injuries: {
      type: String,
      required: true
    },
    aggressor: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ["Pendiente", "Solucionado"],
      default: "Pendiente"
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
