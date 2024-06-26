
// IMPORT REACT
import React, { useEffect, useState } from 'react';

// IMPORT REACT NATIVE
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';

// IMPORT STYLES
import styles from '../../../styles';

// IMPORT API
import { fakeFetchProducts, fakeFetchCategories } from '../../api/fakeFetcher';

// IMPORT COMPONENTS
import SectionSerializerSearcher from '../../components/common/SectionSerializerSearcher';
import CardCartProduct from '../../components/CardCartProduct';

// SCREEN COMPONENT
const ScreenHomeSearch = () => {

  // PRODUCTS & CATEGORIES DATA
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  /**
   * TODO: set this as a clone of the initially fetched products
   * as im planning to utilize this for the filter operations
   */
  const [filtered, setFiltered] = useState([]);

  // USE EFFECT IMPLEMENTATION FOR DATA FETCH WITH API
  useEffect(() => {
    // FETCH DATA
    const fetchData = async () => {
      // FETCH AND SET ALL PRODUCTS
      const fetchedProducts = await (fakeFetchProducts());
      setProducts(fetchedProducts)
      // FETCH AND SET CATEGORIES
      const fetchedCategories = await (fakeFetchCategories());
      setCategories(fetchedCategories)
    }
    fetchData();
  }, []);

  // COMPONENT COMPOSITION
  return (
    /* PAGE CONTAINER */
    <View style={styles.pageDefault}>

    {/* SEARCHER SECTION COMPONENT */}
      <SectionSerializerSearcher
        title="Search Products"
        data={products}
        containerStyle={'containerScroller'}
        renderItem={CardCartProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsScrollIndicator={false}
        numColumns={1}
      />

    </View>
  );
};

export default ScreenHomeSearch;
