module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, 
      tableName: 'employees',
      underscored: true,
    });
  
    Employee.associate = (models) => {
      Employee.hasMany(models.Address, // UM FUNCIONÁRIO TEM UM ENDEREÇO(hasOne) --> ***NOME DA MODEL***
        { foreignKey: 'employeeId', as: 'addresses' }); // COMO O RELACIONAMENTO ACONTECE --> employeeId
    };
  
    return Employee;
  };