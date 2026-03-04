import React from 'react'
import { computerData } from '../data/computers'
import CategoryPage from '../components/CategoryPage'

function ComputerPage() {
  return <CategoryPage data={computerData} basePath="/computers" />
}

export default ComputerPage
