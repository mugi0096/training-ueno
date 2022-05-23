import axios from "axios";

const getAllArticles = async (url: string): Promise<any> => {
    const results: any = await axios.get(url)
    return results.data
}

export default { getAllArticles };