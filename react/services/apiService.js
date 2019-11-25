/* global process */
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

const isDev = process.env.NODE_ENV === "development";

const usingDevServer = process.env.USE_DEV_SERVER === "true";

const shouldUseTestAPI = isDev && usingDevServer;

const baseURL = shouldUseTestAPI
  ? `http://localhost:${process.env.SERVER_PORT}/api`
  : `https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&jsoncallback=axiosJsonpCallback1`;

const axiosInstance = axios.create({
  baseURL,
  adapter: jsonpAdapter
});

export default axiosInstance;
