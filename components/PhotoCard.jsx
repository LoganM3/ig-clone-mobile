
import { View, Image, Text, } from "react-native";
import { photCardStyles } from "../assets/styles";

function PhotoCard({ photo }){
    const BASE_URL = 'https://source.unsplash.com/random?sig='
    return (
      <>
        <View stsyle={photCardStyles.cardContainer}>
            <View style={photCardStyles.cardHeader}>
                {/* avatar */}

                <View style={photCardStyles.cardHeaderText}>
                    <Text> header text</Text>
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