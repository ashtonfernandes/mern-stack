const router = require('express').Router();

// Item model
const Item = require('../../models/Item');

// Create
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

// Read
// Endpoint to grab all the data from the database
// GET request
router.get('/', (req, res) => {
    // To learn about the find method: https://mongoosejs.com/docs/api.html#query_Query-find
    Item.find()
        .then(items => res.json(items))
})

// Update
// Endpoint to update data in the database
// PUT request
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name || "Untitled Task"
        }, 
        {
            new: true
        })
    .then(() => res.json({ success: true }))
    // return 404 if not found
    .catch(err => res.status(404).json({ success: false }) )
})

// Delete
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