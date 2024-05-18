import mongoose from "mongoose";

const codeSnippetsSchema = new mongoose.Schema(
  {
    author: {
      first_name: { type: "string" },
      last_name: { type: "string" },
      email: { type: "string", required: false },
      id: { type: "string" },
    },
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    code: [
      {
        heading: { type: "string", required: true },
        language: { type: "string", required: true },
        content: { type: "string", required: true },
      },
    ],
    copy_count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Check if the model already exists before creating a new instance
const CodeSnippetModel =
  mongoose.models.Snippets || mongoose.model("Snippets", codeSnippetsSchema);

export default CodeSnippetModel;
