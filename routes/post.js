const router = require('express').Router()
const {Post} = require("../models/Post");

router.get("/", (req,res)=>{
    Post.find().exec((err,posts)=>{
        if(err) return res.status(400).json({succes:false,err});
        return res.status(200).json({succes:true, posts:posts})
    });
});

router.get("/detail/:id", (req, res) => {
    let id = req.params.id;
    Post.findById(id, function (err, post) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, post });
    });
});

// Obtener un Estudiante
router.route("/edit-student/:id").get((req, res, next) => {
    studentSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });


router.post("/add", (req,res) =>{
    const post = new Post(req.body);
    post.save((err)=>{
        if(err) return res.status(400).json({succes:false,err});
        return res.status(200).json({succes:true})
    })
});



router.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
        },
        (err, data) => {
        if (err) returnres.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
        }
    );
    });

router.delete("/delete/:id", (req, res) => {
    Post.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
        if (error) {
        res.send(error);
        }
        return res.json(deletedItem);
    });
    });

module.exports = router;