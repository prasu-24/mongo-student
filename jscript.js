const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/studentdata')
  .then(() => console.log('Database connected successfully'))
  .catch((e) => console.log('Not connected', e))

const studentSchema = new mongoose.Schema({
  studentid: String,
  name: String,
  grades: String,
  subjects: String,
  achievements: String,
  activity: String,
});

const academic = mongoose.model('academic', studentSchema);
const cocurricular = mongoose.model('cocurricular', studentSchema);

const academicData = [
  {
    studentid: '22985a0507',
    name: 'prasanna',
    grades: 'A',
    subjects: 'c,c++,java'
  },
  {
    studentid: '22985a0513',
    name: 'harsha',
    grades: 'B',
    subjects: 'c,c++,java'
  },
  {
    studentid: '22985a0514',
    name: 'kavya',
    grades: 'A',
    subjects: 'c,c++,java'
  },
];

const cocurricularData = [
  {
    studentid: '22985a0507',
    name: 'prasanna',
    activity: 'sports',
    achievements: 'participation certificates'
  },
  {
    studentid: '22985a0513',
    name: 'harsha',
    activity: 'dancing',
    achievements: '1st prize'
  },
  {
    studentid: '22985a0514',
    name: 'kavya',
    activity: 'singing',
    achievements: '2nd prize'
  },
];

// Saving academic data
academic.insertMany(academicData)
  .then((docs) => {
    console.log('Academic data saved successfully:', docs);
  })
  .catch((error) => {
    console.error('Error saving academic data:', error);
  });

// Saving cocurricular data
cocurricular.insertMany(cocurricularData)
  .then((docs) => {
    console.log('Cocurricular data saved successfully:', docs);
  })
  .catch((error) => {
    console.error('Error saving cocurricular data:', error);
  });

  // Creating a new academic record
const newAcademicRecord = new academic({
    studentid: '22985a4904',
    name: 'Nitish',
    grades: 'B',
    subjects: 'iot,embedded systems'
  });
  
  // Saving the new academic record
  newAcademicRecord.save()
    .then((doc) => {
      console.log('New academic record created successfully:', doc);
    })
    .catch((error) => {
      console.error('Error creating academic record:', error);
    });

// Retrieving a specific cocurricular record
cocurricular.findOne({ studentid: '22985a0507' })
  .then((cocurricularDoc) => {
    console.log('Cocurricular record by studentid:', cocurricularDoc);
  })
  .catch((error) => {
    console.error('Error retrieving cocurricular record:', error);
  });
// updation
academic.updateOne(
    { studentid: '22985a0507' },
    { $set: { grades: 'C' } }
  )
    .then(() => {
      console.log('Academic data updated successfully.');
    })
    .catch((error) => {
      console.error('Error updating academic data:', error);
    });
 
//deleting cocurricular record

cocurricular.deleteOne({ studentid: '22985a0513' })
  .then(() => {
    console.log('Cocurricular data deleted successfully.');

  })
  .catch((error) => {
    console.error('Error deleting cocurricular data:', error);
  });

  