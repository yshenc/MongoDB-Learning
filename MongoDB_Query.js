//run the .js code file in the mongo-shell,
//with load("file_location")

//(1.1)
print("Start of Question 1")
print("Question 1.1")
db = db.getSiblingDB('DBQ1') //create database
db.test.drop()
db.test.insert([
{
    "_id" : 1,
    "name" : {
        "first" : "John",
        "last" : "Backus"
    },
    "birth" : ISODate("1924-12-03T05:00:00Z"),
    "death" : ISODate("2007-03-17T04:00:00Z"),
    "contribs" : [
        "Fortran",
        "ALGOL",
        "Backus-Naur Form",
        "FP"
    ],
    "awards" : [
        {
            "award" : "W.W. McDowell Award",
            "year" : 1967,
            "by" : "IEEE Computer Society"
        },
        {
            "award" : "National Medal of Science",
            "year" : 1975,
            "by" : "National Science Foundation"
        },
        {
            "award" : "Turing Award",
            "year" : 1977,
            "by" : "ACM"
        },
        {
            "award" : "Draper Prize",
            "year" : 1993,
            "by" : "National Academy of Engineering"
        }
 	]
},

{
    "_id" : ObjectId("51df07b094c6acd67e492f41"),
    "name" : {
        "first" : "John",
        "last" : "McCarthy"
    },
    "birth" : ISODate("1927-09-04T04:00:00Z"),
    "death" : ISODate("2011-12-24T05:00:00Z"),
    "contribs" : [
        "Lisp",
        "Artificial Intelligence",
        "ALGOL"
    ],
    "awards" : [
        {
            "award" : "Turing Award",
            "year" : 1971,
            "by" : "ACM"
        },
        {
            "award" : "Kyoto Prize",
            "year" : 1988,
            "by" : "Inamori Foundation"
        },
        {
            "award" : "National Medal of Science",
            "year" : 1990,
            "by" : "National Science Foundation"
        }
    ]
},

{
    "_id" : 3,
    "name" : {
        "first" : "Grace",
        "last" : "Hopper"
    },
    "title" : "Rear Admiral",
    "birth" : ISODate("1906-12-09T05:00:00Z"),
    "death" : ISODate("1992-01-01T05:00:00Z"),
    "contribs" : [
        "UNIVAC",
        "compiler",
        "FLOW-MATIC",
        "COBOL"
    ],
    "awards" : [
        {
            "award" : "Computer Sciences Man of the Year",
            "year" : 1969,
            "by" : "Data Processing Management Association"
        },
        {
            "award" : "Distinguished Fellow",
            "year" : 1973,
            "by" : " British Computer Society"
        },
        {
            "award" : "W. W. McDowell Award",
            "year" : 1976,
            "by" : "IEEE Computer Society"
        },
        {
            "award" : "National Medal of Technology",
            "year" : 1991,
            "by" : "United States"
        }
    ]
},

{
    "_id" : 4,
    "name" : {
        "first" : "Kristen",
        "last" : "Nygaard"
    },
    "birth" : ISODate("1926-08-27T04:00:00Z"),
    "death" : ISODate("2002-08-10T04:00:00Z"),
    "contribs" : [
        "OOP",
        "Simula"
    ],
    "awards" : [
        {
            "award" : "Rosing Prize",
            "year" : 1999,
            "by" : "Norwegian Data Association"
        },
        {
            "award" : "Turing Award",
            "year" : 2001,
            "by" : "ACM"
        },
        {
            "award" : "IEEE John von Neumann Medal",
            "year" : 2001,
            "by" : "IEEE"
        }
    ]
},

{
    "_id" : 5,
    "name" : {
        "first" : "Ole-Johan",
        "last" : "Dahl"
    },
    "birth" : ISODate("1931-10-12T04:00:00Z"),
    "death" : ISODate("2002-06-29T04:00:00Z"),
    "contribs" : [
        "OOP",
        "Simula"
    ],
    "awards" : [
        {
            "award" : "Rosing Prize",
            "year" : 1999,
            "by" : "Norwegian Data Association"
        },
        {
            "award" : "Turing Award",
            "year" : 2001,
            "by" : "ACM"
        },
        {
            "award" : "IEEE John von Neumann Medal",
            "year" : 2001,
            "by" : "IEEE"
        }
    ]
},

{
    "_id" : 6,
    "name" : {
        "first" : "Guido",
        "last" : "van Rossum"
    },
    "birth" : ISODate("1956-01-31T05:00:00Z"),
    "contribs" : [
        "Python"
    ],
    "awards" : [
        {
            "award" : "Award for the Advancement of Free Software",
            "year" : 2001,
            "by" : "Free Software Foundation"
        },
        {
            "award" : "NLUUG Award",
            "year" : 2003,
            "by" : "NLUUG"
        }
    ]
},

{
    "_id" : ObjectId("51e062189c6ae665454e301d"),
    "name" : {
        "first" : "Dennis",
        "last" : "Ritchie"
    },
    "birth" : ISODate("1941-09-09T04:00:00Z"),
    "death" : ISODate("2011-10-12T04:00:00Z"),
    "contribs" : [
        "UNIX",
        "C"
    ],
    "awards" : [
        {
            "award" : "Turing Award",
            "year" : 1983,
            "by" : "ACM"
        },
        {
            "award" : "National Medal of Technology",
            "year" : 1998,
            "by" : "United States"
        },
        {
            "award" : "Japan Prize",
            "year" : 2011,
            "by" : "The Japan Prize Foundation"
        }
    ]
},

{
    "_id" : 8,
    "name" : {
        "first" : "Yukihiro",
        "aka" : "Matz",
        "last" : "Matsumoto"
    },
    "birth" : ISODate("1965-04-14T04:00:00Z"),
    "contribs" : [
        "Ruby"
    ],
    "awards" : [
        {
            "award" : "Award for the Advancement of Free Software",
            "year" : "2011",
            "by" : "Free Software Foundation"
        }
    ]
},

{
    "_id" : 9,
    "name" : {
        "first" : "James",
        "last" : "Gosling"
    },
    "birth" : ISODate("1955-05-19T04:00:00Z"),
    "contribs" : [
        "Java"
    ],
    "awards" : [
        {
            "award" : "The Economist Innovation Award",
            "year" : 2002,
            "by" : "The Economist"
        },
        {
            "award" : "Officer of the Order of Canada",
            "year" : 2007,
            "by" : "Canada"
        }
    ]
},

{
    "_id" : 10,
    "name" : {
        "first" : "Martin",
        "last" : "Odersky"
    },
    "contribs" : [
        "Scala"
    ]
}
	]) //insert 10 doc in link

db.test.insert(
	{
	"_id" : 20, 
	"name" : {
		"first" : "Alex",
		"last" : "Chen" 
	},
	"birth" : ISODate("1933-08-27T04:00:00Z"),
	 "death" : ISODate("1984-11-07T04:00:00Z"), 
	 "contribs" : [
		"C++",
		"Simula"
	],
	"awards" : [
		{
		"award" : "WPI Award", "year" : 1977,
		"by" : "WPI"
	} ]
	}
) // insert new record 

db.test.insert(
	{
	"_id" : 30, 
	"name" : {
		"first" : "David",
		"last" : "Mark" 
	},
	"birth" : ISODate("1911-04-12T04:00:00Z"), 
	"death" : ISODate("2000-11-07T04:00:00Z"), 
	"contribs" : [
		"C++", "FP", "Lisp",
	],
	"awards" : [
		{
		"award" : "WPI Award", 
		"year" : 1963,
		"by" : "WPI"
		}, 
		{
		"award" : "Turing Award", 
		"year" : 1966,
		"by" : "ACM"
	} ]
}) // insert new record
print("Sucessful Creation")

//(1.2)
print("\n")
print("Question 1.2")
var cursor2 = db.test.find({
	awards:{
		$elemMatch:{
			award:'Turing Award',
			year:{$gt:1976}
		}
	}
})
cursor2.forEach(function(doc){
    printjson(doc)
})

//(1.3)
print("\n")
print("Question 1.3")
var cursor3 = db.test.find({
    $or:[{"awards.2":{$exists:0}},{contribs:'FP'}]
})
cursor3.forEach(function(doc){
    printjson(doc)
})

//(1.4)
print("\n")
print("Question 1.4")
var cursor4 = db.test.find({
    "name.first":'Dennis',
    "name.last":'Ritchie'
    },{
        name:1,
        contribs:1,
        _id:0
    }
)
cursor4.forEach(function(doc){
    printjson(doc)
})

//(1.5)
print("\n")
print("Question 1.5")
db.test.update({
    "name.first":'Guido',
    "name.last":'van Rossum'
    },{
        $push:{contribs:'OOP'}
})
printjson(db.test.findOne({"name.first":"Guido","name.last":"van Rossum"}))

//(1.6)
print("\n")
print("Question 1.6")
db.test.update({
    "name.first":'Alex',
    "name.last":'Chen'
    },{
       $push:{comments:{$each:["He taught in 3 universities","died from cancer","lived in CA"]}}
        }
)
printjson(db.test.findOne({"name.first":"Alex","name.last":"Chen"}))

//(1.7)
print("\n")
print("Question 1.7")
var ConArray = db.test.findOne({
    "name.first":'Alex',
    "name.last":'Chen'
}).contribs
var cursor7 = db.test.aggregate([
    {$unwind:"$contribs"},
    {$match:{contribs:{$in:ConArray}}},
    {$group:{_id:"$contribs",people:{$addToSet:"$name"}}}
])
cursor7.forEach(function(doc){
    printjson(doc)
})

//(1.8)
print("\n")
print("Question 1.8")
var cursor8 = db.test.distinct("awards.by")
cursor8.forEach(function(doc){
    printjson(doc)
})

//(1.9)
print("\n")
print("Question 1.9")
print(db.test.find({death:{$exists:1}}).count())
db.test.update({death:{$exists:1}},{$unset:{death:1}},{multi:true})
print(db.test.find({death:{$exists:1}}).count())

//(1.10)
print("\n")
print("Question 1.10")
print(db.test.find({"awards.year":{$in:[2011,"2011"]}}).count())
db.test.updateMany({"awards.year":{$in:[2011, '2011']}},{$pull:{awards:{year:{$in:[2011,"2011"]}}}})
print(db.test.find({"awards.year":{$in:[2011,"2011"]}}).count())

//(1.11)
print("\n")
print("Question 1.11")
db.test.update({
    "_id":30,
    "awards.by":"WPI"
    },{
        $set:{"awards.$.year":1965}
    },false, true
)
printjson(db.test.findOne({"_id":30}))

//(1.12)
print("\n")
print("Question 1.12")
printjson(db.test.findOne({"_id":30},{contribs:1}))
var cursor12 = db.test.findOne({
	_id:3
})
db.test.update({
	_id:30},
	{
		$addToSet:{contribs:{$each:cursor12.contribs}}
	}
)
printjson(db.test.findOne({"_id":30},{contribs:1}))

//(1.13)
print("\n")
print("Question 1.13")
var cursor13 = db.test.aggregate([
	{$unwind:"$awards"},
	{$match:{"awards.year":2001}},
	{$group:{_id:"$name",count:{$sum:1}}},
	{$match:{count:{$gt:1}}}
	])
cursor13.forEach(function(doc){
    printjson(doc)
})

//(1.14)
print("\n")
print("Question 1.14")
var Largestid = db.test.find({},{'_id':1}).sort({'_id':-1}).limit(1).toArray()
var cursor14 = db.test.find({_id:Largestid[0]._id})
cursor14.forEach(function(doc){
    printjson(doc)
})

//(1.15)
print("\n")
print("Question 1.15")
printjson(db.test.findOne({
	"awards.by":"ACM"
}))




//(2.1)
print("\n")
print("\n")
print("Start of Question 2")
print("Question 2.1")
var mapfunc = function(){
    if (this.awards){
        for(var idx=0; idx<this.awards.length; idx++){
            var key = this.awards[idx].award
            var value = 1
            emit(key,value)
        }
    }
};
var reducefunc = function(key,values){
        return Array.sum(values)
    };
db.test.mapReduce(
    mapfunc,
    reducefunc,
    {out:"Q2_1"}
)
db.Q2_1.find().forEach(function (doc) {
  printjsononeline(doc)
})

//(2.2)
print("\n")
print("Question 2.2")
var cursor2_2 = db.test.aggregate([
    {$group:{_id:{year:{$year:"$birth"}},id:{$addToSet:"$_id"}}}
])
cursor2_2.forEach(function(doc){
    printjson(doc)
})

//(2.3)
print("\n")
print("Question 2.3")
var LargeCur = db.test.aggregate([
    {$sort:{_id:-1}},
    {$limit:1}
])
print("Largest Id")
LargeCur.forEach(function(doc){
    printjson(doc)
})

var SmallCur = db.test.aggregate([
    {$sort:{_id:1}},
    {$limit:1}
])
print("Smallest Id")
SmallCur.forEach(function(doc){
    printjson(doc)
})




//(3.1)
print("\n")
print("\n")
print("Start of Question 3")
print("Question 3.1")
db.categories.drop()
db.categories.insert({_id:"MongoDB",parents:"Databases"})
db.categories.insert({_id:"dbm",parents:"Databases"})
db.categories.insert({_id:"Databases",parents:"Programming"})
db.categories.insert({_id:"Languages",parents:"Programming"})
db.categories.insert({_id:"Programming",parents:"Books"})
db.categories.insert({_id:"Books",parents:null})


var Ancesters = []
var stack = []
var level = 1
var item = db.categories.findOne({_id:"MongoDB"})
stack.push(item)
while(stack.length>0){
    var current = stack.pop()
    var Parent = db.categories.find({_id:current.parents})
    while(Parent.hasNext() == true){
        var parent = Parent.next()
        Ancesters.push({"Name":parent._id,"Level":level})
        level = level + 1
        stack.push(parent)
    } 
}
printjson(Ancesters)

//(3.2)
print("\n")
print("Question 3.2")
var Parent = []
var stack = []
var Level = [1]
level = 1
var item = db.categories.findOne({_id:"Books"})
stack.push(item)
while(stack.length>0){
    var current = stack.shift()
    var children = db.categories.find({parents:current._id})
    while(children.hasNext() == true){
        Level.push(level)
        var child = children.next()
        if (Parent.indexOf(child.parents) == -1){
            Parent.push(child.parents)
            level = level + 1
        }
        stack.push(child)
    }
}
print("the height is: " + Level[Level.length-1])

//(3.3)
print("\n")
print("Question 3.3")
db.categories.drop()
db.categories.insert({_id:"MongoDB",children:[]})
db.categories.insert({_id:"dbm",children:[]})
db.categories.insert({_id:"Databases",children:["MongoDB","dbm"]})
db.categories.insert({_id:"Languages",children:[]})
db.categories.insert({_id:"Programming",children:["Databases","Languages"]})
db.categories.insert({_id:"Books",children:["Programming"]})

var parent = db.categories.findOne({children:"dbm"},{_id:1})
print("parent of dbm: " + parent._id)

//(3.4)
print("\n")
print("Question 3.4")
var Descendants = []
var stack = []
var item = db.categories.findOne({_id:"Books"})
stack.push(item)
while(stack.length>0){
    var current = stack.pop()
    var Children = db.categories.find({_id:{$in:current.children}})
    while(Children.hasNext() == true){
        var child = Children.next()
        Descendants.push(child._id)
        stack.push(child)
    } 
}
printjson(Descendants)