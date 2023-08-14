module.exports = {
    server_port: process.env.PORT,
    db_connection: process.env.LOCAL_MONGO_URI,
    secret_key: process.env.SECRET_KEY,
    jwt_expires: process.env.JWT_EXPIRE
}