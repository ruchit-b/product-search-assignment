function CategoryFilter({
  categories,
  selectedCategories,
  toggleCategory,
}: {
  categories: string[]
  selectedCategories: string[]
  toggleCategory: (category: string) => void
}) {
  return (
    <div className='category-filter'>
      {categories.map((category) => (
        <div
          key={category}
          className={`category-filter-item ${
            selectedCategories.includes(category) ? 'active' : ''
          }`}
          onClick={() => toggleCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  )
}

export default CategoryFilter