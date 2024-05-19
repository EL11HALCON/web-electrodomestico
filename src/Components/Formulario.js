import React, { useState } from 'react';
import "../App.css";  

const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    avatar: 'https://picsum.photos/800'
                })
            });
    
            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }
    
            const responseData = await response.json();
            const userId = responseData.id;
            const role = responseData.role;
    
          
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                address: ''
            });
    
            
            alert(`Cliente registrado con éxito. El número de cliente es ${userId}, y su rol es ${role}`);
        } catch (error) {
            alert('Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.');
            console.error(error);
        }
    };
    return (
        <div className="form_container_contact">
            <div className="form_header">
                <h1 className="form_title">Registrar usuario</h1>
            </div>
            <div className="form_body">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label className="form_label">NOMBRE:</label>
                        <div className="form_input-ico">
                            <input
                                type="text"
                                className="form_input"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form">
                        <label className="form_label">CORREO:</label>
                        <div className="form_input-ico">
                            <input
                                type="email"
                                className="form_input"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form">
                        <label className="form_label">CONTRASEÑA:</label>
                        <div className="form_input-ico">
                            <input
                                type="password"
                                className="form_input"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form">
                        <label className="form_label">CONFIRMAR CONTRASEÑA:</label>
                        <div className="form_input-ico">
                            <input
                                type="password"
                                className="form_input"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form">
                        <label className="form_label">DIRECCION:</label>
                        <div className="form_input-ico">
                            <input
                                type="text"
                                className="form_input"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form">
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;