import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Phone XR 64 GB",
          img: "LKqCyUjdGYzRDK8ssAch4g5dHZV1agJFbWDegAzd.jpeg",
          desc: "The best products apple",
          category: "Phone",
          price: "299.99",
        },
        {
          id: 2,
          title: "Phone 11 pro 128 ",
          img: "refurb-iphone-11-pro-space-gray-2019_GEO_EMEA.jpeg",
          desc: "The best products apple",
          category: "Phone",
          price: "399.99",
        },
        {
          id: 3,
          title: "Phone 12 256 GB",
          img: "refurb-iphone-12-blue-2020.jpeg",
          desc: "The best products apple",
          category: "Phone",
          price: "499.99",
        },
        {
          id: 4,
          title: "Phone 13 pro MAX 512 GB",
          img: "Без названия (2).jpeg",
          desc: "The best products apple",
          category: "Phone",
          price: "599.99",
        },
        {
          id: 5,
          title: "Phone 14 pro 1 TB",
          img: "apple-iphone-14-pro-max-1.jpg",
          desc: "The best products apple",
          category: "Phone",
          price: "799.99",
        },
        {
          id: 6,
          title: "MAC OS M1",
          img: "Без названия.jpeg",
          desc: "The best products apple",
          category: "MAC OS",
          price: "1799.99",
        },
        {
          id: 7,
          title: "MAC OS M2",
          img: "Без названия (1).jpeg",
          desc: "The best products apple",
          category: "MAC OS",
          price: "2299.99",
        },
        {
          id: 8,
          title: "MAC OS pro",
          img: "apple_macos-bigsur-availability_redesign_11122020_big.jpg.large.jpg",
          desc: "The best products apple",
          category: "MAC OS",
          price: "13199.99",
        },
        {
          id: 9,
          title: "MAC OS air",
          img: "macbook-air-space-gray-select-201810.jpeg",
          desc: "The best products apple",
          category: "MAC OS",
          price: "1199.99",
        },
        {
          id: 10,
          title: "AIR PODS pro",
          img: "og__eui2mpgzwyaa_overview.png",
          desc: "The best products apple",
          category: "AIR PODS",
          price: "599.99",
        },
        {
          id: 11,
          title: "AIR PODS pro 3",
          img: "Без названия (3).jpeg",
          desc: "The best products apple",
          category: "AIR PODS",
          price: "799.99",
        },
        {
          id: 12,
          title: "IPAD pro 13",
          img: "ipad-pro-finish-select-202212-12-9inch-space-gray-wifi_AV1_FMT_WHH.jpeg",
          desc: "The best products apple",
          category: "IPAD",
          price: "1199.99",
        },
        {
          id: 13,
          title: "IPAD air",
          img: "ipad-air-select-wifi-spacegray-2-1397x1397.jpg.webp",
          desc: "The best products apple",
          category: "IPAD",
          price: "999.99",
        },
        {
          id: 14,
          title: "AIR PODS max",
          img: "IMG1250.jpg",
          desc: "The best products apple",
          category: "AIR PODS",
          price: "599.99",
        },
        {
          id: 15,
          title: "IPAD",
          img: "refurb-ipad-air-wifi-green-2021.jpeg",
          desc: "The best products apple",
          category: "IPAD",
          price: "999.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wraper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.state({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
