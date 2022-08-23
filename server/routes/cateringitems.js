const express = require('express');
const { requireAuth } = require('./middleware');
const { CatMenuItems } = require('../database/schemas');


const router   = express.Router();

module.exports = router;


router.get('/', (req, res) => {
    console.log("finding")
    CatMenuItems.find({}, (err, catItems) => {
      if (err) {
        res.status(400).send({ message: 'Get items failed', err });
      } else {
        res.send({ message: 'Items retrieved successfully', catItems });
      }
    });
  });

router.post('/', requireAuth, (req, res) => {
    console.log("posting")
    const newItem = CatMenuItems(req.body)
    newItem.save((err,savedItem) =>{
        if(err){
            res.status(400).send({message:'Create Catering Item Failed'});
        }else{
            res.send({message: 'Catering Item Created', catItem: savedItem});
        }
    })
  });
  
router.delete('/', requireAuth, (req,res) => {
    CatMenuItems.findByIdAndDelete(req.body.id, err =>{
      if(err){
        res.status(400).send({message: 'Delete Items Failed', err});
      }else {
        console.log("delete")
        res.send({ message: 'Item Deleted'})
      }
    })
})

router.put('/', requireAuth, (req,res) => {
  CatMenuItems.findById(req.body.id, (err,item) =>{
    if(err){
      res.status(400).send({message: 'Catering Item Not found', err});
    }else {
      item.name = req.body.name
      item.description = req.body.description
      item.price = req.body.price
      item.category = req.body.category
      item.save((err,savedItem) => {
        if (err) {
          res.status(400).send({ message: 'item failed to change', err });
        } else {
          res.send({ message: 'Item changed', item: savedItem });
        }
      })
    }
  })
})