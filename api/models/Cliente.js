/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'sqlserver',
  attributes: {
  	id_cli:{
  		type: 'integer',
      primaryKey: true,
  		autoIncrement: true,
  		notNull: true
  	},
  	cedula:{
  		type: 'string',
  		notNull: true,
  		size: 20,
  		required: true
  	},
  	nombre: {
  		type: 'string',
  		notNull: true,
  		size: 20,
  		required: true
  	},
  	correo: {
  		type: 'string',
  		notNull: true,
  		size: 20,
  		required: true
  	},
  	direccion:{
  		type: 'string',
  		notNull: true,
  		size: 50,
  		required: true
  	},
  	telefono: {
  		type: 'string',
  		notNull: true,
  		size: 20,
  		required: true
  	},
    contrasena: {
      type: 'string',
      notNull: true,
      size: 20,
      required: true
    }
  }
};

