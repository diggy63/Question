const express = require('express');
const { requireAuth } = require('./middleware');
const multer = require("multer");
const upload = multer();
const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();
const { CatItem } = require('../database/schemas');


const router   = express.Router();

module.exports = router;


router.get('/', requireAuth, (req, res) => {
  CatItem.find({}, (err, items) => {
    if (err) {
      res.status(400).send({ message: 'Get items failed', err });
    } else {
      res.send({ message: 'Items retrieved successfully', items });
    }
  });
});

router.post('/', requireAuth, upload.single("photo"), (req, res) => {
  const filePath = `${uuidv4()}/${req.file.originalname}`;
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath,
    Body: req.file.buffer,
  };

  s3.upload(params, async function (err, data) {
    const newItem = CatItem({ ...req.body, photoUrl: data.Location });
    newItem.save((err, savedItem) => {
      if (err) {
        res.status(400).send({ message: 'Create Item failed', err });
      } else {
        console.log(savedItem)
        res.send({ message: 'Item created successfully', item: savedItem });
      }
    });
  });
  
});


router.delete('/', requireAuth, (req,res) =>{
  CatItem.findByIdAndRemove(req.body.id, err => {
    if(err){
      res.status(400).send({message: 'Delete Items Failed', err});
    }else {
      console.log("delete")
      res.send({ message: 'Item Deleted'})
    }
  })
})



