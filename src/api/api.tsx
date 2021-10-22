import * as axios from "axios";



export const UserAPI = {

    getUser(values) {
        axios.get('https://run.mocky.io/v3/e9207bc8-6236-4f2d-89f8-d8281e015468', values)
            .then(function (response) {
                console.log(response.config.email);
                console.log(response.config.password);
            })
    },


}