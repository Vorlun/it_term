const validate =
  (schema, property = "body") =>
  (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      const errors = error.details.map((e) => e.message);
      return res
        .status(400)
        .json({ success: false, message: "Validation error", errors });
    }
    next();
  };
export default validate