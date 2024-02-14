import React, { useState } from 'react';
import '../organism/style/Login.css';
import '../atoms/img'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<div className='main'>
			<Formik
				initialValues={{
					correo: '',
					contraseña: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion correo
					if (!valores.correo) {
						errores.correo = 'Por favor ingresa un correo';
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
						errores.correo = 'El Correo solo puede contener letras y espacios';
					}

					// Validacion contraseña
					if (!valores.contraseña) {
						errores.contraseña = 'Por favor ingresa una contraseña';
					} else if (!/^[a-zA-Z0-9_.+-]+$/.test(valores.contraseña)) {
						errores.contraseña = 'La contraseña solo puede contener letras, números, puntos, guiones y guion bajo.';
					}

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{({ errors }) => (
					 

					<Form className="formulario"  > 

					<div className='arriba'>
					<img className='img' src="https://i.imgur.com/EdH0Gr8.png" alt="" />
					<p>iniciar sesion</p>
					<p>¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta.</p>
					</div>

						
						<div className="container">
						<div  className='campo'>
							<label htmlFor="correo">Correo Electrónico</label>
							<Field
								type="text"
								id="correo"
								name="correo"
								placeholder="Correo Electrónico" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
						<div className='campo'>
							<label  htmlFor="contraseña">Contraseña</label>
							<Field 
								type="password"
								id="contraseña"
								name="contraseña"
								placeholder="Contraseña"
							/>
							<ErrorMessage name="contraseña" component={() => (<div className="error">{errors.contraseña}</div>)} />
						</div>
						<button className='enviar' type="submit">Iniciar sesion</button>
						<button className='google '>
							 iniciar sesion con google</button>

						{formularioEnviado && <p className="exito">Se inicio sesion con éxito!</p>}
						</div>

					
					</Form>
				)}
				
			</Formik>
		</div>
	);
}

export default Login;