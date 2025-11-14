import { SortBy } from "../hooks/useProducts"

function SortByFilter({
  sortBy,
  setSortBy,
}: {
  sortBy: SortBy | undefined
  setSortBy: (sortBy: SortBy) => void
}) {
  return (
    <div className='sort-by-filter'>
      <select
        className='sort-by-filter-select'
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortBy)}
      >
        <option value={undefined}>Sort By</option>
        <option value={SortBy.PRICE_LOW_TO_HIGH}>{SortBy.PRICE_LOW_TO_HIGH}</option>
        <option value={SortBy.PRICE_HIGH_TO_LOW}>{SortBy.PRICE_HIGH_TO_LOW}</option>
        <option value={SortBy.NAME_A_TO_Z}>{SortBy.NAME_A_TO_Z}</option>
        <option value={SortBy.NAME_Z_TO_A}>{SortBy.NAME_Z_TO_A}</option>
      </select>
    </div>
  )
}

export default SortByFilter