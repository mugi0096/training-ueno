import axios from "axios";

const getOneArticle = async (url: string): Promise<any> => {
    const results: any = await axios.get(url)
    return results.data
}

export default { getOneArticle };
