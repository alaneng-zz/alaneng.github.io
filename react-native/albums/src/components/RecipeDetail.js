import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

class RecipeDetail extends Component {
  onPress() {
    console.log("hihi");
  }

  render() {
    const { title, artist, image, thumbnail_image, url } = this.props.recipe;
    const {
      thumbnailStyle,
      thumbnailContainerStyle,
      headerContentStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    return (
      <Card>

        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{ uri: image }} style={imageStyle} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy {title}
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 16
  },
  thumbnailStyle: { width: 40, height: 40 },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default RecipeDetail;
