const mongoose = require('mongoose');

const main = async() => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/backend');
        console.log('Connected to DB');
        // await StudentModel.insertMany({name : 'Chunnu', org : 'Meta', city : 'Delhi'})
        const student = new StudentModel({
            name : 'Munnu',
            org : 'Google',
            city : 'California'
        })

        await student.save();
        
        connection.disconnect();
        console.log('Disconnected');
    } catch (error) {
        console.log(error);
    }
}

main();

// Creating structure of the data that I want to store in the data base.

const studentSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
}, {
    versionKey : false
})

const StudentModel = mongoose.model('student', studentSchema);