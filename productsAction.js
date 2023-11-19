import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice';
export const getProducts = async (dispatch) =>{

    try{
       dispatch(productsRequest())
       const { data } = await axios.get('/api/v1/admin/product/new'); 
       dispatch(productsSuccess(data))
    } catch(error){
       dispatch(productsFail(error.response.data.message))
    }
}