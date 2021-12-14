const express = require('express');
const route = express.Router();
import UserRepository from './UserRepository';
import { seed } from '../../libs/seedData'
route.route('/')
.post(seed,UserRepository.create)
export default route;
