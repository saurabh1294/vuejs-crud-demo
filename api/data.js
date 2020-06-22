const express = require("express");
const router = express.Router();
const handler = require("./middleware/async-handler.js");
const _ = require("lodash");
const banks = [
  {
    "id": 1,
    "name": "Commonwealth Bank of Australia",
    "shortName": "CBA",
    "country" : "AU",
    "url" : "https://www.commbank.com.au/"					
  },
  {
    "id": 2,
    "name": "National Australia Bank",
    "shortName": "NAB",
    "country" : "AU",
    "url" : "https://www.nab.com.au"					
  },
  {
    "id": 3,
    "name": "Westpac Banking Corporation",
    "shortName": "WBC",
    "country" : "AU",
    "url" : "https://www.westpac.com.au/"					
  },
  {
    "id": 4,
    "name": "Australia and New Zealand Banking Group",
    "shortName": "ANZ",
    "country" : "AU",
    "url" : "https://www.anz.com.au"					
  },
  {
    "id": 5,
    "name": "TD Bank Group",
    "shortName": "TD",
    "country" : "CA",
    "url" : "https://www.td.com/about-tdbfg/our-business/index.jsp"					
  },
  {
    "id": 6,
    "name": "Scotiabank Global",
    "shortName": "SBG",
    "country" : "CA",
    "url" : "http://www.scotiabank.com/"					
  },
  {
    "id": 7,
    "name": "BMO Bank of Montreal",
    "shortName": "BMO",
    "country" : "CA",
    "url" : "hhttps://www.bmo.com/"					
  },
  {
    "id": 8,
    "name": "Royal Bank of Canada",
    "shortName": "RBC",
    "country" : "CA",
    "url" : "http://www.rbcroyalbank.com/"					
  },
  {
    "id": 9,
    "name": "Canadian Imperial Bank of Commerce",
    "shortName": "CIBC",
    "country" : "CA",
    "url" : "https://www.cibc.com"					
  },
  {
    "id": 10,
    "name": "ANZ Bank New Zealand",
    "shortName": "ANZ NZ",
    "country" : "NZ",
    "url" : "https://www.anz.co.nz"					
  },
  {
    "id": 11,
    "name": "ASB Bank",
    "shortName": "ASB NZ",
    "country" : "NZ",
    "url" : "https://www.asb.co.nz/"					
  },
  {
    "id": 12,
    "name": "BNZ Bank of New Zealand",
    "shortName": "BNZ NZ",
    "country" : "NZ",
    "url" : "https://www.bnz.co.nz/"					
  },
  {
    "id": 13,
    "name": "Citibank New Zealand",
    "shortName": "CNZ",
    "country" : "NZ",
    "url" : "https://www.citigroup.com/citi/"					
  }
];

// return all items
router.get("/banks", handler(async function(req, res) {
  res.json(banks);
}));

// update one item
router.put("/banks", handler(async function(req, res) {
  const newItem = req.body.data;
  const item = banks.find(x => x.id == newItem.id);
  const index = banks.indexOf(item);
  if (index > -1) {
    banks.splice(index, 1, newItem);
  }
  res.sendStatus(200);
}));

// add a new item
router.post("/banks", handler(async function(req, res) {
  let item = { ...req.body.data };
  const maxIdItem = _.maxBy(banks, "id");
  item.id = maxIdItem.id + 1;
  banks.push(item);
  res.sendStatus(200);
}));

// delete an item
router.delete("/banks/:id", handler(async function(req, res) {
  const item = banks.find(x => x.id == req.params.id);
  const index = banks.indexOf(item);
  if (index > -1) {
    banks.splice(index, 1);
  }
  res.sendStatus(200);
}));
module.exports = router;