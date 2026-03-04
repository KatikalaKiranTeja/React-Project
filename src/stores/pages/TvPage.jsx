import React from 'react'
import { tvData } from '../data/tv'
import CategoryPage from '../components/CategoryPage'

function TvPage() {
  return <CategoryPage data={tvData} basePath="/tv" />
}

export default TvPage
