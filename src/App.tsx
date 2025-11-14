import './App.css';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import SortByFilter from './components/SortBy';
import { useProducts } from './hooks/useProducts';


function App() {
  const {
    products,
    loading,
    categories,
    selectedCategories,
    toggleCategory,
    search,
    setSearch,
    sortBy,
    setSortBy,
  } = useProducts()

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />
      <SortByFilter sortBy={sortBy} setSortBy={setSortBy} />
      <ProductList products={products} loading={loading} />
    </div>
  )
}

export default App
