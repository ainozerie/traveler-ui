import axios from 'axios';

export class AuthService {
    BOT_URL = 'https://telegraf-login-production.up.railway.app/';
    URL = 'https://traveler-production.up.railway.app/travelers';

    async sendToken(token) {
        let response = await axios.get(this.BOT_URL + 'auth/' + token);
        return response.data;
    }

    async approveUser(user) {
        // "{"id":993214357,"first_name":"Sergei","last_name":"Ainozerov","username":"ainozerie","token":"1681591281487","photo_url":"AgACAgIAAxUAAWQ5cI6icTMZKEllr3C3hOEvwuPDAALNpzEblT8zO_wCitBepbZZAQADAgADYQADLwQ"}"

        let response = await axios.post(this.URL, {
            id: Number(user.id),
            firstname: user.first_name,
            surname: user.last_name,
            tgUsername: user.username,
            phoneNumber: '',
            photoUrl: user.photo_url
        });
        return response.data;
    }


}
