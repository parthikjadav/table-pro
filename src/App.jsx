import React from 'react'
import { row_data, col_data } from './data'
const App = () => {
  let [column, setColumn] = React.useState(col_data)
  let [row, setRow] = React.useState(row_data)

  const handleColumn = () => {
    setColumn([...column, { id: column.length + 1, name: "column" + (column.length + 1) }])
    let r = row 
    r[0].push({ id: row[0].length + 1, name: "row" + (row[0].length + 1) })
    let r2 = row
    r2[1].push({ id: row[1].length + 1, name: "row" + (row[1].length + 1) })
    let r3 = row
    r3[2].push({ id: row[2].length + 1, name: "row" + (row[2].length + 1) })
    setRow(r)
  }

  // const hendelInput = (e) => {
  //   let input = e.target.value
  //   console.log(input);
  //   let id = e.target.id

  //   let r = row
    
  //   // setRow(r[0].map((val) => val.id == id ? { ...val, name: input } : val))
  // }

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {
                column.map((col) => {
                  return (
                    <th scope="col" class="px-6 py-3">
                    {col.name}
                    </th>
                  )
                })
              }
              <th class="px-6 py-4">
                <button>EDIT</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             {
              row[0]?.map((row) => {
                console.log(row,"row");
                return (
                  <td class="px-6 py-4">
                   {row.name}
                  </td>
                )
              })
             }
              <td class="px-6 py-4">
                <button>Edit</button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {
                row[1]?.map((row) => {
                  return (
                    <td class="px-6 py-4">
                      {row.name}
                    </td>
                  )
                })
              }
              <td class="px-6 py-4">
                <button>Edit</button>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              {
                row[2]?.map((row) => {
                  return (
                    <td class="px-6 py-4">
                      {row.name}
                    </td>
                  )
                })
              }
              <td class="px-6 py-4">
                <button>Edit</button>
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" onClick={handleColumn} class="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
    </div>
  )
}

export default App
