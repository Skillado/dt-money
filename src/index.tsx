import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
      {
          id:1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-20 09:00:00'),
      } ,
      {
        id:2,
        title: 'Teclado SK64S Gateron Switch Red Bluetooth 5.1 Customized',
        type: 'withdraw',
        category: 'Compras',
        amount: 510,
        createdAt: new Date('2021-02-20  11:00:00'),
    }
      
    ]
    })
  },

  routes(){
    this.namespace = 'api';
    
    this.get('transactions', (schema) => {
      return schema.all('transactions');
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    })


  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);