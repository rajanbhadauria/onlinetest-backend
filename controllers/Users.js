const router = express.Router();
const Joi = require('joi');
const UserModal = require('../models/User');

const userValidation = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required().error((errors)=>{
          errors.forEach((err) => {
            switch (err.code) {
              case "any.empty":
                err.message = "First Name is required"
              break;
              case "string.min":
                  err.message = "First Name must have minmium length of 3"
              break;
              default:

            }
          });
          return errors;
        }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });

router.post('/users/signup', (req, res)=>{

  const inputs = req.body;
  // validating all inputs
  const validation_status = userValidation.validate(inputs, { abortEarly: false });
  //
  if(validation_status.error) {
    return res.status(400).send(validation_status.error);
  }



  return res.send(req.body)
})

module.exports = router;
