import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs'

async function main () {
  const ipfsOptions = { repo : './ipfs', start: true,init:false}
  const ipfs = await IPFS.create(ipfsOptions)
  const orbitdb = await OrbitDB.createInstance(ipfs)
  const db = await orbitdb.eventlog('orbit.test')
  const hash = await db.add({name: 'majdi', followers: 500 })
  const profile = db.get(hash)
  console.log(hash)
  console.log(profile.payload.value)
}

main()