module.exports = (sequelize, DataTypes)=>{
  const Contact = sequelize.define('Contacts', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    }
  }, {

  });
  return Contact;
}


