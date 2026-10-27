const mongoose = require("mongoose")
const Recipe = require("./models/Recipe")



async function connectToDB(connectionString) { //connection to the database
    try {
        await mongoose.connect("mongodb://localhost:27017/lab")
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


async function addRecipe() {
    const newRecipe = await Recipe.create({
        name: "Um Ali",
        instructions: "bake at 180C",
        prepTime: 120,
        difficulty: "Medium"
    })
    console.log(newRecipe)
}

async function getAllRecipe() {
    const allRecipe = await Recipe.find({})

    console.log(allRecipe)
}

async function getRecipeById(id) {
    const RecipeByID = await Recipe.findById(id)

    console.log(RecipeByID)
}

async function updateOneBookByID() {
    const updatedBook = await Book.findByIdAndUpdate("6adf0704c03ce5997f7135d5", { price: 1000 }, { new: true })
}

async function updateRecipeById(id, obj) {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, obj, { new: true })
    console.log(updatedRecipe)
}

updateRecipeById("6ae03f4f63c86aed2d1610eb", { name: "ALi" })


async function deleateRecipeById(id) {
    const DeleateByID = await Recipe.findByIdAndDelete(id)

    console.log(DeleateByID)
}

deleateRecipeById("6ae03f1126f0297de8169496")


connectToDB()