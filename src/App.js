import './App.css';
import {useEffect} from "react";

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개난 다른곳)
// 4. 도시버튼을 클릭할때마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const getCurrentLocation = () => {
        console.log('getCurrentLocation');
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat, lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    }

    const getWeatherByCurrentLocation = async (lat, lon) => {
        console.log(API_KEY)
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        let response = await fetch(url);
        const data = await response.json();
        console.log(data);

    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div>
            HI!
        </div>
    );
}

export default App;
