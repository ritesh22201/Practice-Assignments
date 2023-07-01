const mongoose = require('mongoose');

const main = async() => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/backend');
        console.log('Connected to DB');
        // await StudentModel.insertMany({name : 'Chunnu', org : 'Meta', city : 'Delhi'})  // For inserting the data
        const student = new StudentModel({
            name : 'Munnu',
            org : 'Google',
            city : 'California'
        })  // Alternative approach for inserting the data
        await student.save();
        // const students = await StudentModel.find({$and : [{age : {$gte : 20}}, {age : {$lte : 30}}]});
        connection.disconnect();
        console.log('Disconnected');
    } catch (error) {
        console.log(error);
    }
}

main();

// Creating structure of the data that I want to store in the data base.

const studentSchema = mongoose.Schema({
    name : {type : String, required: true},
    age : {type : Number, required : true},
    city : {type : String, required : true}
}, {
    versionKey : false
})

const StudentModel = mongoose.model('student', studentSchema);