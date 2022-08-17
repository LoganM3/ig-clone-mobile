import { loginStyles } from "../assets/styles";
import { View,Text} from "react-native";
import { Button, Input } from "react-native-elements";

function Login(){
    return (
        <View style={loginStyles.container}>
            <Input placeholder="Email" 
            keyboardType="email-address" 
            autoCapitalize={false}
            autoCorrect={false}
            />
            <Input placeholder="Password" secureTextEntry={true} />
            <Button title="Submit" />
        </View>
    )
}
 
export default Login;