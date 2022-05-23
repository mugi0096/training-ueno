import axios from "axios";

const updateArticle = async (url: string): Promise<any> => {
    const results: any = await axios.get(url)
    return results
}

export default { updateArticle };
