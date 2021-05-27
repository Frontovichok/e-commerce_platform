import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import PriceTable from "../PriceTable/PriceTable";
import ProductsNavBar from "../../../../ProductsNavBar/ProductsNavBar";
import styles from "./Mobile.module.css";

export default class MenuExampleAttachedTabular extends Component {
  state = { activeItem: "tab1" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu attached="top" tabular>
          <Menu.Item
            name="tab1"
            active={activeItem === "tab1"}
            onClick={this.handleItemClick}
          >
            Цены за работу
          </Menu.Item>
          <Menu.Item
            name="tab2"
            active={activeItem === "tab2"}
            onClick={this.handleItemClick}
          >
            Цены за материалы
          </Menu.Item>
        </Menu>
        <Segment attached="bottom">
          {activeItem === "tab1" ? (
            <PriceTable />
          ) : (
            <div className="pricePageProductsNavbar">
              <ProductsNavBar products={this.props.products} />
            </div>
          )}
        </Segment>
      </>
    );
  }
}
