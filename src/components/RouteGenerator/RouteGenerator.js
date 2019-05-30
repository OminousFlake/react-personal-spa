import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import s from './RouteGenerator.module.css'

const mapState = {
    center: [55.751574, 37.618960],
    zoom: 11,
    controls: []
};

class RouteGenerator extends React.Component {
    state = {
        address: [],
        route: null
    };

    randomiseCoordinates = (min, max) =>  {
        return  min + Math.random() * (max - min);
    };

    setEasy = () => {
        this.state.address = [
            [this.randomiseCoordinates(55.72, 55.77), this.randomiseCoordinates(37.58, 37.63)],
            [this.randomiseCoordinates(55.72, 55.77), this.randomiseCoordinates(37.58, 37.63)]
        ];
        this.updateRoute(this.state.address);
    };

    setMedium = () => {
        this.state.address = [
            [this.randomiseCoordinates(55.70, 55.79), this.randomiseCoordinates(37.56, 37.65)],
            [this.randomiseCoordinates(55.70, 55.79), this.randomiseCoordinates(37.56, 37.65)]
        ];
        this.updateRoute(this.state.address);
    };

    onYmapsLoad = ymaps => {
        this.ymaps = ymaps;
    };

    updateRoute = address => {
        if (this.state.route) {
            this.map.geoObjects.remove(this.state.route);
        }
        this.setState(
            {
                address,
                route: null
            },
            () => {
                const address = this.state.address;
                if (address.length > 1) {
                    console.log(this.ymaps);
                    this.ymaps
                        .route(address, {
                            mapStateAutoApply: true,
                            routingMode: 'pedestrian',
                            multiRoute: true
                        })
                        .then(
                            route => {
                                this.map.geoObjects.add(route);
                                this.setState({ route });
                            },
                            error => alert(error.message)
                        );
                }
            }
        );
    };

    render() {
        return (
            <div className={s.container}>
                <div className={s.difficulties}>
                    <p>Случайный маршрут по Москве!</p>
                    <div className={s.buttons}>
                        <button onClick={this.setEasy}>Легкий</button>
                        <button onClick={this.setMedium}>Средний</button>
                    </div>
                </div>
                <div className={s.container}>
                    <p>Удачи в новом маршруте!</p>
                    <YMaps query={{ load: "package.full" }}>
                        <Map
                            state={mapState}
                            onLoad={this.onYmapsLoad}
                            instanceRef={map => (this.map = map)}
                            className={s.map}
                        />
                    </YMaps>
                </div>
            </div>
        );
    }
}

export default RouteGenerator;

