import qaService from "../services/qa.service.js";

export const getAll = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = parseInt(req.query.limit) || 10;

    const totalItems = await qaService.count();
    const data = await qaService.getAll(limit, page);

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
    const qa = await qaService.getOne(req.params.id);

    if (!qa) {
      return res.status(404).json({
        success: false,
        message: "qa not found",
      });
    }

    res.status(200).json({
      success: true,
      data: qa,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const qa = await qaService.create(req.body);

    res.status(201).json({
      success: true,
      data: qa,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await qaService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "qa not found",
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
    const deleted = await qaService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "qa not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "qa deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
