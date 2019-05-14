import React, { Component } from "react";
import styled, { css } from "@emotion/native";
import { Button, Text } from "native-base";
import { withRouter } from "react-router";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Description = styled.Text({
  color: "hotpink"
});

const Image = styled.Image`
  padding: 40px;
`;

const emotionLogo =
  "https://cdn.rawgit.com/emotion-js/emotion/master/emotion.png";
class Emotions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container
        style={css`
          border-radius: 10px;
        `}
      >
        <Description style={{ fontSize: 45, fontWeight: "bold" }}>
          Emotion Primitives
        </Description>
        <Image
          source={{
            uri: emotionLogo,
            height: 150,
            width: 150
          }}
        />
        {/* TODO: Consider abstracting this.props.history.push (ie. inject function here instead) */}
        <Button primary onPress={() => this.props.history.push("/")}>
          <Text>Go to first page</Text>
        </Button>
      </Container>
    );
  }
}

export default withRouter(Emotions);
