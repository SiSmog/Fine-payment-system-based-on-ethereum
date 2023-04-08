import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs'

const ipfsOptions = { repo : './ipfs'}
const ipfs = await IPFS.create(ipfsOptions)
const orbitdb = await OrbitDB.createInstance(ipfs)
const db = await orbitdb.eventlog('orbit.radar')
await db.load()

export default db