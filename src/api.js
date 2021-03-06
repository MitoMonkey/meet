import { mockData } from './mock-data_OLD'; // only 2 events
// import { mockData } from './mock-data'; // many events
import axios from 'axios';
import NProgress from 'nprogress';

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    
    // Check if accessToken is truthy, then set the value of tokenCheck to the result of `await checkToken(accessToken);`. 
    // If accessToken is falsy, set tokenCheck to false
    const tokenCheck = accessToken && (await checkToken(accessToken)); 

    if (!accessToken || tokenCheck.error) {
        localStorage.removeItem("access_token"); // removed "await"
        const searchParams = new URLSearchParams(window.location.search);
        const code = await searchParams.get("code");
        if (!code) {
            const results = await axios.get(
                "https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
            );
            const { authUrl } = results.data;
            return (window.location.href = authUrl);
        }
        return code && getToken(code); // run `getToken(code)` only if `code` is truthy (meaning it is not undefined), otherwise return "false"
    }
    return accessToken;
}
export const checkToken = async (accessToken) => {
    const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
        .then((res) => res.json())
        .catch((error) => error.json());
    return result;
};
const getToken = async (code) => {
    const encodeCode = encodeURIComponent(code);
    const { access_token } = await fetch(
        'https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/token/' + encodeCode
    )
        .then((res) => {
            return res.json();
        })
        .catch((error) => error);
    access_token && localStorage.setItem("access_token", access_token); // only setItem when access_token is truthy
    return access_token;
};

const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
        var newurl =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname;
        window.history.pushState("", "", newurl);
    } else {
        newurl = window.location.protocol + "//" + window.location.host;
        window.history.pushState("", "", newurl);
    }
};

export const getEvents = async () => {
    NProgress.start(); // show progressbar (see also nprogress.css)

    if (window.location.href.startsWith("http://localhost")) {
        NProgress.done();
        return mockData;
    }

    // check if the device is online, if it isn't, load data from localStorage
    if (!navigator.onLine) {
        const data = localStorage.getItem("lastEvents");
        NProgress.done();
        return data ? JSON.parse(data).events : [];
    }
    // if online, get the events from the calender API
    const token = await getAccessToken();
    if (token) {
        removeQuery(); // remove the "code" from the URL
        const url = 'https://g1ky253yw7.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/' + token;
        const result = await axios.get(url);
        if (result.data) {
            var locations = extractLocations(result.data.events);
            localStorage.setItem("lastEvents", JSON.stringify(result.data)); // JSON.stringify(events) is necessary because events is a list, but localStorage can only store strings.
            localStorage.setItem("locations", JSON.stringify(locations));
        }
        NProgress.done();
        return result.data.events;
    }
};

/**
 * @param {*} events: // = function takes a single param of any type (*) with the name events
 * remove all duplicates by creating another new array using the spread operator (...) and spreading a Set.
 */
export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};