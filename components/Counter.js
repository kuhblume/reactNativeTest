// import React, {
//     Component
// } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit Counter.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React,{
    Component,
} from 'react';
import {
    Text,View,TouchableHighlight
} from 'react-native';
import Storage from 'react-native-storage';
import {
    AsyncStorage
} from 'react-native';
import styled from 'styled-components';
import  colors from '../utils/colors.js';

class Counter extends Component{
    render() {
        return(
            <Container>
                <Count>
                    {this.state.counter}
                </Count>
                <ButtonsColumn>
                    <ButtonsRow>
                        <ButtonBoxPlus onPress={this.plus} underlaycolor={colors.plus}>
                            <ButtonText>
                                +
                            </ButtonText>
                        </ButtonBoxPlus>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <ButtonBoxMinus onPress={this.minus} underlaycolor>
                            <ButtonText>
                                -
                            </ButtonText>
                        </ButtonBoxMinus>
                    </ButtonsRow>
                    <ButtonsRow>
                        <ButtonBoxPlus onPress={this.plus} underlaycolor={colors.plus}>
                            <ButtonText>
                                +
                            </ButtonText>
                        </ButtonBoxPlus>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <ButtonBoxMinus onPress={this.minus} underlaycolor>
                            <ButtonText>
                                -
                            </ButtonText>
                        </ButtonBoxMinus>
                    </ButtonsRow>
                    <ButtonsRow>
                        <ButtonBoxPlus onPress={this.plus} underlaycolor={colors.plus}>
                            <ButtonText>
                                +
                            </ButtonText>
                        </ButtonBoxPlus>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <ButtonBoxMinus onPress={this.minus} underlaycolor>
                            <ButtonText>
                                -
                            </ButtonText>
                        </ButtonBoxMinus>
                    </ButtonsRow>
                    <ButtonsRow>
                        <ButtonBoxPlus onPress={this.plus} underlaycolor={colors.plus}>
                            <ButtonText>
                                +
                            </ButtonText>
                        </ButtonBoxPlus>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <TestButton>
                            <ButtonText>
                                test
                            </ButtonText>
                        </TestButton>
                        <ButtonBoxMinus onPress={this.minus} underlaycolor>
                            <ButtonText>
                                -
                            </ButtonText>
                        </ButtonBoxMinus>
                    </ButtonsRow>
                </ButtonsColumn>
            </Container>
        );
    }

    constructor(props){
        super(props);
        this.state = {
            counter:1,
        }
    }
    plus = async () => {
        await this.setState({
            counter:this.state.counter+1,
        });
        await AsyncStorage.setItem("test", String(this.state.counter));
    };
    minus = async () => {
        await this.setState({
            counter:this.state.counter-1,
        });
        await AsyncStorage.setItem("test", String(this.state.counter));
    };

    async componentDidMount() {
        // await AsyncStorage.setItem("test", "5");
        this.setState({
            counter:Number(await AsyncStorage.getItem("test")||0),
        });
    }
}

const Container = styled(View)`
    justify-content:center;
    height:100%;
    background:${colors.white};
`;
const ButtonsRow = styled(View)`
    justify-content: space-around;
    flex-direction: row;
`;
const ButtonsColumn = styled(View)`
    justify-content: space-around;
    flex-direction: column;
`;
const ButtonBox = styled(TouchableHighlight)`
    height: 100;
    width: 100;
    margin-bottom: 5px;
    border-radius: 3px;
    border: ${colors.black};
    justify-content: center;
    align-items: center;
`;
const ButtonBoxPlus = styled(ButtonBox)`
    border: ${colors.plus};
`;
const ButtonBoxMinus = styled(ButtonBox)`
    border: ${colors.minus};
`;
const ButtonText = styled(Text)`
    font-size: 20;
`;
const Count = styled(Text)`
    font-size: 50;
    text-align: center;
`;
const TestButton = styled(ButtonBox)`
        border: ${colors.black};

`;

export default Counter;

// //ストレージの設定
// let storage = new Storage({
//     // 最大容量, 1000がデフォルト
//     size: 1000,
//
//     // AsyncStorageを使う（WEBでもRNでも）。
//     // セットしないとリロードでデータが消えるよ。
//     storageBackend: AsyncStorage,
//
//     // （たぶん）キャッシュの期限。デフォルトは一日(1000 * 3600 * 24 milliseconds).
//     // nullにも設定できて、期限なしの意味になるよ。
//     defaultExpires: null,
//
//     // メモリにキャッシュするかどうか。デフォルトは true。
//     enableCache: true,
//
//     // リモートシンクの設定（だと思う。）
//     sync : {
//         // これについては後述
//     }
// });