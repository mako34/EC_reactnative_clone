import React from 'react'
import{
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons';

const Button = ({title, color})=>(
    <TouchableOpacity style={[styles.button,{backgroundColor:color}]}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
)

export default class Favorite extends React.Component{
    state={
        menus:[
            {icon:'ios-menu', title:'Menu'},
            {icon:'ios-call', title:'Call us'},
            {icon:'ios-pin', title:'Find Us'},
            {icon:'ios-heart', title:'Favorite'},
        ]
    }
    componentWillMount() {
        this.props.navigation.setParams({
            leftTitle:'Back',
            rightTitle:'Share',
            onRight:()=>alert('share')
        });
    }
    render(){
        let {menus} = this.state
        let {title, location, duration, image} = this.props.item
        return(
            <View style={styles.container}>
                <Image 
                    source={{uri:image}}
                    style={styles.image}
                />
                <View style={styles.headerContainer}>
                    {menus.map((menu, index)=><TouchableOpacity key={index} style={styles.itemContainer}>
                        <Ionicons name={menu.icon} size={24} color="black"/>
                        <Text style={styles.menuText}>{title}</Text>
                    </TouchableOpacity>)}
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>Australian, Bar, Burgers Contemporary, Steak, Vegtarian, Bar Eats, $$</Text>
                <View style={styles.detailContainer}>
                    <View style={styles.row}>
                        <Feather name="clock" size={20} color='#999'/>
                        <Text style={styles.detailText}>{duration}</Text>
                    </View>
                    <View style={{height:8}}/>
                    <View style={styles.row}>
                        <Feather name="map-pin" size={20} color='#999'/>
                        <Text style={styles.detailText}>{location}</Text>
                    </View>
                </View>
                <Text style={styles.offText}>20% Off</Text>
                <Text style={styles.redText}>The Total Bill Incl. Drinks</Text>
                <View style={styles.bottomContainer}>
                    <Button color='rgb(223, 32, 10)' title="Dina in"/>
                    <View style={{width:15}}/>
                    <Button color='#777' title="Take away"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:'100%',
        height:180
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:60,
        justifyContent:'space-between',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#ccc'
    },
    itemContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    menuText:{
        fontSize:10,
        color:'#333'
    },
    title:{
        fontSize:20,
        color:'#333',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:15
    },
    desc:{
        fontSize:13,
        color:'#777',
        textAlign:'center',
        margin:15
    },
    detailContainer:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#ccc',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:'#ccc',
        padding:15
    },
    offText:{
        fontSize:24,
        color:'rgb(223,32,10)',
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10
    },
    redText:{
        fontSize: 14,
        fontWeight:'bold',
        color:'rgb(223,32,10)',
        textAlign:'center'
    },
    bottomContainer:{
        flexDirection:'row',
        paddingHorizontal:15,
        marginTop:10
    },
    button:{
        height:40,
        flex:1,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        color:'white'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    detailText:{
        fontSize:13,
        color:'#777',
        marginLeft:10
    }
})