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


router.put('/available', requireAuth, (req, res) => {
  CatItem.findById(req.body.id, (err,item) =>{
    if (err){
      res.status(400).send({ message: 'Toggle todo failed', err });
    }else{
      item.available = !item.available;
      item.save((err, savedItem) =>{
        if (err) {
          res.status(400).send({ message: 'Toggle todo failed', err });
        } else {
          res.send({ message: 'Item made available successfully', item: savedItem });
        }
      })
    }
    
  })
});


router.get('/', (req, res) => {
  console.log("here")
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
  console.log(params)

  s3.upload(params, async function (err, data) {
    console.log(data)
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



