import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';


const createJob = async (req, res) => {
  const { position, company} = req.body
  if (!position || !company) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId;
  const job = await job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job });
}

const getAllJob = async (req, res) => {
  res.send('getAllJobs')
}

const updateJob = async (req, res) => {
  res.send('updateJobs')
}

const deleteJob = async (req, res) => {
  res.send('deleteJob')
}

const showStats = async (req, res) => {
  res.send('showStats')
}

export { createJob, getAllJob, updateJob, deleteJob, showStats }

