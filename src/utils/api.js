const API_ENDPOINT = "https://shoppingproducts.herokuapp.com";

class Api {

    
    /**POr medio de la ejecución de este metodo se obtiene una promesa
     * 
     */

    getProfile(){

        let promise = new Promise ( (resolve, reject) => {

            fetch(`${API_ENDPOINT}/users`)
            .then( response => response.json() )
            .then( data => resolve(data) )
            .catch( error => {
                //TODO
                //console.log('error JSON');
                //console.log(error);
                reject(error);
                }
            ) 
            .catch( error => reject(error) );
        });
        return promise;
    }


    async getProfileAwait(){
        try{
            const query = await fetch(`${API_ENDPOINT}/users`);
            const data = await query.json();
            return data;
        }catch( error  ){
            console.log(error);
        }
        

    }

}

export default new Api();