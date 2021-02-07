import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Switch,
	Button,
	TouchableHighlight,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/DesignConstants';
import { RadioButton } from 'react-native-paper';

export default class App extends React.Component {

	state = {
		checked: 'first',
	};
	render() {
		   		const { checked } = this.state;
		return (
			<View backgroundColor="white">
				<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
					<View style={styles.Naslov}>
						<Text style={styles.settingsText}>Dodaj/ukloni/uredi</Text>
						<Text style={styles.settingsTextName}>predložak odgovora</Text>
					</View>

					<View style={styles.marginaSlikeIokvir1}>
						<View style={styles.margineTeksta1}>
							<View style={styles.radioButton}>
								<RadioButton
									value="first"
									status={checked === 'first' ? 'checked' : 'unchecked'}
									onPress={() => {
										this.setState({ checked: 'first' });
									}}
								/>
							</View>
							<Text style={styles.tekstIzbornika}> Predložak 1</Text>
							<View>
								<View style={styles.arrow}>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('Templates')}>
										<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.marginaSlikeIokvir2}>
						<View style={styles.margineTeksta2}>
							<View style={styles.radioButton2}>
								<RadioButton
									value="first"
									status={checked === 'first' ? 'checked' : 'unchecked'}
									onPress={() => {
										this.setState({ checked: 'first' });
									}}
								/>
							</View>
							<Text style={styles.tekstIzbornika}> Predložak 2</Text>
							<View style={styles.arrow}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Templates')}>
									<MaterialIcons name="arrow-forward-ios" size={25}></MaterialIcons>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
				<View style={styles.txtButtonIcon}>
					<View style={styles.btn1}>
						<TouchableHighlight style={styles.btnBorder1}>
							<MaterialCommunityIcons name="plus" size={23}></MaterialCommunityIcons>
						</TouchableHighlight>
						<TouchableHighlight>
							<Text style={styles.btnText1}>DODAJ</Text>
						</TouchableHighlight>
					</View>

					<View style={styles.btn2}>
						<TouchableHighlight style={styles.btnBorder2}>
							<IonIcon name="trash" size={20} />
						</TouchableHighlight>
						<TouchableHighlight>
							<Text style={styles.btnText2}>OBRIŠI</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 290,
  },
  Naslov: {
    width: "80%",
  },
  mainView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsText: {
    fontSize: 30,
    fontWeight: "normal",
  },
  settingsTextName: {
    fontSize: 30,
    fontWeight: "700",
    bottom: 7,
  },
  tekstIzbornika: {
    fontWeight: "bold",
    fontSize: 18,
    left: 28,
    top: -5,
  },
  margineTeksta1: {
    marginBottom: 187,
    marginTop: 0,
    marginLeft: 12,
    bottom: -61,
  },
  margineTeksta2: {
    marginBottom: 40,
    marginTop: 0,
    marginLeft: 12,
    bottom: 11,
  },
  marginaSlikeIokvir1: {
    //marginBottom: 40,
    marginTop: 125,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 50,
  },
  marginaSlikeIokvir2: {
    //marginBottom: 40,
    marginTop: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "grey",
    height: 40,
    justifyContent: "center",
    bottom: 120,
  },
  txtButtonIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn1: {
    right: 60,
    bottom: 25,
  },
  btn2: {
    right: 24,
    bottom: 25,
  },
  btnBorder1: {
		top: 35,
		borderColor: colors.black,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '285%',
		height: '22%',
	},
	btnBorder2: {
		top: 35,
		borderColor: colors.black,
		backgroundColor: colors.white,
		borderRadius: 8,
		borderWidth: 2,
		padding: 8,
		width: '285%',
		height: '22%',
	},
  btnText1: {
    fontWeight: "bold",
    fontSize: 14,
    left: 55,
    top: 0,
  },
  btnText2: {
    fontWeight: "bold",
    fontSize: 14,
    left: 55,
    top: 0,
  },
  arrow: {
    left: 300,
    bottom: 30,
  },
  radioButton: {
    top: 25,
    left: -10,
  },
  radioButton2: {
    top: 25,
    left: -10,
  },
});
