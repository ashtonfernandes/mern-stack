const router = require('express').Router();

// Item model
const Item = require('../../models/Item');

// Endpoint to grab all the data from the database
// GET request
router.get('/', (req, res) => {
    // To learn about the find method: https://mongoosejs.com/docs/api.html#query_Query-find
    Item.find()
        .then(items => res.json(items))
})

// Endpoint to post data to the database
// POST request
router.post('/', (req, res) => {
    const itemToPost = new Item({
        name: req.body.name
    });
    // To learn about the save method: https://mongoosejs.com/docs/api.html#model_Model-save
    itemToPost.save()
        .then(item => res.json(item))
})

// Endpoint to delete data in the database
// DELETE request
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.remove()
                .then(() => res.json({ success: true }))
                // return 404 if not found
                .catch(err => res.status(404).json({ success: false }) )
        })

})

module.exports = router;