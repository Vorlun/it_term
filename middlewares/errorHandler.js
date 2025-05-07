export function errorHandler(err, req, res, next) {
  console.error("ERROR:", err);

  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      type: "ValidationError",
      message: "Validation failed",
      errors,
    });
  }

  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({
      success: false,
      type: "CastError",
      message: "Invalid ID format",
    });
  }

  if (err.isJoi) {
    return res.status(400).json({
      success: false,
      type: "JoiValidationError",
      message: err.details?.[0]?.message || "Validation error",
    });
  }

  if (err.status && err.message) {
    return res.status(err.status).json({
      success: false,
      type: "CustomError",
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    type: "InternalServerError",
    message: "Something went wrong on the server",
  });
}

export default errorHandler;
