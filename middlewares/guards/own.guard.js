export const ownGuard = (resourceField = "_id") => {
  return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Avtorizatsiya talab qilinadi" });
    }

    const resourceId = req.params.id;
    if (req.user.id !== resourceId && !req.user.isCreator) {
      return res
        .status(403)
        .json({ success: false, message: "Bu amalni bajarishga ruxsat yoq" });
    }

    next();
  };
};
