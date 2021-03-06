import React from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { SHOP_DATA } from './shop.data';

import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: SHOP_DATA,
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="shop-page">
        {categories.map(({ id, ...otherCategoryProps }) => (
          <CategoryPreview key={id} {...otherCategoryProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
