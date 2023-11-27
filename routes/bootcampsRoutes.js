const express = require('express')
const bootcampModel = require("../models/bootcampModel")
const router = express.Router()


router.get('/', async (req,res) => {
    //traigo todos los bootcamps
    const bootcamps = await bootcampModel.find()
    res.json({
        success:true,
        data: bootcamps
    })
})

//Traer bootcamp por id: 
router.get('/:id', async (req,res)=>{
    const bootcamp = await bootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data: bootcamp
    })
})

router.put ('/:id', async(req,res)=>{
    const updateBootcamp = await bootcampModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        success:true,
        data: updateBootcamp
    })
})

router.post ('/', async (req,res)=>{
    // Registar nuevo Bootcamp
    const newBootcamp = await bootcampModel.create(req.body)
    res.json({
        success:true,
        data: newBootcamp
    })
})

router.delete ('/:id', async(req,res)=>{
    const deleteBootcamp = await bootcampModel.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        data: deleteBootcamp
    })
})

module.exports = router