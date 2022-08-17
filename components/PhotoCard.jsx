
import { View, Image, Text, } from "react-native";
import { photCardStyles } from "../assets/styles";
import { Avatar} from "react-native-elements/dist/avatar/Avatar";

function PhotoCard({ photo }){
    const BASE_URL = 'https://source.unsplash.com/random?sheep='
    return (
      <>
        <View stsyle={photCardStyles.cardContainer}>
            <View style={photCardStyles.cardHeader}>
                {/* avatar */}
                <Avatar rounded size='small' source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}}/>

                <View style={photCardStyles.cardHeaderText}>
                    <Text> Header text</Text>
                    <Text style={photCardStyles.cardLocation}>Location</Text>
                </View>
            </View>
          
        </View>
        <Image source={{uri: BASE_URL + 1}} style={photCardStyles.cardImage}/>
        <Text style={photCardStyles.cardText}>Text here</Text>
      </>
    )
}


export default PhotoCard;