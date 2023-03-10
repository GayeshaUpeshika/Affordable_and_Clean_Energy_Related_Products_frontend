import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    marginHorizontal: 66,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#008000",
    paddingVertical: 10,
    borderRadius: 23,
  },

  button1:{
    paddingHorizontal: 4,
    marginHorizontal: 76,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#008000",
    paddingVertical: 10,
    borderRadius: 20,

  }
  ,

  textView: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "#00716F",
  },
  buttonText: {
    color: "white",

    fontSize: 20,
  },

  buttonText3:{
    color: "white",

    fontSize: 24,

  },


  button2:{
    paddingHorizontal: 12,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#50C878",
    paddingVertical: 10,
    borderRadius: 23,
  },

  textView1: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    height: 130,
    justifyContent: "flex-start",

    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "#00716F",
  },
 
});

export default commonStyles;
