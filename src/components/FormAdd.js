import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../css/formAddEdit.css';
import { ThemeContext } from './ThemeContext';


const URL = 'https://64b391490efb99d8626809f5.mockapi.io/product';

const initialState = {
    name: '',
    image: '',
    price: '',
    rating: '',
    description: '',
    category: '',
}

const error_init = {
    name_err: '',
    image_err: '',
    price_err: '',
    rating_err: '',
    description_err: '',
    category_err: '',
}
const FormAddEdit = () => {

    const {theme} = useContext(ThemeContext)

    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState(initialState);
    const { name, image, price, rating, description, category } = state;
    const [errors, setErrors] = useState(error_init);

    const getOneProduct = async (id) => {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            setState(res.data);
        }
    }

    useEffect(() => {
        if (id) getOneProduct(id);
    }, [id]);

    const updateProduct = async (productID, data) => {
        const res = await axios.put(`${URL}/${productID}`, data);
        if (res.status === 200) {
            toast.success(`Updated Product with ID: ${productID} successfully ~`);
            navigate('/dashboard');
        }
    }

    const addNewProduct = async (data) => {
        const res = await axios.post(`${URL}`, data);
        if (res.status === 200 || res.status === 201) {
            toast.success("New Product has been added successfully ~");
            navigate('/dashboard');
        }
    }

    // validate
    const validateForm = () => {
        let isValid = true;
        let errors = { ...error_init };

        if (name.trim() === '' || name.length < 2) {
            errors.name_err = 'Name is Required';
            if (name.length < 2) {
                errors.name_err = 'Name must be more than 2 words';
            }
            isValid = false;
        }

        if (image.trim() === '') {
            errors.image_err = 'Image is required';
            isValid = false;
        }

        if (isNaN(price) || parseInt(price) < 1 || price === '') {
            errors.price_err = 'Age must be a positive number and more than 0';
            isValid = false;
        }

        if (rating.trim() === '') {
            errors.rating_err = 'Rating is required';
            isValid = false;
        }
        if (description.trim() === '') {
            errors.description_err = 'Description is required';
            isValid = false;
        }
        if (category.trim() === '') {
            errors.category_err = 'Category is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id) updateProduct(id, state);
            else addNewProduct(state);
        } else {
            toast.error("Some info is invalid. Please check again");
        }
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value }));
    }

    return (
         <div className='container' style={{height: "80vh", backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="form" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                <h2 style={{backgroundColor: theme.backgroundColor, color: theme.color}}>{id ? "Update Form" : "Add New Product"}</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name='name' value={state.name} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.name_err && <span className='error'>{errors.name_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' value={state.image} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.image_err && <span className='error'>{errors.image_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" name='price' value={state.price} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.price_err && <span className='error'>{errors.price_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="rating">Rating: </label>
                        <input type="text" name='rating' value={state.rating} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.rating_err && <span className='error'>{errors.rating_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name='description' value={state.description} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.description_err && <span className='error'>{errors.description_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input type="text" name='category' value={state.category} onChange={handleInputChange} style={{backgroundColor: theme.backgroundColor, color: theme.color}}/>
                        {errors.category_err && <span className='error'>{errors.category_err}</span>}
                    </div>
                    <button  type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddEdit;


