import guestModel from "../models/guest.model.js";
import { createCrudService } from "../lib/crudService.js";

const guestService = createCrudService(guestModel);

export default guestService;
