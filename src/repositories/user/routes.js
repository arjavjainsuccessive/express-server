const express = require('express');
const route = express.Router();
import UserRepository from './UserRepository';
route.route('/create')
.post(UserRepository.create)
route.route('/')
.get(UserRepository.find)
route.route('/:id')
.put(UserRepository.update)
.delete(UserRepository.delete)
.get(UserRepository.find)
export default route;
