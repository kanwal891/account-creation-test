import axios from "axios";

const requestApi = async (
  endpoint: string,
  method = "GET",
  data = {},
  contentType = "application/json",
): Promise<any> => {
  try {
    let response: any = {};
    response = await axios({
      method: method,
      url: `${process.env.REACT_APP_API_BASE_URL}${endpoint}`,
      data: data,
      headers: { "Content-Type": contentType },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default requestApi;
