import { Alert, FlatList, Image, ImageBackground, Text, View } from "react-native";
import { Filme, useFilmes } from "../hooks/globalContext";
import { styles } from "./style";
import image from '../assets/image.png'

export default function Favoritos() {
    const { filmes} = useFilmes();

    return(
        <View style={styles.containerPrincipal}>
          <ImageBackground source={image} style={styles.background}>
        
            <FlatList
            data={filmes}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.Title}</Text>
                    <Image 
                        source={{ uri: item.Poster}}
                        style={{ width: 270, height: 410, top: 70 }}
                    />
                </View>
            )}
            keyExtractor={item => item.imdbID}
            />
        </ImageBackground>
        </View>
    )

}


