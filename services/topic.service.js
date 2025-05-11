import topicModel from "../models/topic.model.js";
import { createCrudService } from "../lib/crudService.js";

const topicService = createCrudService(topicModel);

export default topicService;
