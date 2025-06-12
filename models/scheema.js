import mongoose from "mongoose";
const portfolioScheema=mongoose.Schema({
    home:{
    name: String,
    title: String,
    description: String,
    profileImage: String
  },
  about: {
    description1: String,
    description2: String,
    image: String
  },
    education: [
    {
      degree: String,
      duration: String,
      institution: String,
      description: String
    }
  ],
    skills: {
    technical: [String],
    categories: [
      {
        icon: String,
        title: String,
        skills: String
      }
    ]
  },
    projects: [
    {
      title: String,
      description: String,
      technologies: [String],
      github: String,
      live: String
    }
  ],

})
const scheemaModel=mongoose.model("portfolio",portfolioScheema)
export default scheemaModel;


