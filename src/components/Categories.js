import React, { Component } from "react";

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "MAC OS",
          name: "MAC OS",
        },
        {
          key: "AIR PODS",
          name: "AIR PODS",
        },
        {
          key: "IPAD",
          name: "IPAD",
        },
        {
          key: "Phone",
          name: "Phone",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
