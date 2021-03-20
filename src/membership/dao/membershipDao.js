import config from '../../config/config.json';
import axios from 'axios';

export const getMembership = (grade) => {
    let url = "/membership";

    return axios.get(config.SERVER_ENDPOINT + url, {params:{grade : grade}})
                .then((res) => {
                    if (grade != undefined){
                        for (const row_ in res.data.data){
                            if (res.data.data[row_]['grade'] == grade){
                                console.log(url,res.data.data[row_]['grade'])
                            }
                            else{
                                delete res.data.data[row_]   
                            }
                        }
                    }
                    return res.data.data
                }).catch((err) => {
                    console.log("API ERROR");
                });
}