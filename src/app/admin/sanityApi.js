import axios from 'axios';

const SANITY_API_URL = 'https://kam826o7.apicdn.sanity.io/v2025-01-26/data/query/production';
const SANITY_API_TOKEN = 'YOUR_SANITY_API_TOKEN'; // Replace with your actual token

export const fetchOrders = async () => {
  try {
    const response = await axios.get(SANITY_API_URL, {
      params: {
        query: '*[_type == "order"]',
        returnQuery: false,
      },
      headers: {
        Authorization: `Bearer ${SANITY_API_TOKEN}`,
      },
    });

    return response.data.result; // Returns the list of orders
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    throw error; // Re-throw error for handling in the component
  }
};
