import topicService from "../services/topic.service.js";

export const getAll = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 0;

    const totalItems = await topicService.count();
    const data = await topicService.getAll(limit, page);

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
    const topic = await topicService.getOne(req.params.id);

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "topic not found",
      });
    }

    res.status(200).json({
      success: true,
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const topic = await topicService.create(req.body);

    res.status(201).json({
      success: true,
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await topicService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "topic not found",
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
    const deleted = await topicService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "topic not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "topic deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
