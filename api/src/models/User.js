const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    userName: {
      type: DataTypes.STRING,
      
    },
    email:{
        type:DataTypes.STRING,
        
    },
    password:{
        type:DataTypes.STRING,
        
    },
    state:{
      type:DataTypes.BOOLEAN,
      defaultValue: 'false'
  },
  });
};
