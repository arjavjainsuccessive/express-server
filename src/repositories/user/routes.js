const express = require('express');
const route = express.Router();
import UserRepository from './UserRepository';
import { seed } from '../../libs/seedData'
route.route('/')
.post(seed,UserRepository.create)
.delete(UserRepository.delete)
.put(UserRepository.update)
.get(UserRepository.find)
export default route;
