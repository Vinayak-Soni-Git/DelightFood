import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Modal,
    TextInput,
    FlatList,
    TouchableOpacity, Keyboard
} from "react-native";
import filter from 'lodash/filter'
import {Icon} from "react-native-elements";
import {useRef, useState} from "react";
import {useNavigation}   from "@react-navigation/native";
import * as Animatable from 'react-native-animatable'
import {filterData} from "../global/Data";

export default function SearchComponent(){

    const contains = ({name}, query)=>{
        return !!name.includes(query);
    }

    const handleSearch = (text)=>{
        const dataS = filter(filterData, user=>{
            return contains(user, text)
        })
        setData([...dataS])
    }

    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocused, setTextInputFocused]= useState(true)
    let textInput = useRef(0)
    const [searchInputValue, setSearchInputValue] = useState('');
    const [data, setData] = useState([...filterData])
    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={()=>{
                setModalVisible(true)
            }} >
                <View style={styles.searchArea} >
                    <Icon name={'search'}
                          type={'material'}
                          size={32}
                          iconStyle={{marginLeft:5}}
                    style={styles.searchIcon}/>
                    <Text style={styles.instructionText} >what are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
            animationType={'fade'}
            transparent={false}
            visible={modalVisible}>
                <View style={styles.modal} >
                    <View style={styles.inputFieldOuterContainer} >
                        <View style={styles.inputFieldInnerContainer} >
                            <Animatable.View
                            animation={textInputFocused ?'fadeInRight':'fadeInLeft'}
                            duration={200}>
                                <Icon name={textInputFocused?'arrow-back':'search'}
                                      onPress={()=>{
                                          if(textInputFocused) {
                                              setModalVisible(false)
                                              setTextInputFocused(false)
                                          }
                                      }}
                                      style={styles.searchOrArrowBackIcon}
                                type={'material'}/>
                            </Animatable.View>
                            <TextInput
                                ref={textInput}
                                style={styles.searchInput}
                                autoFocus={true} // Ensure keyboard opens
                                value={searchInputValue}
                                onChangeText={handleSearch}
                                onFocus={() => setTextInputFocused(true)}
                                onBlur={() => setTextInputFocused(false)}
                            />
                            <Animatable.View
                            animation={textInputFocused?'fadeInRight':''}
                            duration={200}>
                                <Icon name={textInputFocused?'cancel':null}
                                      onPress={()=>{
                                          textInput.current.clear()
                                          setSearchInputValue('')

                                      }}
                                      type={'material'}/>
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList data={data} renderItem={({item})=>(
                        <TouchableOpacity
                            onPress={()=>{
                                Keyboard.dismiss()
                                navigation.navigate('SearchResultScreen', {item:item.name})
                                setModalVisible(false)
                                setTextInputFocused(true)
                            }} >
                            <View style={styles.view2} >
                                <Text style={styles.searchItem}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )} keyExtractor={item=>item.id} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:5,
    },
    searchArea:{
        backgroundColor:'#d4e9f3',
        borderRadius:10,
        width:'80%',
        height:50,
        flexDirection:'row',
        padding:5,
        alignItems:'center',
    },
    instructionText:{
        color:'black',
        fontSize:15,
    },
    modal:{
        flex:1,
    },
    searchInput:{
        fontSize:16,

    },
    searchIcon:{
        fontSize:24,
        color:'grey',
    },
    inputFieldOuterContainer:{
        height:70,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center',
    },
    searchOrArrowBackIcon:{
        fontSize:24,
        color:'grey',
    },
    inputFieldInnerContainer:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    searchItem:{
        fontSize:15,
        color:'grey',

    }

})
