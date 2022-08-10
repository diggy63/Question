const express = require('express');
const { requireAuth } = require('./middleware');
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

router.post('/', requireAuth, (req, res) => {
  const newItem = CatItem(req.body);

  newItem.save((err, savedItem) => {
    if (err) {
      res.status(400).send({ message: 'Create Item failed', err });
    } else {
      res.send({ message: 'Item created successfully', item: savedItem });
    }
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



