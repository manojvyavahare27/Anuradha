const mysql = require('mysql');
const fs = require('fs');

// MySQL database configuration
const dbConfig = {
    host: "10.0.0.64",
    user: "ManojV.cellmaapi",
    password: "Welcome@123",
    port: 3310,
    database: "cellma4_api",
    connectionLimit: 10
};

module.exports = {
  executeQuery: (query,sqlFilePath) => {
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection(dbConfig);

      connection.connect((err) => {
        if (err) {
          reject(err);
        }
        connection.query(query, (err, results) => {
          if (err) {
            reject(err);
          }
          // Write results to JSON file
          const jsonData = JSON.stringify(results, null, 2);
         // const filepath='C:/Riomed/Cellma4Automation/PatientDomain'
          //const fileName = 'C:\\Riomed\\Cellma4Automation\\SQLResults\\PatientDomain\\patientData.json';
          const fileName=sqlFilePath
          fs.writeFile(fileName, jsonData, (err) => {
            if (err) {
              console.error('Error writing JSON to file:', err);
              reject(err); // Reject the Promise if there's an error writing to the file
            } else {
              console.log('Successfully stored results into JSON:', fileName);
              connection.end(); // Close the database connection
              resolve(results); // Resolve the Promise with the query results
            }
          });
        });
      });
    });
  }
};
