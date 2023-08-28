import React from "react";
import {View} from "react-native";
import {Nav_bar} from "../components/nav_bar";
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {images_styles} from "../styles/image";

export class Map extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            init_position : {
                latitude: 48.994119156081254,
                longitude: 2.2246659661397366,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            pointer_position : [[48.994119156081254,2.2246659661397366,"Franconville",20]]
        }
    }

    render() {
        return(
            <View>
                <MapView
                    initialRegion={this.state.init_position}
                    style={images_styles.actual_picture} >
                    {
                        this.state.pointer_position.map((a,i)=>
                            <Marker
                                key={"mark-"+i.toString()}
                                coordinate={{latitude: a[0], longitude: a[1]}}
                                title={a[2]}
                                description={"nb alert : "+a[3].toString()}
                            />
                        )
                    }
                </MapView>
                <Nav_bar number_page={3} set_name={this.state.set_page_name}/>
            </View>
        )
    }
}
