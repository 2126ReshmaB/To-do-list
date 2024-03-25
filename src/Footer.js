import React from 'react'

function Footer({length}) {
  return (
    <footer>{length} List {length === 1 ? "Item" : "Items"}</footer>
  )
}

export default Footer