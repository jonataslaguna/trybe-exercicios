module.exports = (sequelize, _DataTypes) => {
    const UserBook = sequelize.define(
      'UserBook',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'users_books',
      },
    );
    
    UserBook.associate = (models) => {
        models.Book.belongsToMany(models.User, {
          as: 'users',
          through: UserBook,
          foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books` 
          
        /* Lembre-se: foreignKey sempre se refere ao model em que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação. */

          otherKey: 'userId', // se refere a outra chave de `users_books`
        });
        models.User.belongsToMany(models.Book, {
          as: 'books',
          through: UserBook,
          foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
          otherKey: 'bookId',
        });
    };

    return UserBook;
  };