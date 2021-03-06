const express = require('express')
const Guide = require('../models/guide')
const guideRouter = express.Router()

guideRouter.route('/')
    .get((req,res,next) => {
        Guide.find()
            .then(guideCollection => res.status(200).send(guideCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req,res,next) => {
        const guideData = req.body;
        const guideDoc = new Guide(guideData)
        guideDoc.save()
            .then(savedGuideDoc => res.status(201).send(savedGuideDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
guideRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Guide.findById(id)
            .then(foundGuide => res.status(200).send(foundGuide))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Guide.findByIdAndDelete(id)
            .then(() => res.status(204).send("Delete successful"))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Guide.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedguide => res.status(200).send(updatedguide))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

module.exports = guideRouter
