module.exports = (app) => {
  const event = require("../controllers/event.controller");
  let router = require("express").Router();

  router.get("/", event.findAll);
  router.get("/findEvent", event.findEventByID);
  router.get("/findStatus", event.findEventByStatus);
  router.post("/create", event.create);
  router.delete("/:id", event.deleteOne)
  router.delete("/delete", event.delete);
  router.put("/update", event.update);

  app.use("/api/event", router);
};

/*MARY'S NOTES FOR TESTING:
  WHEN "/create" USE THIS FORMAT:
  {
      "data": {
          "event_title": "festival",
          "event_desc": "I like festivals",
          "event_loc": "ur mom",
          "event_date": "2003-09-19",
          "no_of_reg": 9,
          "no_of_att": 19,
          "CES_points": 3
      }
  }
  I dunno why, but data has to be specified in this part, I'm guess it's cause of how I passed the
  params but ion know
  
  WHEN "/findEventDetail" && "/delete" USE THIS FORMAT AT 'body' WITH JSON FORMAT:
  {
      "event_detail_id": 1
  }
  The reason behind this is cause I passed id as a param within my function/method in the controller
  so yes you can't just do /findEventDetail/[event_detail_id]
  
  WHEN "/update" USE THIS FORMAT AT 'body' WITH JSON FORMAT:
  {
      "event_detail_id": 1,
      "event_detail": {
          // updated fields here
          "event_detail_id": 1,
          "event_title": "Updated Festival",
          "event_desc": "Updated description",
          "event_loc": "Updated location",
          "event_date": "2023-12-31",
          "no_of_reg": 20,
          "no_of_att": 50,
          "CES_points": 5
      }
  }
  The reason why it's like this is cause I passed both the id and the body data at the same time
  within my controller at the /update endpoint so yer
  */
