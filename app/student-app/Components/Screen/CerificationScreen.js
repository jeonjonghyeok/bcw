/*
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Header } from "react-native/Libraries/NewAppScreen";

export default class CertficationScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.header}>
        <Image
            style={{ height: "50%", width: "85%" }}
            source={require("../../assets/gkgkgk.jpg")}/>
      </View>
      <View style={style.content}>
        <Text>QR코드를 인식시켜주세요</Text>
        <QRCode logoSize={30} value="http://www.naver.com" />
      </View>

      </View>
      
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width:"100%",
    height:"40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  content: {
    flex:1,
    //width:"100%",
    //height:"50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
});
*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { TouchableHighlight } from "react-native-gesture-handler";
import logo from "../../assets/ayu_icon.png";

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "contain",
              maxHeight: 170,
            }}
            source={require("../../assets/gkgkgk.jpg")}
          />
        </View>
        <View style={style.content}>
          <QRCode logoSize={30} value="http://www.naver.com" />

          <Text style={{ fontSize: 20 }}>이름: 이재성</Text>
          <Text style={{ fontSize: 20 }}>학번:201532028</Text>
          <Text style={{ fontSize: 20 }}>학과: 정보통신공학</Text>
        </View>
      </View>
    );
  }
}
export default MainScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "30%",
    //backgroundColor:"green",
  },
  content: {
    //flexDirection:'row',
    width: "100%",
    height: "40%",
    //backgroundColor:"red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:"yellow",
  },

  tinylog: {},
});
