const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://nishantparashar52:Nepa90A02@cluster0.fjkto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // await createListing(client, {
        //     name: 'nishant',
        //     summary: 'dummy room',
        //     bedRooms: '2'
        // });
        // await createListing(client, [{
        //     name: 'nishant',
        //     summary: 'dummy room',
        //     bedRooms: '2'
        // }, {
        //     name: 'nishant2',
        //     summary: 'dummy room',
        //     bedRooms: '2'
        // },
        // {
        //     name: 'nishant3',
        //     summary: 'dummy room',
        //     bedRooms: '2'
        // }],  'many');

        // await findOneByListingName(client, "nishant");
        // find with reviews
        // await findListingWithReview(client,
        //     {
        //         minimumNumberOfBedrooms: 4,
        //         minimumNumberOfBathrooms: 2,
        //         maximumNumberOfResults: 5
        //     }
        // );
        await updateListing(client, "Infinite Views", {
            bedrooms: 6, beds: 4
        });
        // await listDatabases(client);
    } catch(e) {
        console.log(e);
    } finally {
        await client.close();
    }
}
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log(databasesList);
    databasesList.databases.forEach(db => console.log(`db ${db.name}`));
}

async function createListing(client,newListing, type="single", ) {
    let result;
    if(type === 'many') {
        result = await client.db('sample_airbnb').collection('listingsAndReviews').insertMany(newListing);
    } else result = await client.db('sample_airbnb').collection('listingsAndReviews').insertOne(newListing);
    
    console.log(`result ${type === 'many' ? 'many': 'one'} ${JSON.stringify(result.insertedIds)}`);
}

async function findOneByListingName(client, listingName) {
    const result = await client.db('sample_airbnb').collection('listingsAndReviews').findOne({name: listingName});
    if(result) {
        console.log(`result found ${JSON.stringify(result)}`)
    } else console.log('no result found');
}


async function findListingWithReview(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {
    const cursor = await client.db('sample_airbnb').collection('listingsAndReviews').find(
        {
            bedrooms: { $gte: minimumNumberOfBedrooms },
            bathrooms: { $gte: minimumNumberOfBathrooms },
        }
    ).sort({last_review: -1})
    .limit(maximumNumberOfResults);
    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            date = new Date(result.last_review).toDateString();
            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}

async function updateListing(client, nameOfListing, updatedListing) {
    const result = await client.db('sample_airbnb').collection('listingsAndReviews').updateOne({
        name: nameOfListing
    }, { $set: updatedListing});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
main().catch(console.error);