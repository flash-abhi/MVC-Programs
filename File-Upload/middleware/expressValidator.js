// Please don't change the pre-written code
// Import the necessary modules here

import { body ,validationResult} from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  const rules =[
    body("name").isLength({min:1}).withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body('image')
    .custom((value, {req}) => {
           if(!req.file){
             throw new Error("image is required")
           }
           else{
            return true
           }
        })
    .withMessage('Please only submit image documents.')
  ]

  await Promise.all(rules.map(rule => rule.run(req)))
  let validationErrors = validationResult(req)
  if(!validationErrors.isEmpty()){
    res.json({error:validationErrors})
  }
  else{
    next()
  }
};
