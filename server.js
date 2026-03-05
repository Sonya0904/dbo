const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

const databaseConfig = {
    server: "A402PCPREPOD",
    database: "Zolotaryova-Sonya",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true,
        trustServerCerficate: true
    }
};

app.get("/users", async(req,res)=> {
    const connect = await sql.connect(databaseConfig);

    const result = await connect.request()
    .query("SELECT * FROM dbo.users");

    res.json(result.recordset);
});

app.post("/users",async (req, res) => {
    const connect = await sql.connect(databaseConfig);

    const {name, lastname, city, birhday, hobbies, phone_number, sallary, group_id} = req.body;

    await connect.request()
    .input("name", sql.NVarChar,name)
    .input("lastname", sql.NVarChar,lastname)
    .input("city", sql.NVarChar,city)
    .input("birhday", sql.Data,birhday)
    .input("hobbies", sql.NChar,hobbies)
    .input("phone_number", sql.NChar,phone_number)
    .input("sallary", sql.Money,sallary)
    .input("group_id", sql.Int,group_id)
    .query(`
        INSERT INTO dbo.users(name, lastname, city, birhday, hobbies, phone_number, sallary, group_id)
        VALUES (@name, @lastname, @city, @birhday, @hobbies, @phone_number, @sallary, @group_id)
    `);

    res.send("OK");
});

app.listen(3000, () => {
    console.log('server started')
});