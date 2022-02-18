module.exports = {
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },

    mongoseToOject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
