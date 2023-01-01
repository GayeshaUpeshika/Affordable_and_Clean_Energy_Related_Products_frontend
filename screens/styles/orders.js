import { StyleSheet } from "react-native";
import Colors from "./Colors";

const orderStyles = StyleSheet.create({
  orderCard: {
   
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#98FB98',
    borderRadius: 12
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6
  },
  title:{
fontSize:29,
    textAlign: "center",
    color:"#008000",
    marginBottom:"4%",

  },
  inputserach:{
    backgroundColor:'white',
    shadowColor:'black',
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.1,
    elevation:3,
    borderRadius:40,
    padding:10,
    marginTop:10,
    width:310,
    justifyContent:'center',
    alignItems:'center'

  }
  ,

  orderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#008080",
    borderRadius: 12,
    padding: 4,
  },
  ordersID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#FFA500",
    borderRadius: 12,
    padding: 4,
  },
  orderssID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#C70039",
    borderRadius: 12,
    padding: 4,
  },
  oorderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: "#18ABC8",
    borderRadius: 12,
    padding: 4,
  },
  status: {
    marginVertical: 2,
    color: "white",
    textAlign: "center"
  },
  ok: {
    backgroundColor: "#196e02",
    borderRadius: 12
  },
  declined: {
    backgroundColor: "#820101",
    borderRadius: 12
  },
  pending: {
    backgroundColor: "#997603",
    borderRadius: 12
  }
});

export default orderStyles;
