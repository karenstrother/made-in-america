const fs = require('fs')
const csv2json = require('csvjson-csv2json')

// build our data for waivers
async function buildWaiverJSON() {
  const dataDir = './_data'
  const csv = fs.readFileSync(`${dataDir}/waivers.csv`).toString() // convert Buffer to string
  const json = csv2json(csv, { parseNumbers: false })

    const valuesToKeep = [
    "Product Service Code (PSC)",
    "Procurement Title",
    "Contracting Office Agency Name",
    "Contracting Office Agency ID",
    "Funding Agency ID",
    "Product Service Code (PSC)",
    "Procurement Stage",
    "North American Industry Classification System (NAICS)",
    "Product Service Code (PSC)",
    "Summary of Procurement",
    "Waiver Rationale Summary",
    "Was a sources sought or Request for Information issued?",
    "Expected Maximum Duration of Requested Waiver",
    "Waiver Coverage",
    "Did / Will the solicitation include one of the standard BAA provisions (e.g., 52-225-1, Buy American- Supplies, 52.225–9, Buy American—Construction Materials) announcing the agency’s intention to provide a price preference for domestic end products and construction material?"
    ]
    const filteredItems = json.map((waiver) => {
      const asArray = Object.entries(waiver);
      const filtered = asArray.filter((item => valuesToKeep.includes(item[0])));
      return Object.fromEntries(filtered);
    })

  fs.writeFile(`${dataDir}/waivers-data.json`, JSON.stringify(filteredItems), err => {
    if (err) throw err
  })
}

buildWaiverJSON();


