const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-action', courseController.handleFormAction);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.showDetail);

module.exports = router;
