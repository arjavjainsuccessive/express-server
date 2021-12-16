const express = require('express');
const route = express.Router();
import UserRepository from './UserRepository';
import { seed } from '../../libs/seedData'
route.route('/create')
.post(seed,UserRepository.create)
route.route('/')
.put(UserRepository.update)
.get(UserRepository.find)
route.route('/:id')
.delete(UserRepository.delete)
.get(UserRepository.find)
export default route;
