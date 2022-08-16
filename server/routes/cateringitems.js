const express = require('express');
const { requireAuth } = require('./middleware');
const { CatMenuItems } = require('../database/schemas');


const router   = express.Router();

module.exports = router;


router.get('/', (req, res) => {
    CatMenuItems.find({}, (err, catItems) => {
      if (err) {
        res.status(400).send({ message: 'Get items failed', err });
      } else {
        res.send({ message: 'Items retrieved successfully', catItems });
      }
    });
  });

router.post('/', requireAuth, (req, res) => {
    console.log(req.body)
    const newItem = CatMenuItems(req.body)
    newItem.save((err,savedItem) =>{
        if(err){
            res.status(400).send({message:'Create Catering Item Failed'});
        }else{
            console.log(savedItem)
            res.send({message: 'Catering Item Created', catItem: savedItem});
        }
    })
  });
  