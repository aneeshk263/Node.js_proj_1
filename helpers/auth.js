module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    req.flash('error_msg', 'Not an Authorized User');
    res.redirect('/users/login');
  }
}
