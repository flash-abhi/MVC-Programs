// Please don't change the pre-written code
// Import the necessary modules here
import {blogs} from "../models/blog.model.js"
export const renderBlogs = (req,res) => {
  // Write your code here
  res.render("blogs",{blogs:blogs})
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  res.render("addBlogForm")
};
export const addBlog = (req,res) => {
  // Write your code here
  // console.log(req.body)
  const data = req.body
  blogs.push({
    title:data.title,
    description:data.description,
    img: data.img
  })
  res.render('blogs',{blogs})
};
