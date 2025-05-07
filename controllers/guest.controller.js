import guestService from "../services/guest.service.js";

export const getAll = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = parseInt(req.query.limit) || 10;

    const totalItems = await guestService.count();
    const data = await guestService.getAll(limit, page);

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
    const guest = await guestService.getOne(req.params.id);

    if (!guest) {
      return res.status(404).json({
        success: false,
        message: "guest not found",
      });
    }

    res.status(200).json({
      success: true,
      data: guest,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const guest = await guestService.create(req.body);

    res.status(201).json({
      success: true,
      data: guest,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await guestService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "guest not found",
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
    const deleted = await guestService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "guest not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "guest deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
