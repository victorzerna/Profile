import {API_BASE, HTTP_USER} from './../config';
import httpBase from './../http-base';


class HttpUser {

//metodo para retornar usuarios
    async getUsers (){
        try{
            const url = `${ API_BASE}${ HTTP_USER.getUsers }`
            const data = await httpBase.baseGet();
            return data;
        }catch(err){
            console.log(err);
        }
    }

    async getUserByToken (){
        try {
            const url = `${ API_BASE }${ HTTP_USER.getUser}`;
            let TOKEN = 'qxL4dpoDwlm1QpA06dewWfS1';
            const config = {
                headers: {
                    Authorization: `Bearer: ${ TOKEN }`
                }
            }
            const data = await httpBase.baseGet(url, config);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

}

export default new HttpUser;