const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(), // .required() should be invoked
        email: Joi.string().email().required(), // .required() should be invoked
        password: Joi.string().min(4).max(100).required(), // .required() should be invoked
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(), // .required() should be invoked
        password: Joi.string().min(4).max(100).required(), // .required() should be invoked
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error });
    }
    next();
}

module.exports = { signupValidation, loginValidation };
