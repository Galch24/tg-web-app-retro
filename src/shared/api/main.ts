import axios from 'axios';
import { API_URL, API_TOKEN } from "@/shared/config/env";

export const sendLead = async (data: { data: any }) => {
  try {
    const config = {
      method: 'post',
      url: `${API_URL}/leads`,
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data : data
    };

    const response = await axios(config)
    return response?.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}
