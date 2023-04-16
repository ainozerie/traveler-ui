import axios from 'axios';

export class AuthService {
    BOT_URL = 'https://telegraf-login-production.up.railway.app/';
    URL = 'https://traveler-production.up.railway.app/travelers';

    async sendToken(token) {
        let response = await axios.get(this.BOT_URL + 'auth/' + token);
        if (response.status == 200) {
            response.data.photo_url = decodeURIComponent(response.data.photoUrl)
            return response.data;
        } else {
            return null;
        } 
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
