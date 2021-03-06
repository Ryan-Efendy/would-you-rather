import React, { Component } from 'react';
import { Grid, Container, Header, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewPoll extends Component {
  state = { optionOneText: '', optionTwoText: '' };

  handleOptionOneTextChange = e =>
    this.setState({ optionOneText: e.target.value });

  handleOptionTwoTextChange = e =>
    this.setState({ optionTwoText: e.target.value });

  handleSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, history, onNavChange } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }));

    onNavChange('home');
    history.push('/');
  };

  render = () => {
    const { optionOneText, optionTwoText } = this.state;

    return (
      <Container text>
        <Grid columns={2} centered celled>
          <Header as="h3" textAlign="center" style={{ margin: 10 }}>
            Create New Question
          </Header>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4">Comeplete the question:</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Header as="h3">Would you rather...</Header>
                  <input
                    placeholder="Enter Option One Here"
                    onChange={this.handleOptionOneTextChange}
                    value={optionOneText}
                  />
                </Form.Field>
                <Form.Field>
                  <Header as="h3" textAlign="center">
                    OR
                  </Header>
                  <input
                    placeholder="Enter Option Two Here"
                    onChange={this.handleOptionTwoTextChange}
                    value={optionTwoText}
                  />
                </Form.Field>
                <Button
                  type="submit"
                  fluid
                  disabled={!optionOneText || !optionTwoText}
                >
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
}

export default connect()(NewPoll);
