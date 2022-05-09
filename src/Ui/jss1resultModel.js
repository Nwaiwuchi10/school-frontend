import mongoose from "mongoose";

const remarkSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    grade: { type: String, required: true },
    comment: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const jss1resultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },

    registrationNumber: {
      type: String,
      required: true,
    },
    remark: [remarkSchema],
    mathematics: {
      type: Number,
      required: true,
      default: 0,
    },
    english: {
      type: Number,
      required: true,
      default: 0,
    },
    healthScience: {
      type: Number,
      required: true,
      default: 0,
    },
    igboLanguage: {
      type: Number,
      required: true,
      default: 0,
    },
    CRK: {
      type: Number,
      required: true,
      default: 0,
    },
    TotalScore: {
      type: Number,
      required: true,
      default: 0,
    },
    TotalAverage: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    basicScience: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Jss1result = mongoose.model("Jss1result", jss1resultSchema);

export default Jss1result;
