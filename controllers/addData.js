import  scheemaModel from "../models/scheema.js";

export const addPortfolio = async (req, res) => {
  try {
    const data = req.body;
    const existing = await scheemaModel.findOne();
    if (existing) {
      return res.status(400).json({ message: "Portfolio already exists" });
    }
    const newPortfolio = new scheemaModel(data);
    await newPortfolio.save();

    res.status(201).json({
      message: "Portfolio added successfully!",
      data: newPortfolio
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
