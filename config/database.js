if(process.env.NODE_ENV ==='production'){
module.exports = {mongoURI: 'mongodb://<Aneesh>:<Aneeshk1995!>@ds143603.mlab.com:43603/projectideas'}
}
else{
module.exports = {mongoURI: 'mongodb://localhost/projectideas-dev' }
}