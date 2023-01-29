import axios from 'axios';

export class AuthService {
    URL = 'https://telegraf-login-production.up.railway.app/';

    async sendToken(token) {
        let response = await axios.get(this.URL + 'auth/' + token);
        return response.data;
    }
}
