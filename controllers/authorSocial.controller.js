import authorSocialService from "../services/authorSocial.service.js";

export const create = async (req, res, next) => {
  try {
    const result = await authorSocialService.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const result = await authorSocialService.update(req.params.id, req.body);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "authorSocial not found" });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
