import { Alert, FlatList, Image, ImageBackground, Text, View } from "react-native";
import { Filme, useFilmes } from "../../hooks/globalContext";
import { styles } from ".././favoritos/style";
import image from '../../assets/image.png'

export default function Favoritos() {
    const { filmes} = useFilmes();

    return(
        <View style={styles.containerPrincipal}>
          <ImageBackground source={image} style={styles.background}>
        
            <FlatList
            data={filmes}
            renderItem={({ item }) => (
                <>
                    <Text style= {styles.tituloFilme}>{item.Title}</Text>
                    <Image 
                        source={{ uri: item.Poster}}
                        style={styles.bordaFilmes}
                    />
                </>
            )}
            keyExtractor={item => item.imdbID}
            />
        </ImageBackground>
        </View>
    )

}


