import scheemaModel from "../models/scheema.js";
export const getHome = async (req, res) => {
  try {
    const data = await scheemaModel.findOne();
    res.status(200).json({message:"Home data fetch successfully", data: data.home});
  }catch (err) {
    res.status(500).json({ message: "Failed to fetch home data" });
  }
};


export const getAbout = async (req, res) => {
  try {
    const data = await scheemaModel.findOne();
    res.status(200).json({message:"about data fetch successfully", data: data.about});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch about data"});
  }
};



export const getEducation = async (req, res) => {
  try {
    const data = await scheemaModel.findOne();
    res.status(200).json({message:"eductaion find successfully", data:data.education});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch education data", data:data.education });
  }
};


export const getSkills = async (req, res) => {
  try {
    const data = await scheemaModel.findOne();
    res.status(200).json({message:"skills get successfully",data:data.skills});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch skills data" });
  }
};


export const getProjects = async (req, res) => {
  try {
    const data = await scheemaModel.findOne();
    res.status(200).json({message:"project get successfully", data:data.projects});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects data" });
  }
};
export const getAllData= async(req,res)=>{
  try{
    const data= await scheemaModel.find();
    res.status(200).json({message:"All data fetched successfully", data})
  }
  catch(err){
    res.status(500).json({message:"Failed to fetch all data", error: err.message})
  }
}




