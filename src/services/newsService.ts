import { authInstance } from "../utils/axios";

export class NewsService {
    constructor() {

    }

    /**
     * 
     * @param values 
     * @returns 
     */
  

    getNews = async () => {
        try {
const res = await authInstance.get("/api/news/");
        
            return res.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            
            console.log("An error occurred registering: ", error);
            throw Error(error?.error)
        }
    }



    getDetailedNews = async (id:string) => {
        try {
const res = await authInstance.get(`/api/news/${id}`);
        
            return res.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            
            console.log("An error occurred registering: ", error);
            throw Error(error?.error)
        }
    }


}