const express = require ("express") ;

const app = express () ;

require ("dotenv").config()



const connectDB = require('./config/connectDB') ;
connectDB()

app.use(express.json())


app.use("/api/user", require('./routes/user'))
app.use("/api/admin", require('./routes/Admin'))
app.use("/api/order", require('./routes/order'))
app.use("/api/products", require('./routes/product'))



const PORT = process.env.PORT

app.listen(PORT , (error) => 
    error ? console.error (`Failed to connect to server ${error}`)
    :
    console.log(`Server is running on port ${PORT}`)
);


