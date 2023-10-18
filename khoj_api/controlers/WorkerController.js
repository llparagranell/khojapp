const Worker = require('../models/WorkerRegistration');

exports.workerdata = async (req,res)=>{
    try {
        const worker = new Worker({
            name:req.body.name,
            email:req.body.email,
            number:req.body.number,
            category:req.body.category,
            gender:req.body.gender,
            city:req.body.city,
            state:req.body.state,
        })

        await worker.save();

        res.status(200).json('Worker Saved Succesfully !!!')
    } catch (error) {
        console.log(error);
    }
}
exports.getworker = async (req,res) => {
    try {
        const data = await Worker.find();
    res.send(data);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteworker = async (req, res) => {
    try {
      const { id } = req.params;
      await Worker.findByIdAndDelete(id);
      res.json("Worker Deleted Succesfully !!!");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  