import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';
import { ThemeContext } from './ThemeContext';

const URL = 'https://64b391490efb99d8626809f5.mockapi.io/product';

const Dashboard = () => {
    const {theme} = useContext(ThemeContext)

    const [products, setListProduct] = useState([]);

    const getListProduct = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setListProduct(res.data);
        }
    }

    useEffect(() => {
        getListProduct();
    }, []);

    useEffect(() => {
        const newList = products.filter((item) => item.bestseller === true)
        console.log(newList);
        setListProduct(newList)
      }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a staff with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListProduct();
                toast.success("Deleted Successfully");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className="staff-table"  >
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW PRODUCT</button>
                </Link>
            </div>
            <table>
                <thead >
                    <tr style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>ID </th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Name</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Image</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Price</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Rating</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Description</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Category</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Best Seller</th>
                        <th style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt={product.id}/></td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td></td>
                            <td style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                                <Link to={`/update/${product.id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Dashboard;