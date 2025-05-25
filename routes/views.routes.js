import createViewPage from "../helpers/create_view_page.js";
import TopicModel from "../models/topic.model.js";
import DictModel from "../models/dict.model.js";
import Router from "express"
const router = Router()

router.get("/", (req, res) => {
  res.render(createViewPage("index"), {
    title: "Asosiy sahifa",
    isHome: true,
  });
});

router.get("/authors", (req, res) => {
  res.render(createViewPage("authors"), {
    title: "Mualliflar",
    isAuthor: true,
  });
});

router.get("/dictionary", async (req, res) => {
  let dictionaries = await DictModel.find();
  console.log(dictionaries);

  res.render(createViewPage("dictionary"), {
    title: "Lug'atlar",
    isDict: true,
    dictionaries,
  });
});

router.get("/topics", async (req, res) => {
  let topics = await TopicModel.find();
  console.log(topics);
  res.render(createViewPage("topics"), {
    title: "Maqolalar",
    isTopic: true,
    topics,
  });
});

router.get("/login", (req, res) => {
  res.render(createViewPage("login"), {
    title: "Tizimga kirish",
    isLogin: true,
  });
});


export default router