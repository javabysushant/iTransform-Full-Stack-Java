//created new database = mongo_practice 
> use mongo_practice
switched to db mongo_practice

//created new collection = movies
> db.createCollection('movies')
{ "ok" : 1 }

/*inserted single document
> db.movies.insert([ {"title" : "Fight Club", "writer" : "Chuck Palahniuko", year : 1999, "actors" : [ "Brad Pitt", "Edward Norton" ]}])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 1,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})*/

// inserted multiple documents 
> db.movies.insert([
... {
... "title" : "Fight Club",
... "writer" : "Chuck Palahniuko",
... year : 1999,
... "actors" : [ "Brad Pitt", "Edward Norton" ]
... },
... {
... "title" : "Pulp Fiction",
... "writer" : "Quentin Tarantino",
... year : 1994,
... "actors" : [ "John Travolta", "Uma Thurman" ]
... },
... {
... "title" : "Inglorious Basterds",
... "writer" : "Quentin Tarantino",
... year : 2009,
... "actors" : [ "Brad Pitt Diane", "Kruger Eli Roth" ]
... },
... {
... "title" : "The Hobbit: An Unexpected Journey",
... "writer" : "J.R.R. Tolkein",
... year : 2012,
... "franchise" : "The Hobbi"
... },
... {
... "title" : "The Hobbit: The Desolation of Smaug",
... "writer" : "J.R.R. Tolkein",
... year : 2013,
... "franchise" : "The Hobbit"
... },
... {
... "title" : "The Hobbit: The Battle of the Five Armies",
... "writer" : "J.R.R. Tolkein",
... year : 2012,
... "franchise" : "The Hobbit",
... "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
... },
... {
... "title" : "Pee Wee Herman's Big Adventure"
... },
... {
... "title" : "Avatar"
... }
... ])
/*BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 8,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})*/ //result of insert statement


//db.movies.find().pretty() to read inserted documents in the collection

//get all documents

> db.movies.find().pretty()
/* result 
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d4"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuko",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "Edward Norton"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d5"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d6"),
        "title" : "Inglorious Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt Diane",
                "Kruger Eli Roth"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d7"),
        "title" : "The Hobbit: An Unexpected Journey",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbi"
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d8"),
        "title" : "The Hobbit: The Desolation of Smaug",
        "writer" : "J.R.R. Tolkein",
        "year" : 2013,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d9"),
        "title" : "The Hobbit: The Battle of the Five Armies",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91da"),
        "title" : "Pee Wee Herman's Big Adventure"
}
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91db"), "title" : "Avatar" }
*/

//get all documents with writer set to "Quentin Tarantino"

 db.movies.aggregate([{$match:{"writer":"Quentin Tarantino"}}]).pretty() //through using aggregate method
 /*
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d5"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d6"),
        "title" : "Inglorious Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt Diane",
                "Kruger Eli Roth"
        ]
}*/

//OR 

> db.movies.find({"writer" : "Quentin Tarantino"}).pretty()//through using find method
/*
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d5"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d6"),
        "title" : "Inglorious Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt Diane",
                "Kruger Eli Roth"
        ]
}*/

db.movies.find({"actors" :{$in:["Brad Pitt"]} }).pretty()//through using In clause
/*
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d4"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuko",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "Edward Norton"
        ]
}*/


db.movies.find({"franchise" : "The Hobbit"}).pretty()
/*
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d8"),
        "title" : "The Hobbit: The Desolation of Smaug",
        "writer" : "J.R.R. Tolkein",
        "year" : 2013,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d9"),
        "title" : "The Hobbit: The Battle of the Five Armies",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
}*/

//get all movies released in the 90s
 db.movies.find({"year" : {$lt:2000}}).pretty() // less than 2000
 /*
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d4"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuko",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "Edward Norton"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d5"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}*/

//get all movies released before the year 2000 or after 2010
 db.movies.find({$and: [{year: {$gt: 1900}}, {year: {$lt: 2000}}]}).pretty()
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d4"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuko",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "Edward Norton"
        ]
}
{
        "_id" : ObjectId("5f6d52a30f077a46bd9d91d5"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}

//update ->

add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."

db.movies.update({_id:ObjectId("5f6d52a30f077a46bd9d91d7")}, {$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})

--------------------------------------------

add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."

db.movies.update({_id:ObjectId("5f6d52a30f077a46bd9d91d8")}, {$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })


//--------------------------------------------

add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"

db.movies.update({_id:ObjectId("5f6d52a30f077a46bd9d91d5")}, {$push:{actors:"Samuel L. Jackson"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

///text search ->

//find all movies that have a synopsis that contains the word "Bilbo"
> db.movies.find({synopsis:{$regex:"Bilbo"}})
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d7"), "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d8"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : 2013, "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d9"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : 2012, "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }

//find all movies that have a synopsis that contains the word "Gandalf"
> db.movies.find({synopsis:{$regex:"Gandalf"}})
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d8"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : 2013, "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }


//find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({$and:[{synopsis:{$regex:"Bilbo"}}, {synopsis:{$not:/Gandalf/}}]})
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d7"), "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d9"), "title" : "The Hobbit: The Battle of the Five Armies", "writer" : "J.R.R. Tolkein", "year" : 2012, "franchise" : "The Hobbit", "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness." }

//find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({$or:[{synopsis:{$regex:"dwarves"}}, {synopsis:{$regex:"hobbit"}}]})
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d7"), "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d8"), "title" : "The Hobbit: The Desolation of Smaug", "writer" : "J.R.R. Tolkein", "year" : 2013, "franchise" : "The Hobbit", "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }

//find all movies that have a synopsis that contains the word "gold" and "dragon"
 db.movies.find({$and:[{synopsis:{$regex:"gold"}}, {synopsis:{$regex:"dragon"}}]})
{ "_id" : ObjectId("5f6d52a30f077a46bd9d91d7"), "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }

//Delete Documents
//delete the movie "Pee Wee Herman's Big Adventure"

db.movies.remove({_id:ObjectId("5f6d52a30f077a46bd9d91da")})
WriteResult({ "nRemoved" : 1 })
//delete the movie "Avatar"

db.movies.remove({_id:ObjectId("5f6d52a30f077a46bd9d91db")})
WriteResult({ "nRemoved" : 1 })

//Relationships
/*Insert the documents into a users collection */
> db.users.insert({_id:1,username:"GoodGuyGreg", first_name:"Good Guy", last_name:"Greg"})
WriteResult({ "nInserted" : 1 })
> db.users.insert({_id:2, username:"ScumbagSteve", fullname:{first: "Scumbag", last:"Steve"}})
WriteResult({ "nInserted" : 1 })

//Insert the following documents into a posts collection
db.posts.insert([{username:"GoodGuyGreg", title:"Passes out at Party", body:"Raises your credit score"},
{username:"GoodGuyGreg", title:"Steals your identity", body:"Raises your credit score"},
{username:"GoodGuyGreg", title:"Reports a bug in your code", body:"Sends you a pull request"},
{username:"ScumbagSteve", title:"Borrows something", body:"Sells it"},
{username:"ScumbagSteve", title:"Borrows everything", body:"The end"},
{username:"ScumbagSteve", title:"Forks your repo on github", body:"Sets to private"}])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 6,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})

//Insert the following documents into a comments collection

db.comments.insert([{ username:"GoodGuyGreg", comment:"Hope you got a good deal!", post:ObjectId("5f6ffa3d68383be0720d3659")},
{username:"GoodGuyGreg", comment:"What's mine is yours!", post:ObjectId("5f6ffa3d68383be0720d365a")},
{username:"GoodGuyGreg", comment:"Don't violate the licensing agreement!", post:ObjectId("5f6ffa3d68383be0720d365b")},
{username:"ScumbagSteve", comment:"It still isn't clean", post:ObjectId("5f6ffa3d68383be0720d3656")},
{username:"ScumbagSteve", comment:"Denied your PR cause I found a hack", post:ObjectId("5f6ffa3d68383be0720d3658")}
])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 5,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})

//Querying related collections ->

//find all users

db.users.find().pretty()

//find all posts

db.posts.find().pretty()

//find all posts that was authored by "GoodGuyGreg"

db.posts.find({username:"GoodGuyGreg"})

//find all posts that was authored by "ScumbagSteve"

db.posts.find({username:"ScumbagSteve"})

//find all comments

db.comments.find().pretty()

//find all comments that was authored by "GoodGuyGreg"

//db.comments.find({username:"GoodGuyGreg"})

//find all comments that was authored by "ScumbagSteve"

db.comments.find({username:"ScumbagSteve"})

//find all comments belonging to the post "Reports a bug in your code"













