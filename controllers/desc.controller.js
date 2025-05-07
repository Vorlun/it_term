import descService from "../services/desc.service.js";

export const getAll = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = parseInt(req.query.limit) || 10;

    const totalItems = await descService.count();
    const data = await descService.getAll(limit, page);

    res.status(200).json({
      success: true,
      meta: {
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
        limit,
      },
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const desc = await descService.getOne(req.params.id);

    if (!desc) {
      return res.status(404).json({
        success: false,
        message: "desc not found",
      });
    }

    res.status(200).json({
      success: true,
      data: desc,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const desc = await descService.create(req.body);

    res.status(201).json({
      success: true,
      data: desc,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await descService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "desc not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await descService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "desc not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "desc deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
