module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('Users', {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING
        }
    
      }, {
        
      });
}

