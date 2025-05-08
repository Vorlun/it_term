import descQAService from "../services/descQA.service.js";

export const create = async (req, res, next) => {
  try {
    const result = await descQAService.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const result = await descQAService.update(req.params.id, req.body);
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "descQA not found" });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
