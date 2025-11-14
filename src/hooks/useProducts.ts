import { useEffect, useMemo, useState } from 'react'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export enum SortBy {
  PRICE_LOW_TO_HIGH = 'Price Low to High',
  PRICE_HIGH_TO_LOW = 'Price High to Low',
  NAME_A_TO_Z = 'Name A to Z',
  NAME_Z_TO_A = 'Name Z to A',
}

export const useProducts = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined)

  const minimumPrice = useMemo(() => {
    if (products.length === 0) return 0
    return Math.min(...products.map((product) => product.price))
  }, [products])
  const maximumPrice = useMemo(() => {
    if (products.length === 0) return 0
    return Math.max(...products.map((product) => product.price))
  }, [products])

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products],
  )

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredProducts = useMemo(
    () =>
      products
        .filter((product) => {
          return (
            (selectedCategories.includes(product.category) || selectedCategories.length === 0) &&
            (product.title.toLowerCase().includes(search.toLowerCase()) ||
              product.description.toLowerCase().includes(search.toLowerCase()) ||
              search.length === 0)
          )
        })
        .sort((a, b) => {
          if (sortBy === SortBy.PRICE_LOW_TO_HIGH) {
            return a.price - b.price
          } else if (sortBy === SortBy.PRICE_HIGH_TO_LOW) {
            return b.price - a.price
          } else if (sortBy === SortBy.NAME_A_TO_Z) {
            return a.title.localeCompare(b.title)
          } else if (sortBy === SortBy.NAME_Z_TO_A) {
            return b.title.localeCompare(a.title)
          }
          return 0
        }),
    [products, selectedCategories, search, sortBy],
  )

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  return {
    products: filteredProducts,
    loading,
    categories,
    selectedCategories,
    toggleCategory,
    search,
    setSearch,
    minimumPrice,
    maximumPrice,
    sortBy,
    setSortBy,
  }
}
