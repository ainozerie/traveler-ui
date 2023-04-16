import axios from 'axios';

export class AuthService {
    BOT_URL = 'https://telegraf-login-production.up.railway.app/';
    URL = 'https://traveler-production.up.railway.app/travelers';

    async sendToken(token) {
        let response = await axios.get(this.BOT_URL + 'auth/' + token);
        return response.data;
    }

    async approveUser(user) {
        let response = await axios.post(this.URL, {
            id: Number(user.id),
            firstname: user.first_name,
            surname: user.last_name,
            tgUsername: user.username,
            phoneNumber: '',
            photoUrl: decodeURIComponent(user.photo_url)
        });
        if (response.status == 200) {
            return response.data;
        } else {
            return null;
        } 
    }
}
