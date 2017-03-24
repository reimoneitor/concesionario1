/**
 * ClienteController
 *
 * @description :: Server-side logic for managing clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	connection: 'sqlserver',
	create: function(req, res, next)
	{
		Cliente.findOne({cedula: req.param('cedula')}).exec(function(err, resultado){
			if (resultado===undefined){
				var objeto = {
			//id_cli: req.param('id_cli'),
			cedula: req.param('cedula'),
			nombre: req.param('nombre'),
			correo: req.param('correo'),
			direccion: req.param('direccion'),
			telefono: req.param('telefono'),
			contrasena: req.param('contrasena')
		}
		//console.log(id_cli);
		Cliente.create(objeto, function clienteCreated(err,Admin)
		{
			if (err) return next(err);
			//res.redirect('/usuario/usuarioRegistrado/'+Usuario.IDUsuario);
		});
		function mandalo(a) 
		{
			Cliente.findOne({cedula: a}, function clienteMandalo(err,user)
			{
				if (err) return next(err);
				if (!Cliente) return next();
				//res.redirect('dashboard.ejs');
				//res.redirect('/usuario/usuarioRegistrado/'+user.IDUsuario);
			});
		}
		res.redirect('vehiculo/ver/'+req.param('cedula'));
		//res.redirect('/registrarVehiculo');
			}else{console.log("el cliente ya existe!"); res.redirect('/registrarCliente');}
		});
		//console.log("sdfgh");
		
		//localStorage.setItem("id_clie", req.param('id_cli'));
		//res.redirect('/Vehiculo/create/'+req.param('id_cli'));
	},

};

