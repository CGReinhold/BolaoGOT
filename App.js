import React from 'react';
import Swiper from "react-native-deck-swiper";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { Constants } from 'expo';
import { personagens } from './Personagens';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cardIndex: 0
    };
  }

  renderCard = card => {
    return (
      <View style={styles.card}>
        <Image style={{ width: 320, height: 320 }} source={{ uri: card.image }} />
        <Text style={styles.text}>{card.name}</Text>
      </View>
    );
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    );
  };

  jumpTo = () => {
    this.swiper.jumpToCardIndex(2);
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          useViewOverflow={false}
          style={styles.swiper}
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={this.onSwiped}
          cards={personagens}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          showSecondCard={false}
          verticalSwipe={false}
          showSecondCard
          stackSize={2}
          style={{ backgroundColor: '#cecece' }}
        >
        </Swiper>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  swiper: {
    paddingTop: Constants.statusBarHeight,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
});
