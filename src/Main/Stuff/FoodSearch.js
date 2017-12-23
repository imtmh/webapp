import React from 'react';
import Client from './Client';
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react';

const MATCHING_ITEM_LIMIT = 25;

class FoodSearch extends React.Component {
  state = {
    foods: [],
    showRemoveIcon: false,
    searchValue: '',
    showSendSmsModal: false,
    food: {}
  };

  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === '') {
      this.setState({
        foods: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      Client.search(value, foods => {
        this.setState({
          foods: foods.slice(0, MATCHING_ITEM_LIMIT)
        });
      });
    }
  };

  handleSearchCancel = () => {
    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchValue: '',
      food: {}
    });
  };
  handleFoodClick = food => {
    this.handleSmsModalOpen(food);
  };

  handleSmsModalOpen = food => this.setState({ showSendSmsModal: true, food });

  handleSmsModalClose = () => this.setState({ showSendSmsModal: false });
  handleAddSelectedFood = () => {
    this.props.onFoodClick(this.state.food);
    this.setState({ showSendSmsModal: false });
  };

  render() {
    const { showRemoveIcon, foods } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const foodRows = foods.map((food, idx) => (
      <tr key={idx} onClick={() => this.handleFoodClick(food)}>
        <td>{food.description}</td>
        <td className="right aligned">{food.kcal}</td>
        <td className="right aligned">{food.protein_g}</td>
        <td className="right aligned">{food.fat_g}</td>
        <td className="right aligned">{food.carbohydrate_g}</td>
      </tr>
    ));

    return (
      <div id="food-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search foods..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />

                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                  <label>Click on the results</label>
                </div>
              </th>
            </tr>
            <tr>
              <th className="eight wide">Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>{foodRows}</tbody>
        </table>
        <Modal
          dimmer="blurring"
          open={this.state.showSendSmsModal}
          onClose={this.handleSmsModalClose}
        >
          <Modal.Header>Selected Details of the food</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <p>You have selected the following details.</p>
              <table className="ui selectable structured large table">
                <thead>
                  <tr>
                    <th className="eight wide">Description</th>
                    <th>Kcal</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.food.description}</td>
                    <td className="right aligned">{this.state.food.kcal}</td>
                    <td className="right aligned">
                      {this.state.food.protein_g}
                    </td>
                    <td className="right aligned">{this.state.food.fat_g}</td>
                    <td className="right aligned">
                      {this.state.food.carbohydrate_g}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>Is it okay to select this food?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.handleSmsModalClose}>
              Nope!
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's Correct!"
              onClick={() => this.handleAddSelectedFood()}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default FoodSearch;
