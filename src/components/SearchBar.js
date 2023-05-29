import './SearchBar.css'
import { useState } from "react"

export const SearchBar = ({ search, setSearch }) => {
  return (
    <form onChange={(e) => setSearch(e.target.value)}>
      <div className="searchbar">
        <input type="text" name="job" placeholder="Search..." />
      </div>
    </form>
  )
}