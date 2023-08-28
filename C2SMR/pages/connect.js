import React from "react";
import {Image, View, Text, Dimensions, TextInput, Pressable} from "react-native"
import {images_styles} from "../styles/image";
import {text_styles} from "../styles/text";
import {settings_styles} from "../styles/settings";
import {container_styles} from "../styles/container";
import {color_blue_dark} from "../styles/colors";
import * as Linking from "expo-linking";
import {Icon_text_button} from "../components/icon_text_button";
import {storeData} from "../modules/data";

export class Connect extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.set_name = set_name;
        this.url_picture = "https://inspiranium.fr/cdn/174.png";
        this.state = {
            email : "",
            password :""
        }
    }

    not_visible_password() {
        let password_none = "";
        for (let i = 0 ; i < this.state.password.length ; i++) {
            password_none += "*";
        }
        return password_none;
    }

    render() {
        return(
            <View>
                <Image
                    style={images_styles.actual_picture}
                    source={{
                        uri: this.url_picture,
                    }}
                ></Image>


                <View style={[settings_styles.flex_container,{width : Dimensions.get("window").width ,position : "absolute", top : Dimensions.get("window").height * .3}]}>
                    <Text style={[settings_styles.basic_font,text_styles.title]}>WELCOME TO C2SMR</Text>
                </View>

                <View style={{position : "absolute", top : Dimensions.get("window").height * .9}}>
                        <Icon_text_button text={"Contact"} icon={"mail-outline"} color={color_blue_dark} action={()=>{
                            Linking.openURL('mailto:victordalet@protonmail.com').then(r => console.log(r))
                        }}/>
                </View>


                <View style={[settings_styles.flex_container_column,container_styles.connect_card]}>
                    <View style={[container_styles.input]}>
                        <TextInput onChangeText={(letter)=>{this.setState({email : letter })}} value={this.state.email}
                                   keyboardType={"email"}
                                   placeholder={'email'}/>
                    </View>
                    <View style={[container_styles.input]}>
                        <TextInput onChangeText={(letter)=>{this.setState({password : letter})}}
                                   value={this.not_visible_password()}
                                   keyboardType={"visible-password"}
                                   placeholder={'password'}/>
                    </View>
                    <View style={{height : 20}}></View>
                    <Pressable
                        style={[settings_styles.flex_container,container_styles.connect_btn]}
                        onPress={()=> {
                            storeData("password-c2smr", this.state.password).then();
                            storeData("email-c2smr-", this.state.email).then(()=> {
                                setTimeout(()=>{
                                    this.set_name("home");
                                },200)
                            });
                        }}>
                        <Text style={[settings_styles.basic_font,text_styles.connect_text]}>Se connecter</Text>
                    </Pressable>
                </View>

            </View>
        );
    }

}
