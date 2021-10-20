const fs = require('fs')
const csv2json = require('csvjson-csv2json')


// Place the csv at the root of the project with the name 'waivers.csv'
// then execute `npm run build-data`

// build our data for waivers
async function buildWaiverJSON() {
  const dataDir = './_data'
  const csv = fs.readFileSync(`./waivers.csv`).toString() // convert Buffer to string
  const json = csv2json(csv, { parseNumbers: false })

    const valuesToKeep = [
    'Product Service Code (PSC)',
    'Procurement Title',
    'Contracting Office Agency Name',
    'Contracting Office Agency ID',
    'Funding Agency ID',
    'Funding Agency Name',
    'Procurement Stage',
    'North American Industry Classification System (NAICS)',
    'Summary of Procurement',
    'Waiver Rationale Summary',
    'Was a sources sought or Request for Information issued?',
    'Expected Maximum Duration of Requested Waiver',
    'Waiver Coverage',
    'Did / Will the solicitation include one of the standard BAA provisions (e.g., 52-225-1, Buy American- Supplies, 52.225 9, Buy American Construction Materials) announcing the agency s intention to provide a price preference for domestic end products and construction material?',
    ]

    const lowerCaseExceptions = ['for', 'and', 'of', 'the', 'an']
    const accrynmException = ['dla']

    const handleOfficeCase = (data) => {
      data.map(item => {
        if (item[0] === "Funding Agency Name" | item[0] === "Contracting Office Agency Name") {
          let name = item[1].toLowerCase().split(/(\s+)/)
          name.map((word, i) => {

            if (!lowerCaseExceptions.includes(word)) {
              name[i] = word.charAt(0).toUpperCase() + word.slice(1)
            }

            if (accrynmException.includes(word)) {
              name[i] = word.toUpperCase()
            }

            return name
          })
          item[1] = name.join('')
          return item
        }
      })
      return data
    }

    const filteredItems = json.map((waiver) => {
      const asArray = Object.entries(waiver);
      const filtered = handleOfficeCase(asArray).filter((item => valuesToKeep.includes(item[0])));
      return Object.fromEntries(filtered);
    })

    filteredItems.reverse()

  fs.writeFile(`${dataDir}/waivers-data.json`, JSON.stringify(filteredItems), err => {
    // Checking for errors
    if (err) throw err

    console.info('Done converting waiver csv -> json') // Success
  })
}

buildWaiverJSON();


